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


app.post('/api/books', (req:Request,res:Response)=>{

  const {body} =req
  const newId = booksData.length>0?booksData[booksData.length-1].id+1 :1
  const newData={
    id:newId,...body
  }
  booksData.push(newData)
  res.status(201).json({message:"Successfully Posted"})
  payload:newData
  }
)

app.put('/api/books/:id',(req:Request,res:Response)=>{
  const bookId = Number(req.params.id)
  const {title, author, genre, year, pages, publisher, description, image, price}=req.body
  if(isNaN(bookId)){
    res.status(400).json({message:"Not legitimate Id"})
    return
  }

  const bookIndex = booksData.findIndex((book)=> book.id ===bookId)

  if(bookIndex===-1){
    res.status(404).json({message:"Book not found"})
    return
  }
  booksData[bookIndex]={id:bookId,title, author, genre, year, pages, publisher, description, image, price}
  res.json({message:'Book successfully updated', book:booksData[bookIndex]})
  }
)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

