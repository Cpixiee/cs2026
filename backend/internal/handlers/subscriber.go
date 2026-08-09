package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"cs2026/backend/internal/db"
	"cs2026/backend/internal/models"
)

type SubscriberHandler struct {
	db *db.DBService
}

func NewSubscriberHandler(db *db.DBService) *SubscriberHandler {
	return &SubscriberHandler{db: db}
}

func (h *SubscriberHandler) Subscribe(c *gin.Context) {
	var req models.SubscribeRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"success": false,
			"error":   "Invalid email address provided",
		})
		return
	}

	sub, err := h.db.AddSubscriber(req.Email)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"success": false,
			"error":   "Failed to process pre-registration",
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"success": true,
		"message": "Welcome to Cyber Space 2026! You are pre-registered.",
		"data":    sub,
	})
}

func (h *SubscriberHandler) GetSubscribers(c *gin.Context) {
	list, err := h.db.GetSubscribers()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"success": false,
			"error":   "Failed to retrieve subscribers",
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"success": true,
		"count":   len(list),
		"data":    list,
	})
}
