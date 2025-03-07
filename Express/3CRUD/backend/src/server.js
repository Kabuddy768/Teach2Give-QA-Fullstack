"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
// Configure dotenv
dotenv_1.default.config();
//instance of express
const app = (0, express_1.default)();
const port = process.env.PORT;
console.log(`We are using port ${port}`);
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type"]
}));
// Read book data from JSON file
let booksData;
[];
try {
    const filePath = path_1.default.join(__dirname, "db", "books.json");
    console.log("Reading books from:", filePath);
    const jsonContent = JSON.parse((0, fs_1.readFileSync)(filePath, "utf-8"));
    booksData = jsonContent.books; // Access the books array
}
catch (error) {
    console.error("Error reading books.json:", error);
    booksData = []; // Fallback to empty array
}
app.get('/api/books/:id?', (req, res) => {
    const { id } = req.params;
    if (id) {
        const bookId = parseInt(id);
        const book = booksData.find(book => book.id === bookId);
        if (book) {
            res.status(200).json({ message: `Book found ${book}` });
        }
        else {
            res.status(400).json({ message: "Book not found" });
        }
    }
    //if id not provided return all books
    res.status(200).json(booksData);
});
