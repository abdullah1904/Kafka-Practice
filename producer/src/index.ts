import express from "express";
import {Response, Request} from "express"

const app = express();

app.get("/",(req:Request,res:Response)=>{
    res.send("Hello from Producer Server");
});

app.listen(3000,()=>{
    console.log("App is running on port 3000");
})