"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
// Configure dotenv
dotenv_1.default.config();
// Initialize express app
const app = (0, express_1.default)();
// Load environment variables
const port = process.env.PORT || 3000;
// Enable CORS
app.use((0, cors_1.default)({
    origin: "http://localhost:5173",
    methods: "GET",
    credentials: true, // Allows cookies and auth headers
}));
// Read book data from JSON file
const booksData = JSON.parse((0, fs_1.readFileSync)(path_1.default.join(__dirname, "db", "books.json"), "utf-8"));
// API endpoint to fetch books with filtering and sorting
app.get("/api/books", (req, res) => {
    try {
        let { genre, year, pages, sort } = req.query;
        let filteredBooks = [...booksData];
        // Apply filters dynamically
        if (genre) {
            filteredBooks = filteredBooks.filter((book) => book.genre.toLowerCase().includes(genre.toLowerCase()));
        }
        if (year) {
            filteredBooks = filteredBooks.filter((book) => book.year === parseInt(year));
        }
        if (pages) {
            filteredBooks = filteredBooks.filter((book) => book.pages === parseInt(pages));
        }
        // Apply sorting
        if (sort === "year_asc") {
            filteredBooks.sort((a, b) => a.year - b.year);
        }
        else if (sort === "year_desc") {
            filteredBooks.sort((a, b) => b.year - a.year);
        }
        else if (sort === "pages_asc") {
            filteredBooks.sort((a, b) => a.pages - b.pages);
        }
        else if (sort === "pages_desc") {
            filteredBooks.sort((a, b) => b.pages - a.pages);
        }
        res.json(filteredBooks);
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});
// Start server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
