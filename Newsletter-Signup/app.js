const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const request=require("request");
const https=require("https");
app.use(bodyParser.urlencoded({extended:true}));

//specify static folder
app.use(express.static("public"));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
});


app.post("/",function(req,res){
    const FirstName=req.body.fname;
    const LastName=req.body.lname;
    const email=req.body.email;

    var data={
        members:[
            {
                email_address: email,
                status:"subscribed",
                merge_fields:{
                    FNAME:FirstName,
                    LNAME:LastName
                }
            }
        ]

    }
    var jsonData=JSON.stringify(data);

    const url="https://us17.api.mailchimp.com/3.0/lists/6d415907bb";

    const options={
        method:"POST",
        auth:"Nadeen:7436abad163a25716fc9373249657761-us17"
    }
  const request=  https.request(url,options,function(response){
if(response.statusCode==200)
{
    res.sendFile(__dirname+"/success.html");
}
else{
    res.sendFile(__dirname+"/failure.html");
}
        response.on("data",function(data){
            console.log(JSON.parse(data));
        })
    })


    // request.write(jsonData);
    request.end();

})


app.post("/failure.html",function(req,res){
    res.redirect("/");
})

app.listen(3000,function(){
    console.log("server is running");
});


//7436abad163a25716fc9373249657761-us17


//6d415907bb.