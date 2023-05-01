const express=require("express");
const bodyParser=require("body-parser");

const date=require(__dirname+"/date.js");

const app=express();
const items=["Buy Food","Cook The Food","Eat The Food"];
const workItems=[];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");

//route to home page
app.get("/",function(req,res) {
    let day=date.getDate();
    //match key with variable in ejs
    res.render("list",{ListTitle: day , newListItems:items });
});


app.post("/",function(req,res){
    var item=req.body.Task;
    if(req.body.list=== "Work")
    {
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
    
})

app.get("/work" ,function(req,res){
    res.render("list",{ListTitle:"Work List" ,newListItems:workItems})
});

app.post("/work",function(req,res){
    var item=req.body.Task;
    workItems.push(item);
    res.redirect("/work");
})


app.get("/about" ,function(req,res){
    res.render("about")
});
app.listen(3000,function(){
    console.log("server is runinng.");
})