const express = require('express');
let router=express.Router();

router.get("/",(req,res)=>{
    res.send("<h1>This is Router</h1>")
});

router.get("/about",(req,res)=>{
    res.send("<h1>This is About Page.</h1>")
});

module.exports= router;