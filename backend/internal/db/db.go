package db

import (
	"database/sql"
	"fmt"
	"log"
	"os"
	"sync"
	"time"

	_ "github.com/lib/pq"
	"cs2026/backend/internal/models"
)

type DBService struct {
	db          *sql.DB
	useInMemory bool
	memMu       sync.Mutex
	memList     []models.Subscriber
}

func InitDB() *DBService {
	host := getEnv("DB_HOST", "localhost")
	port := getEnv("DB_PORT", "5432")
	user := getEnv("DB_USER", "postgres")
	password := getEnv("DB_PASSWORD", "cyberspace2026")
	dbname := getEnv("DB_NAME", "cyberspace")
	sslmode := getEnv("DB_SSLMODE", "disable")

	connStr := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=%s",
		host, port, user, password, dbname, sslmode)

	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Printf("⚠️ PostgreSQL connection failed (%v). Falling back to in-memory storage.\n", err)
		return &DBService{useInMemory: true}
	}

	db.SetMaxOpenConns(25)
	db.SetMaxIdleConns(5)
	db.SetConnMaxLifetime(5 * time.Minute)

	if err := db.Ping(); err != nil {
		log.Printf("⚠️ PostgreSQL ping failed (%v). Falling back to in-memory storage.\n", err)
		return &DBService{useInMemory: true}
	}

	log.Println("✅ Connected to PostgreSQL database successfully!")
	service := &DBService{db: db, useInMemory: false}
	if err := service.migrate(); err != nil {
		log.Printf("⚠️ Migration error: %v\n", err)
	}
	return service
}

func (s *DBService) migrate() error {
	query := `
	CREATE TABLE IF NOT EXISTS subscribers (
		id SERIAL PRIMARY KEY,
		email VARCHAR(255) UNIQUE NOT NULL,
		created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
	);`
	_, err := s.db.Exec(query)
	if err == nil {
		log.Println("✅ Database schema migrated successfully!")
	}
	return err
}

func (s *DBService) AddSubscriber(email string) (*models.Subscriber, error) {
	sub := &models.Subscriber{
		Email:     email,
		CreatedAt: time.Now(),
	}

	if s.useInMemory {
		s.memMu.Lock()
		defer s.memMu.Unlock()
		for _, existing := range s.memList {
			if existing.Email == email {
				return &existing, nil
			}
		}
		sub.ID = int64(len(s.memList) + 1)
		s.memList = append(s.memList, *sub)
		log.Printf("💾 [In-Memory] Added subscriber: %s (Total: %d)\n", email, len(s.memList))
		return sub, nil
	}

	query := `INSERT INTO subscribers (email, created_at) VALUES ($1, $2) ON CONFLICT (email) DO UPDATE SET email=EXCLUDED.email RETURNING id, created_at`
	err := s.db.QueryRow(query, email, sub.CreatedAt).Scan(&sub.ID, &sub.CreatedAt)
	if err != nil {
		return nil, err
	}
	log.Printf("🐘 [PostgreSQL] Added subscriber: %s (ID: %d)\n", email, sub.ID)
	return sub, nil
}

func (s *DBService) GetSubscribers() ([]models.Subscriber, error) {
	if s.useInMemory {
		s.memMu.Lock()
		defer s.memMu.Unlock()
		return s.memList, nil
	}

	rows, err := s.db.Query("SELECT id, email, created_at FROM subscribers ORDER BY created_at DESC")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var list []models.Subscriber
	for rows.Next() {
		var sub models.Subscriber
		if err := rows.Scan(&sub.ID, &sub.Email, &sub.CreatedAt); err != nil {
			return nil, err
		}
		list = append(list, sub)
	}
	return list, nil
}

func getEnv(key, fallback string) string {
	if val, ok := os.LookupEnv(key); ok {
		return val
	}
	return fallback
}
