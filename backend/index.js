import express, { response } from 'express';
import {PORT,mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import {Book} from "./models/bookModel.js";
import booksRoutes from "./routes/booksRoutes.js"


const app=express();
// middleware for parsing request body
app.use(express.json());
app.get("/",(request,response)=>{
    console.log(request)
    return response.status(234).send('Welcome to MERN stack tutorial')
})
app.use('/books',booksRoutes);

mongoose
.connect(mongoDBURL)
.then(()=>{
    console.log("successfully connected to MongoDB");
    app.listen(PORT,()=>{
        console.log(`App is listening on  port: ${PORT}`)
    })
})
.catch((error)=>{
    console.log(error);
})

