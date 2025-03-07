var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b, _c, _d, _e;
import { fetchBooks } from "./events";
// Function to display books on the page
const displayBooks = (books) => {
    const bookList = document.getElementById("product-list");
    if (!bookList)
        return;
    bookList.innerHTML = books.map(book => `
    <div class="book">
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Year:</strong> ${book.year}</p>
      <p><strong>Genre:</strong> ${book.genre}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Price:</strong> $${book.price.toFixed(2)}</p>
      <img src="${book.image}" alt="${book.title}" width="100">
    </div>
  `).join("");
};
// Fetch and display books on page load
const loadBooks = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (args = "") {
    const books = yield fetchBooks(args);
    displayBooks(books);
});
// Load all books initially
loadBooks();
// Filtering by genre, year, or page count dynamically
(_a = document.getElementById("filterBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const genre = (_a = document.getElementById("genreInput")) === null || _a === void 0 ? void 0 : _a.value;
    const year = (_b = document.getElementById("yearInput")) === null || _b === void 0 ? void 0 : _b.value;
    const pages = (_c = document.getElementById("pagesInput")) === null || _c === void 0 ? void 0 : _c.value;
    let queryParams = "?";
    if (genre)
        queryParams += `genre=${encodeURIComponent(genre)}&`;
    if (year)
        queryParams += `year=${year}&`;
    if (pages)
        queryParams += `pages=${pages}&`;
    queryParams = queryParams.replace(/&$/, ""); // Remove trailing "&"
    const filteredBooks = yield fetchBooks(queryParams);
    displayBooks(filteredBooks);
}));
// Sorting books
(_b = document.getElementById("sortYearAsc")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    const sortedBooks = yield fetchBooks("?sort=year_asc");
    displayBooks(sortedBooks);
}));
(_c = document.getElementById("sortYearDesc")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    const sortedBooks = yield fetchBooks("?sort=year_desc");
    displayBooks(sortedBooks);
}));
(_d = document.getElementById("sortPagesAsc")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    const sortedBooks = yield fetchBooks("?sort=pages_asc");
    displayBooks(sortedBooks);
}));
(_e = document.getElementById("sortPagesDesc")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    const sortedBooks = yield fetchBooks("?sort=pages_desc");
    displayBooks(sortedBooks);
}));
//# sourceMappingURL=index.js.map