
// Simple Get Request...

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

// Get Request With URL Query...

let express= require('express');

app= express();

app.get('/',function(req,res){

    let firstName= req.query.firstName;
    let lastName= req.query.lastName;

    res.end(firstName +" "+ lastName);
});

app.listen(5050,function(){
    console.log('Server Run Success');
})