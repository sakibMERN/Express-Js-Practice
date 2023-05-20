const path= require('path');
const express = require('express');
const helmet = require('helmet');
const app= express();

//Middleware Section
app.use(express.static('Public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Port
const port= 8000;




// app.get("/bmi",(req,res)=>{

//     res.sendFile(path.join(__dirname +"/public/home.html"));
// });



// app.get("/", (req,res) =>{

//     res.send("<h1>Hello Get Request</h1>");

// });



// app.get("/json", (req,res) =>{

//     res.json({
//         "name":"Sakib",
//         "city":"dhaka"
//     })

// });


// app.post("/post",(req,res) =>{

//     res.send("<h1>Hello Post Request</h1>")
// });


// app.put("/put",(req,res) =>{

//     res.send("<h1>Hello Put Request</h1>")
// });


// app.patch("/patch",(req,res) =>{

//     res.send("<h1>Hello Patch Request</h1>")
// });


// app.delete("/delete",(req,res) =>{

//     res.send("<h1>Hello Delete Request</h1>")
// });


// Class-2=== Route====>>>>>>


// app.get("/", (req,res) =>{

//     res.sendFile(path.join(__dirname +"/Public/contact.html"));

// });


// Class-3==== Middleware + JSON + URLincoded=====>>>>>

// Middleware====

function validateUser(req,res,next){
    res.locals.validated = true;
    console.log("1","Validated run");
    next();
};

// app.use("/", validateUser);
app.use("/admin", validateUser);

app.get("/",(req,res,next)=>{
    res.send("<h1>Main Page</h1>");
    console.log("2",res.locals.validated);
});

app.get("/admin",(req,res,next)=>{
    res.send("<h1>Admin Page.</h1>");
    console.log("3",res.locals.validated);
})



//JSON====

app.get("/cookie",(req,res)=>{
    // res.cookie("country","Bangladesh");
    // res.cookie("age","29");
    // res.clearCookie("age","29");
    res.redirect("/json");
    res.send("I love Code.");
});

app.get("/json",(req,res)=>{
    res.json({"title":"welcome"});
});

app.listen(port,()=>{
    console.log(`Server run success at ${port}`);
});

