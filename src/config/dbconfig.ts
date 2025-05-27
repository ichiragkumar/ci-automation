import mongoose from "mongoose";


export const connectToDB = () =>{
        const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/test";
        if(!MONGODB_URI){
            throw new Error("MONGODB_URI is not set");
        }
        try{
              mongoose.connect(MONGODB_URI)
              console.log("Connected to DB")
        }catch{
            throw new Error("Error connecting to DB")
    }

}