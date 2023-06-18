const express= require('express');
// const bodyParser = require('body-parser');
app= express();


// app.use(bodyParser.json());
app.use(express.json());

//**Simple String response...
// res.send()-->> response body
// res.end()-->> respnse end

app.get("/one",function(req,res){
    res.send("This is string response");
});

app.post("/two",function(req,res){
    res.send("This is string response");
});

// Response status
app.get("/three",function(req,res){
    res.status(201).send("This is status response").end();
});


// **JSON Response....

app.post("/four",function(req,res){
    let myJSONArray=req.body;
    // let myJSONArray=[
    //     {
    //         MyName:"Sakib",
    //         city:"Dhaka",
    //         occupation:"Engr."
    //     },
    //     {
    //         MyName:"Tamim",
    //         city:"Khulna",
    //         occupation:"Engr."
    //     },
    //     {
    //         MyName:"Rakib",
    //         city:"Rajsahi",
    //         occupation:"Engr."
    //     }
    // ]
    res.json(myJSONArray);
});

// **Response Download...

app.get("/five",function(req,res){    
    res.download("./Upload/abc.png")
});

// **Response Redirect

app.get("/bangladesh",function(req,res){
    res.redirect("http://localhost:5050/india")
});

app.get("/india",function(req,res){
    res.send('This is India.');
})

// **Response Header...

app.get("/six",function(req,res){


    // res.append("Name","Sakib Mollah");
    // res.append("City","Dhaka");
    // res.append("Age","30");

    res.status(201).end("Hello World");
})

// **Response SET Cookie

app.get("/seven",function(req,res){

    res.cookie("name","sakib");
    res.cookie("city","dhaka");
    res.cookie("age","30 years old");

    res.end("cookie run success")
    // res.cookie('Name','Rabbil');
    // res.cookie('Age','29');
    // res.cookie('City','Dhaka');
    // res.end('Cookie set success.')

});

// **Response clear Cookie

app.get("/eight",function(req,res){

    res.clearCookie('name');
    res.clearCookie('city');
    res.clearCookie('age');
    res.end('Cookie Clear Success');
})

app.listen(5050,function(){
    console.log("server success")
});