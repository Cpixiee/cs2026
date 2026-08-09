package main

import (
	"fmt"
	"log"
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"cs2026/backend/internal/db"
	"cs2026/backend/internal/handlers"
)

func main() {
	_ = godotenv.Load()

	port := os.Getenv("PORT")
	if port == "" {
		port = "9004"
	}

	database := db.InitDB()
	subHandler := handlers.NewSubscriberHandler(database)

	router := gin.Default()

	// CORS configuration
	config := cors.DefaultConfig()
	config.AllowAllOrigins = true
	config.AllowHeaders = []string{"Origin", "Content-Type", "Accept", "Authorization"}
	router.Use(cors.New(config))

	// Health check endpoint
	router.GET("/health", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"status":  "ok",
			"service": "Cyber Space 2026 Go API",
		})
	})

	// API v1 routes
	v1 := router.Group("/api/v1")
	{
		v1.POST("/subscribe", subHandler.Subscribe)
		v1.GET("/subscribers", subHandler.GetSubscribers)
	}

	addr := fmt.Sprintf(":%s", port)
	log.Printf("🚀 Cyber Space 2026 Go Backend server running on http://localhost%s\n", addr)
	if err := router.Run(addr); err != nil {
		log.Fatalf("Server error: %v", err)
	}
}
