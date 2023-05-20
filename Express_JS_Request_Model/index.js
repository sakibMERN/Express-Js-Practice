
//15-Simple Get Request====>>>>

/*
let express= require('express');

app= express();

app.get('/',function(req,res){

    res.end("Simple Get Request Success");
});

app.listen(5050,function(){
    console.log('Server Run Success');
})
*/


// 16-Get Request With URL Query====>>>>>

/*
let express = require('express');

app= express();

app.get("/", function(req,res){

    let FirstName= req.query.firstName;
    let LastName= req.query.lastName;

    res.end(FirstName +" "+ LastName);
});

app.listen(5050,function(){
    console.log('Server Run Success');
});
*/

// 17-Working -With -Get Request Header===>>>>>



// let express= require('express');

// app= express();
// let port= 5050;

// app.get("/",(req,res) =>{

//     let firstName= req.header('firstName');
//     let lastName= req.header('lastName');

//     let UserAgent= req.header('User-Agent');

//     res.end(UserAgent);
// });

// app.listen(5050,() =>{
//     console.log(`Server Run Success in ${port}`);
// })


// 18-Simple Post Request======>>>>

/*
let express= require('express');
app= express();

app.post("/",(req,res) =>{

    res.send("This is simple Post Request");
});

app.listen(8000,()=>{
    console.log("Server Run Success");
});
*/


// 19-Post Request With URL Query=====>>>>>

/*
let express= require('express');
app= express();

app.post("/",(req,res)=>{

    let firstName= req.query.firstName;
    let lastName= req.query.lastName;

    res.send(firstName+" "+lastName);

})
    
app.listen(8000,()=>{
    console.log("Server Run Success");
});
*/

// 20-Post Request With Header Properties=====>>>

/*
let express= require('express');
app= express();

app.post("/",(req,res)=>{

    let UserName= req.header("userName");
    let Password= req.header("password");

    res.send("User Name:" +UserName +" <br>Password: " +Password)
});

app.listen(8000,()=>{
    console.log("Server Run Success");
});
*/
/*
const express = require('express');
app= express();

app.post("/",(req,res)=>{
    let userName= req.header("userName");
    let password= req.header("password");

    res.send("User Name: " +userName+" "+"<br>Password: " +password)
});


app.listen(8000,()=>{
    console.log("Server Run Success");
});
*/