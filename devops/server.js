var express =require("express");

var app=express();

app.get("/",function(req,res){
    res.send("heloo world");

});
app.listen(1234,function(){
    console.log("server connected")
});