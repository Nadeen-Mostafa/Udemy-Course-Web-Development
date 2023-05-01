const express=require("express");
const bodyParser=require("body-parser");

const app=express();
//grab info that get posted to the server from html form
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

//to handel any post message
app.post("/",function(req,res) {
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var result=num1+num2;
    res.send("The result is: "+result);
})

//BMI calculator
app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html")
});

app.post("/bmicalculator",function(req,res){
    var weight=Number(req.body.weight);
    var height=Number(req.body.height);
    var bmi=weight/(height*height);
    res.send("Your BMI is "+bmi);
});

app.listen("3000",function(){
    console.log("server is runinng");
})