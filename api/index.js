import express from "express";

const app = express();


app.get("/api/salam",(_req,res)=>{
    res.send("Assalamualaikum");
});

app.listen(3000,()=>{
    console.log("Server sedang berjalan!");
});
