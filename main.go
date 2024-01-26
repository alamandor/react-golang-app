// main.go
package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
)

type Product struct {
	gorm.Model
	Name     string
	Price    float64
	ImageURL string
}

var db *gorm.DB

func main() {
	// Initialize SQLite database
	var err error
	db, err = gorm.Open("sqlite3", "test.db")
	if err != nil {
		panic("Failed to connect to database")
	}
	defer db.Close()

	// Migrate the schema
	db.AutoMigrate(&Product{})

	// Create sample data
	db.Create(&Product{Name: "Product 1", Price: 29.99, ImageURL: "https://via.placeholder.com/150"})
	db.Create(&Product{Name: "Product 2", Price: 39.99, ImageURL: "https://via.placeholder.com/150"})
	db.Create(&Product{Name: "Product 3", Price: 49.99, ImageURL: "https://via.placeholder.com/150"})

	router := gin.Default()

	router.GET("/api/products", func(c *gin.Context) {
		var products []Product
		db.Find(&products)
		c.JSON(http.StatusOK, products)
	})

	router.Run(":8080")
}
