import * as dotenv from 'dotenv';
dotenv.config()
const express=require('express');
const app=express();
app.get("/",async (req:any,res:any)=>{
    res.send("hello World")
});
console.log(`connnected 2`)
var PORT=process.env.PORT_NO || 3000;
console.log(PORT,"line 10")
app.listen(PORT).then((res:any)=>{
    console.log(`connnected successfully on port ${PORT}`)
}).catch((err:any)=> console.log(`err`,err))