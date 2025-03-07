import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { readFileSync } from "fs";
import path from "path";
import cors from "cors";

// Configure dotenv
dotenv.config();

// Initialize express app
const app = express();

// Load environment variables
const port = process.env.PORT || 3000;

// Enable CORS
app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    methods: ["GET"],
    allowedHeaders: ["Content-Type"]
  })
);

// Middleware to parse JSON
app.use(express.json());

// Read book data from JSON file
let booksData;
try {
  const filePath = path.join(__dirname, "db", "books.json");
  console.log("Reading books from:", filePath);
  const jsonContent = JSON.parse(readFileSync(filePath, "utf-8"));
  booksData = jsonContent.books; // Access the books array
} catch (error) {
  console.error("Error reading books.json:", error);
  booksData = []; // Fallback to empty array
}

// API endpoint to fetch books with filtering and sorting
app.get("/api/books", (req: Request, res: Response) => {
  try {
    let { genre, year, pages, sort } = req.query;

    let filteredBooks = [...booksData];

    // Apply filters dynamically
    if (genre) {
      filteredBooks = filteredBooks.filter((book) =>
        book.genre.toLowerCase().includes(String(genre).toLowerCase())
      );
    }
    if (year) {
      const yearNum = Number(year);
      filteredBooks = filteredBooks.filter((book) => book.year === yearNum);
    }
    if (pages) {
      const pagesNum = Number(pages);
      filteredBooks = filteredBooks.filter((book) => book.pages === pagesNum);
    }

    // Apply sorting
    if (sort === "year_asc") {
      filteredBooks.sort((a, b) => a.year - b.year);
    } else if (sort === "year_desc") {
      filteredBooks.sort((a, b) => b.year - a.year);
    } else if (sort === "pages_asc") {
      filteredBooks.sort((a, b) => a.pages - b.pages);
    } else if (sort === "pages_desc") {
      filteredBooks.sort((a, b) => b.pages - a.pages);
    }

    res.json(filteredBooks);
  } catch (error) {
    console.error("Error in book filtering:", error);
    res.status(500).json({ 
      error: "Internal server error", 
      details: error instanceof Error ? error.message : 'Unknown error' 
    });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});