const express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser')
var path = __dirname + '/views/';
const fs = require('fs')
const Enmap = require('enmap')
router.use(function (req,res,next) {
//  console.log("/" + req.method);
  next();
});
const Database = new Enmap({ name: "logininfo" });
const layout = require('express-layout')

app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get("/",function(req,res){
  res.render(path + "index.html");
  res.send("200");
  console.log('Client Sent to homepage!!')
});

// Post Req
app.post('/submit', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
//  res.send('welcome, ' + req.body.lastname)
console.log(req.body)
res.render(path + "submit.ejs", {data: req.body})
})
app.post('/login', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
//  res.send('welcome, ' + req.body.lastname)
console.log(req.body)
Database.set("Email", req.body.email)
console.log(Database.get('Email'))
res.render(path + "login.ejs", {data: req.body})
})

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});
// router.get("/sumbit",function(req,res){
//   res.sendFile(path + "submit.html");
// });
router.get("/contact",function(req,res){
 res.sendFile(path + "contact.html");
//res.render(path + 'contact.ejs');
  console.log('Client Sent to Contact!')
});
router.get("/submit",function(req,res){
 res.render(path + "submit.ejs");
//res.render(path + 'contact.ejs');
  console.log('Client Sent to Submit!')
});
app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
  console.log('Client Sent to 404!')
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
