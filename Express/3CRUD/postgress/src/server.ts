import express, {Request,Response} from "express";
import dotenv from "dotenv"
import cors from "cors"
import { readFileSync } from "fs";
import path from "path";
// Configure dotenv
dotenv.config()

//instance of express
const app =express()

const port = process.env.PORT

console.log(`We are using port ${port}`);

app.use(express.json())

app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    methods: ["GET","POST","PUT","PATCH","DELETE"],
    allowedHeaders: ["Content-Type"]
  })
);

// Read book data from JSON file
let booksData:any[]=[]
try {
  const filePath = path.join(__dirname, "db", "books.json");
  console.log("Reading books from:", filePath);
  const jsonContent = JSON.parse(readFileSync(filePath, "utf-8"));
  booksData = jsonContent.books; // Access the books array
} catch (error) {
  console.error("Error reading books.json:", error);
  booksData = []; // Fallback to empty array
}


app.get('/api/books/:id?', (req:Request,res:Response)=>{
  const {id} = req.params

  if(id){
    const bookId= parseInt(id)
    const book =booksData.find(book=>book.id ===bookId)
  

  if(book){
    res.status(200).json({message:`Book found`,book:book})
    return
  }else{
    res.status(400).json({message:"Book not found"})
    return
  }
}
//if id not provided return all books
res.status(200).json(booksData)
return
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});