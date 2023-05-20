let express= require('express');

app= express();

//Simple String response...
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


// JSON Response....

app.get("/four",function(req,res){
    let myJSONArray=[
        {
            MyName:"Sakib",
            city:"Dhaka",
            occupation:"Engr."
        },
        {
            MyName:"Tamim",
            city:"Khulna",
            occupation:"Engr."
        },
        {
            MyName:"Rakib",
            city:"Rajsahi",
            occupation:"Engr."
        }
    ]
    res.json(myJSONArray);
});

// Response Download...

app.get("/five",function(req,res){    
    res.download("./Upload/abc.png")
});

// Response Redirect

app.get("/bangladesh",function(req,res){
    res.redirect("http://localhost:5050/india")
});

app.get("/india",function(req,res){
    res.send('This is India.');
})

// Response Header...

app.get("/six",function(req,res){

    res.append("Name","Sakib Mollah");
    res.append("City","Dhaka");
    res.append("Age","30");

    res.status(201).end("Hello World");
})

// Response SET Cookie

app.get("/seven",function(req,res){

    res.cookie('Name','Rabbil');
    res.cookie('Age','29');
    res.cookie('City','Dhaka');
    res.end('Cookie set success.')

});

// Response clear Cookie

app.get("/eight",function(req,res){

    res.clearCookie('Name');
    res.clearCookie('City');
    res.clearCookie('name');
    res.end('Cookie Clear Success');
})

app.listen(5050,function(){
    console.log("server success")
});