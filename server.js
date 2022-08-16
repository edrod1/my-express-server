//jshint esversion:6
const express = require("express");

const app = express();

app.get("/", function(req, res){
  res.send("<h1>Hello, World!<h1/>");
});

app.get("/contact", function (req, res){
  res.send("Contact me at Edgar@gmail.com");
});

app.get("/about", function (req, res){
  res.send("Hello, my name is Edgar R. and I use to be a commecial Diver. Now most of my time is spent tackling problems with a few key strokes </>");
});

app.listen(3000, function(){
   console.log("server started on port 3000");
});
