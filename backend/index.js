import express, { response } from 'express';
import {PORT,mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import {Book} from "./models/bookModel.js";
import booksRoutes from "./routes/booksRoutes.js"
import cors from "cors";


const app=express();
// middleware for parsing request body
app.use(express.json());
// middleware for handling cors policy
//option 1 :allow all origins with default of cors()
app.use(cors());
// option 2: allow custom origins
//app.use(cors(
  //  {
  //      origin:'http://localhost:3000',
   //     methods:['GET','POST','PUT','DELETE'],
   //     allowedHeaders:['Content-Type']
   // }
//    ))
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

