import express from "express";
import {Response, Request} from "express"

const app = express();

app.get("/",(req:Request,res:Response)=>{
    res.send("Hello from Consumer Server");
});

app.listen(3001,()=>{
    console.log("App is running on port 3001");
})