interface Book {
    id: number;
    title: string;
    author: string;
    genre: string;
    year: number;
    pages: number;
    publisher: string;
    description: string;
    image: string;
    price: number;
}

interface CartItem extends Book {
    quantity: number;
}

// Book data storage
let allBooks: Book[] = [];
// Cart data storage
let cartItems: CartItem[] = [];

// DOM Elements
const booksGrid = document.getElementById('books-grid') as HTMLElement;
const loadingMessage = document.getElementById('loading-message') as HTMLElement;
const errorMessage = document.getElementById('error-message') as HTMLElement;
const searchInput = document.getElementById('search-input') as HTMLInputElement;
const searchBtn = document.getElementById('search-btn') as HTMLButtonElement;
const sortGenreBtn = document.getElementById('sort-genre') as HTMLButtonElement;
const sortYearBtn = document.getElementById('sort-year') as HTMLButtonElement;
const sortPagesBtn = document.getElementById('sort-pages') as HTMLButtonElement;
const toggleCartBtn = document.getElementById('toggle-cart') as HTMLButtonElement;
const cartPanel = document.getElementById('cart') as HTMLElement;
const closeCartBtn = document.getElementById('close-cart') as HTMLButtonElement;

let expandedCard: HTMLElement | null = null;

// Fetch books from server
async function fetchBooks(): Promise<void> {
    try {
        const loadingMessage = document.getElementById('loadingMessage') as HTMLElement;
        const errorMessage = document.getElementById('errorMessage') as HTMLElement;
        const booksGrid = document.getElementById('booksGrid') as HTMLElement;
        
        if (loadingMessage) loadingMessage.style.display = 'block';
        if (errorMessage) errorMessage.style.display = 'none';
        if (booksGrid) booksGrid.innerHTML = '';
    
        const response = await fetch('http://localhost:3000/books');
        if (!response.ok) {
            throw new Error('Failed to fetch books');
        }
    
        allBooks = await response.json() as Book[];
        displayBooks(allBooks);
    } catch (error) {
        console.error('Error fetching books:', error);
        if (errorMessage) {
            errorMessage.style.display = 'block';
            errorMessage.textContent = `Error: ${(error as Error).message}`;
        }
    } finally {
        if (loadingMessage) loadingMessage.style.display = 'none';
    }
}

// Display books in the grid with a Buy button
function displayBooks(books: Book[]): void {
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
        bookCard.addEventListener('click', function(this: HTMLElement) {
            const description = this.querySelector('.book-description') as HTMLElement;

            // If this card is already expanded, collapse it
            if (description.style.display === 'block') {
                description.style.display = 'none';
                expandedCard = null;
                return;
            }

            // If another card is expanded, collapse it first
            if (expandedCard) {
                const otherDescription = expandedCard.querySelector('.book-description') as HTMLElement;
                otherDescription.style.display = 'none';
            }

            // Expand this card
            description.style.display = 'block';
            expandedCard = this;
        });

        // Prevent card expansion when clicking on the Buy button
        const buyBtn = bookCard.querySelector('.buy-btn') as HTMLButtonElement;
        buyBtn.addEventListener('click', function(e: Event) {
            e.stopPropagation();
            addToCart(book);
        });

        booksGrid.appendChild(bookCard);
    });
}

// Sort functions
function sortByGenre(): void {
    const sortedBooks = [...allBooks].sort((a, b) => a.genre.localeCompare(b.genre));
    displayBooks(sortedBooks);
}

function sortByYear(): void {
    const sortedBooks = [...allBooks].sort((a, b) => a.year - b.year);
    displayBooks(sortedBooks);
}

function sortByPages(): void {
    const sortedBooks = [...allBooks].sort((a, b) => a.pages - b.pages);
    displayBooks(sortedBooks);
}

// Search function
function searchBooks(): void {
    const searchTerm = searchInput.value.toLowerCase().trim();

    if (!searchTerm) {
        displayBooks(allBooks);
        return;
    }

    const filteredBooks = allBooks.filter(book =>
        book.title.toLowerCase().includes(searchTerm)
    );

    displayBooks(filteredBooks);
}

// Cart functions
function addToCart(book: Book): void {
    // Assuming each book has a unique 'id' property
    const existingItem = cartItems.find(item => item.id === book.id);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        // Clone the book object and add quantity property
        cartItems.push({ ...book, quantity: 1 });
    }
    updateCartUI();
}

function updateCartUI(): void {
    const cartItemsContainer = document.getElementById('cart-items') as HTMLElement;
    const cartTotalEl = document.getElementById('cart-total') as HTMLElement;
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
        const minusBtn = cartItemDiv.querySelector('.minus-btn') as HTMLButtonElement;
        minusBtn.addEventListener('click', () => {
            item.quantity--;
            if (item.quantity <= 0) {
                cartItems = cartItems.filter(i => i.id !== item.id);
            }
            updateCartUI();
        });

        // Plus button event
        const plusBtn = cartItemDiv.querySelector('.plus-btn') as HTMLButtonElement;
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
searchInput.addEventListener('keypress', (e: KeyboardEvent) => {
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