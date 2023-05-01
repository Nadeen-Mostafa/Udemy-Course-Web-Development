const express=require("express");
const app=express();

const https=require("https");

const bodyParser=require("body-parser");


app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
    // res.send();
});


app.post("/",function(req,res){
    
    const query=req.body.city;
    const apiKey="03447327cc884cd3a0ae9fb75e90f779";
    var url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units=metric";
    https.get(url,function (response){
        console.log(response.statusCode);
        response.on("data",function(data){
            const weather=JSON.parse(data);
            const temp=weather.main.temp;
            const description=weather.weather[0].description;
            const icon=weather.weather[0].icon;
            const imgUrl="https://openweathermap.org/img/wn/"+icon+"@2x.png";
            res.write("<p>the weather is currently "+description +"</p>");
            res.write("<h1>the weather in "+query+" is "+temp+" degree.</h1>");
            res.write("<img src="+imgUrl+">");
            res.send();
        })
    });
});

app.listen(3000,function(){
    console.log("server is runinng");
})