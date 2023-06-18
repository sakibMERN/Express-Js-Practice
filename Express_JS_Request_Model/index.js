

//15-Simple Get Request====>>>>


// let express= require('express');

// app= express();

// app.get('/',function(req,res){

//     res.end("Simple Get Request Success");
// });

// app.listen(5050,function(){
//     console.log('Server Run Success');
// })



// 16-Get Request With URL Query====>>>>>

/*
let express = require('express');

app= express();

app.get("/", function(req,res){


    let FirstName= req.query.firstName;
    let LastName= req.query.lastName;

    res.end(FirstName +" "+ LastName);

=========>>>>>

    const name = req.query.name;
    const age = req.query.age;

    res.send(`Query parameters- Name: ${name}, Age: ${age}`);
});

app.listen(5050,function(){
    console.log('Server Run Success');
});
*/

// **17-Working -With -Get Request Header===>>>>>


// app.get("/",(req,res) =>{

//     let name = req.header("Name");
//     let age = req.header("Age");

//     res.send(`Header params are : 1-${name} 2-${age}`);

//     // let firstName= req.header('firstName');
//     // let lastName= req.header('lastName');

//     // let UserAgent= req.header('User-Agent');

//     // res.end(UserAgent);
// });

// app.listen(5050,() =>{
//     console.log(`Server Run Success in ${port}`);
// });


//  **18-Simple Post Request======>>>>

/*
let express= require('express');
app= express();

app.post("/",(req,res) =>{

    res.send("This is simple Post Request");
});

app.listen(5050,()=>{
    console.log("Server Run Success");
});
*/


// **19-Post Request With URL Query=====>>>>>


// let express= require('express');
// app= express();

// app.post("/",(req,res)=>{

//     let firstName= req.query.firstName;
//     let lastName= req.query.lastName;

//     res.send(firstName+" "+lastName);

// })
    
// app.listen(5050,()=>{
//     console.log("Server Run Success");
// });


// **20-Post Request With Header Properties=====>>>


// let express= require('express');
// app= express();

// app.post("/",(req,res)=>{

//     let userName= req.header("UserName");
//     let password= req.header("Password");
//     let age = req.header("Age");

//     res.send("User Name:" + userName +" Age: " + age + " Password: " +password);
// });

// app.listen(5050,()=>{
//     console.log("Server Run Success");
// });

// ======>>>>

// const express = require('express');
// app= express();

// app.post("/",(req,res)=>{
//     let userName= req.header("userName");
//     let password= req.header("password");

//     res.send("User Name: " +userName+" "+"<br>Password: " +password)
// });


// app.listen(5050,()=>{
//     console.log("Server Run Success");
// });


// **21-Post Application json====>>>>

// const express = require('express');
// const bodyParser = require('body-parser');
// app = express();


// app.use(bodyParser.json());
// app.use(express.json());

// app.post("/data",(req,res)=>{

//     let JSONData = req.body;
    
//     let JSONString = JSON.stringify(JSONData);

//     let name = JSONData['name'];
//     let age = JSONData['age'];

//     // res.send(JSONData);
//     // res.send(jsonString);
//     res.send(name +"  "+ age);
// });

// app.listen(5050,()=>{
//     console.log("Server run success");
// });

// **22-Working With Multipart Form Data====>>>>>

// const express = require('express');
// const multer = require('multer');

// // create instance
// const app = express();
// const Multer = multer();

// // Use middleware
// app.use(Multer.array());
// app.use(express.static('public'));

// app.post("/from",(req,res)=>{

//     let fromData = req.body;
//     let data = JSON.stringify(fromData);

//     res.send(data);
// });

// app.listen(5050,()=>{
//     console.log("Server run success");
// });

// **25-Application Middleware====>>>>

// const express = require('express');

// // Create instance

// const app = express();

// app.use(function(req,res,next){

//     console.log("I am application level middleware");
//     next();
// });

// app.get('/',function(req,res){

//     res.send("This is home page");

// });


// app.get('/contact', function(req,res){

//     res.send("This is contact page");
// });


// app.listen(5050,()=>{

//     console.log("Server run success");
// });

// **26-Route Middleware=====>>>>>

// const express = require('express');

// const app = express();

// app.get('/',function(req,res){

//     res.send("This is home page");
// });

// // Route Middleware
// app.use('/about',function(req,res,next){

//     console.log("I am about middleware");
//     next();
// });

// app.get('/about', function(req,res){

//     res.send("This is about page");
// });


// app.listen(5050, ()=>{

//     console.log("Server run success");
// });


// **23-File Upload====>>>>

const express = require('express');
const multer = require('multer');


const app = express();


let storage = multer.diskStorage({
    
    destination: function(req,file,callBack){ //Specify the destination folder for uploaded file.

        callBack(null,'./uploads');
    },
    filename: function(req,file,callBack){

        callBack(null, file.originalname); //Use the original file name.

    }
});

// Create multer middleware to handle single file upload with field name 'myfile'.
let upload = multer ({storage: storage}).single('myfile');


app.post('/', function(req,res){
    upload(req,res, function(error){
        if(error){
            res.send("File upload fail");
        }
        else{
            res.send("File upload success") 
        }
    });
});


app.listen(5050,()=>{
    console.log('Server run success');
});

