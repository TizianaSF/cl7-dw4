import express from "express";
import bodyParser from "body-parser";
import { postRoutes } from "./routes/post.js";
import mongoose from "mongoose";
import * as dotenv from 'dotenv';
dotenv.config()

const app = express ()
const PORT = 8080;
let DB = process.env.DB

app.use(express.json())
app.use('/api/post', postRoutes)

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(PORT, () =>{
console.log(`Server listen on http://localhost:${PORT}/api/post`)
})