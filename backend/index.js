import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import router from "./routes/userRoute.js";
import cors from "cors"

const app =express()
app.use(bodyParser.json());
app.use(cors())
dotenv.config();
const port =process.env.PORT || 5000




app.use('/api',router)

connectDB();





app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})
