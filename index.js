const express = require('express');
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
router.use(function (req,res,next) {
//  console.log("/" + req.method);
  next();
});
app.use(express.static(__dirname + '/views'));
router.get("/",function(req,res){
  res.render(path + "index.html");
  res.send("200");
  console.log('Client Sent to homepage!!')
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
  console.log('Client Sent to Contact!')
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
  console.log('Client Sent to 404!')
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
