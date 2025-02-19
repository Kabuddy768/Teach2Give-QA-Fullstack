
import readline from 'readline';

async function fetchData(callback){
    try{
       const data = await fetch("http://localhost:3000/books")
       let dataJson = await data.json()
        callback(dataJson);

    }
    catch(error){
        console.error(error);
    }
    
}
function bookGenres(books){
    const genres=books
    .filter((book=>book.genre ==="Dystopian" && book.pages>100))
    .map(book => book.title)
    console.log(genres);
    
}


// fetchData(bookGenres)

// function listBooks(books){
//     const returnBook = books.map(book => `${book.title} by ${book.author} - ${book.genre} (${book.pages}) pages`)
//     console.log(returnBook);
// }

// // fetchData(listBooks)

// function filterYear(books){
    
//     const bookYear = books.filter(book =>book.year<=1800)
//     console.log(bookYear)
// }

// fetchData(filterYear)

function sortBooks(books){
    const sortedBooks = books.sort((a,b)=>a.pages-b.pages)
    console.log("Books sorted: ",sortedBooks);

}

fetchData(sortBooks)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  function getUserInput(books) {
    rl.question("Enter Book Title: ", (title) => {
      const filteredBooks = books.filter(
        (book) => book.title.toLowerCase() === title.toLowerCase()
      );
      console.log(filteredBooks);
      rl.close();
    });
  }
fetchData(getUserInput)
