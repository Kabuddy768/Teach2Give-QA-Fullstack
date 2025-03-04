import express from "express"
import dotenv from 'dotenv'

//configure dotenv
dotenv.config
//instance of express 
const app =express()

// a simple get request saying hello world
app.get('/', (req, res) => {
    res.send('Hello World, Be Humble to Us')
})

//load the variables
const port = process.env.PORT


console.log(port);

app.listen(port),()=>{
    console.log(`Sever is running on port: ${port}`);
}
