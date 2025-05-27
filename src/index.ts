import dotenv from "dotenv";
dotenv.config();



import express from "express";

const PORT = process.env.PORT || 3002;

const app = express();


app.get("/", (req, res) =>{
    res.send(
        "Server is running"
    )
})



app.listen(PORT, () =>{
    console.log(`Server is running on port http://localhost:${PORT}`)
})
