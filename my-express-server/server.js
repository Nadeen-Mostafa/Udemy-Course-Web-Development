//jshint esveriosn:6

const express=require("express");

const app=express();

//what should happen when browsers get in touch with our server
//home page
app.get("/", function(request,response) {


    response.send("<h1>Hello</h1>");
    // console.log(request);

});


app.get("/contact", function(req,res){
        res.send("contact me at nadeen@gmail.com");
    })

app.get("/about", function(req,res){
        res.send("my name is nadeen i love coding, mobile:+201011499927. live in cairo,egypt");
    })

app.get("/hobbies", function(req,res){
        res.send("i love swimming");
    })

app.listen(3000 ,function(){
    console.log("server started");
});

