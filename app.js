// b1: include thư viện http
import express from "express";
import cors from "cors"

import Home from "./routes/home";
import productsRouter from "./routes/product";
import mongoose from "mongoose";
import jobdonesRouter from "./routes/jobdone";
import authRoute from './routes/auth'
import postRoute from './routes/post'
const app = express();
app.use(cors());
mongoose.connect('mongodb://localhost:27017/DATN')
    .then(() => console.log("Kết nối db thành công"))
    .catch((error) => console.log(error));

app.use(express.json())
app.use(Home);
app.use("/api", productsRouter);
app.use("/api", jobdonesRouter);
app.use("/api", authRoute)

const PORT = 4000;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
})