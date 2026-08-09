package models

import "time"

type Subscriber struct {
	ID        int64     `json:"id"`
	Email     string    `json:"email"`
	CreatedAt time.Time `json:"created_at"`
}

type SubscribeRequest struct {
	Email string `json:"email" binding:"required,email"`
}
