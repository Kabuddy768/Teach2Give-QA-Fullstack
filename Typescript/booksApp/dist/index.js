"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Book data storage
let allBooks = [];
// Cart data storage
let cartItems = [];
// DOM Elements
const booksGrid = document.getElementById('books-grid');
const loadingMessage = document.getElementById('loading-message');
const errorMessage = document.getElementById('error-message');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const sortGenreBtn = document.getElementById('sort-genre');
const sortYearBtn = document.getElementById('sort-year');
const sortPagesBtn = document.getElementById('sort-pages');
const toggleCartBtn = document.getElementById('toggle-cart');
const cartPanel = document.getElementById('cart');
const closeCartBtn = document.getElementById('close-cart');
let expandedCard = null;
// Fetch books from server
function fetchBooks() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const loadingMessage = document.getElementById('loadingMessage');
            const errorMessage = document.getElementById('errorMessage');
            const booksGrid = document.getElementById('booksGrid');
            if (loadingMessage)
                loadingMessage.style.display = 'block';
            if (errorMessage)
                errorMessage.style.display = 'none';
            if (booksGrid)
                booksGrid.innerHTML = '';
            const response = yield fetch('http://localhost:3000/books');
            if (!response.ok) {
                throw new Error('Failed to fetch books');
            }
            allBooks = (yield response.json());
            displayBooks(allBooks);
        }
        catch (error) {
            console.error('Error fetching books:', error);
            if (errorMessage) {
                errorMessage.style.display = 'block';
                errorMessage.textContent = `Error: ${error.message}`;
            }
        }
        finally {
            if (loadingMessage)
                loadingMessage.style.display = 'none';
        }
    });
}
// Display books in the grid with a Buy button
function displayBooks(books) {
    booksGrid.innerHTML = '';
    if (books.length === 0) {
        booksGrid.innerHTML = '<p class="no-results">No books found matching your criteria.</p>';
        return;
    }
    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
            <div class="book-img" style="background-image: url('${book.image}'); background-size: cover; background-position: center; height: 220px;"></div>
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">by ${book.author}</p>
                <div class="book-details">
                    <span class="book-genre">${book.genre}</span>
                    <span class="book-year">${book.year}</span>
                    <span class="book-pages">${book.pages} pages</span>
                    <span class="book-price">Price: ${book.price}$</span>
                </div>
                <button class="buy-btn">Buy</button>
                <div class="book-description" style="display: none; margin-top: 15px; padding-top: 15px; border-top: 1px solid #eee;">
                    <p>${book.description}</p>
                    <p class="publisher"><small>Publisher: ${book.publisher}</small></p>
                </div>
            </div>
        `;
        // Expand/collapse description on card click
        bookCard.addEventListener('click', function () {
            const description = this.querySelector('.book-description');
            // If this card is already expanded, collapse it
            if (description.style.display === 'block') {
                description.style.display = 'none';
                expandedCard = null;
                return;
            }
            // If another card is expanded, collapse it first
            if (expandedCard) {
                const otherDescription = expandedCard.querySelector('.book-description');
                otherDescription.style.display = 'none';
            }
            // Expand this card
            description.style.display = 'block';
            expandedCard = this;
        });
        // Prevent card expansion when clicking on the Buy button
        const buyBtn = bookCard.querySelector('.buy-btn');
        buyBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            addToCart(book);
        });
        booksGrid.appendChild(bookCard);
    });
}
// Sort functions
function sortByGenre() {
    const sortedBooks = [...allBooks].sort((a, b) => a.genre.localeCompare(b.genre));
    displayBooks(sortedBooks);
}
function sortByYear() {
    const sortedBooks = [...allBooks].sort((a, b) => a.year - b.year);
    displayBooks(sortedBooks);
}
function sortByPages() {
    const sortedBooks = [...allBooks].sort((a, b) => a.pages - b.pages);
    displayBooks(sortedBooks);
}
// Search function
function searchBooks() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (!searchTerm) {
        displayBooks(allBooks);
        return;
    }
    const filteredBooks = allBooks.filter(book => book.title.toLowerCase().includes(searchTerm));
    displayBooks(filteredBooks);
}
// Cart functions
function addToCart(book) {
    // Assuming each book has a unique 'id' property
    const existingItem = cartItems.find(item => item.id === book.id);
    if (existingItem) {
        existingItem.quantity++;
    }
    else {
        // Clone the book object and add quantity property
        cartItems.push(Object.assign(Object.assign({}, book), { quantity: 1 }));
    }
    updateCartUI();
}
function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalEl = document.getElementById('cart-total');
    cartItemsContainer.innerHTML = '';
    let total = 0;
    cartItems.forEach(item => {
        total += item.price * item.quantity;
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
            <span>${item.title} ($${item.price}) x ${item.quantity}</span>
            <div class="cart-item-controls">
                <button class="minus-btn">-</button>
                <button class="plus-btn">+</button>
            </div>
        `;
        // Minus button event
        const minusBtn = cartItemDiv.querySelector('.minus-btn');
        minusBtn.addEventListener('click', () => {
            item.quantity--;
            if (item.quantity <= 0) {
                cartItems = cartItems.filter(i => i.id !== item.id);
            }
            updateCartUI();
        });
        // Plus button event
        const plusBtn = cartItemDiv.querySelector('.plus-btn');
        plusBtn.addEventListener('click', () => {
            item.quantity++;
            updateCartUI();
        });
        cartItemsContainer.appendChild(cartItemDiv);
    });
    cartTotalEl.textContent = total.toFixed(2);
}
// Event Listeners
document.addEventListener('DOMContentLoaded', fetchBooks);
sortGenreBtn.addEventListener('click', sortByGenre);
sortYearBtn.addEventListener('click', sortByYear);
sortPagesBtn.addEventListener('click', sortByPages);
searchBtn.addEventListener('click', searchBooks);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBooks();
    }
});
// Toggle cart display
toggleCartBtn.addEventListener('click', () => {
    cartPanel.classList.add('open');
});
closeCartBtn.addEventListener('click', () => {
    cartPanel.classList.remove('open');
});
//# sourceMappingURL=index.js.map