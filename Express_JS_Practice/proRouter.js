const express = require('express');
let proRouter = express.Router();

proRouter.get("/",(req,res)=>{
    res.send("<h1>This is ProRouter.</h1>")
});

module.exports = proRouter;