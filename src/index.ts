import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connectToDB } from "./config/dbconfig";
import gitLabRouter from "./routes/gitlab";


connectToDB();


const PORT = process.env.PORT || 3002;

const app = express();
app.use(express.json())

app.get("/", (req, res) =>{
    res.send(
        "Server is running"
    )
})

app.use('/api/v1', gitLabRouter);


app.listen(PORT, () =>{
    console.log(`Server is running on port http://localhost:${PORT}`)
})
