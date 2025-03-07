import { fetchBooks } from "./events";

// Function to display books on the page
const displayBooks = (books: any[]) => {
  const bookList = document.getElementById("product-list");
  if (!bookList) return;

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
const loadBooks = async (args: string = "") => {
  const books = await fetchBooks(args);
  displayBooks(books);
};

// Load all books initially
loadBooks();

// Filtering by genre, year, or page count dynamically
document.getElementById("filterBtn")?.addEventListener("click", async () => {
  const genre = (document.getElementById("genreInput") as HTMLInputElement)?.value;
  const year = (document.getElementById("yearInput") as HTMLInputElement)?.value;
  const pages = (document.getElementById("pagesInput") as HTMLInputElement)?.value;

  let queryParams = "?";
  if (genre) queryParams += `genre=${encodeURIComponent(genre)}&`;
  if (year) queryParams += `year=${year}&`;
  if (pages) queryParams += `pages=${pages}&`;

  queryParams = queryParams.replace(/&$/, ""); // Remove trailing "&"

  const filteredBooks = await fetchBooks(queryParams);
  displayBooks(filteredBooks);
});

// Sorting books
document.getElementById("sortYearAsc")?.addEventListener("click", async () => {
  const sortedBooks = await fetchBooks("?sort=year_asc");
  displayBooks(sortedBooks);
});

document.getElementById("sortYearDesc")?.addEventListener("click", async () => {
  const sortedBooks = await fetchBooks("?sort=year_desc");
  displayBooks(sortedBooks);
});

document.getElementById("sortPagesAsc")?.addEventListener("click", async () => {
  const sortedBooks = await fetchBooks("?sort=pages_asc");
  displayBooks(sortedBooks);
});

document.getElementById("sortPagesDesc")?.addEventListener("click", async () => {
  const sortedBooks = await fetchBooks("?sort=pages_desc");
  displayBooks(sortedBooks);
});
