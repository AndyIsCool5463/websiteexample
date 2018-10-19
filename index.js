const express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser')
var path = __dirname + '/views/';
const fs = require('fs')
const Enmap = require('enmap')
const date = new Date()
const scripts = require('./views/script.js')
router.use(function (req,res,next) {
//  console.log("/" + req.method);
  next();
});
// time
var code = scripts.code;
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
  var fname = req.body.firstname;
  var lname = req.body.lastname;
  var contacted = req.body.contacted;
  var message = req.body.message;
  function checker() {
if(!fname) {
   return fname = "NULL";
  }
if(!lname) { return lname = "NULL";}
if(!lname) { return lname = "NULL";}
if(!contacted) { return contacted = "NULL";}
if(!message) { return message = "NULL";}
}
checker()
stime()
var time;
let id = `${fname}${lname}{time}`;
let msg = `${message}`;
Database.set(id, msg)
console.log(id)
  console.log(msg)
function stime() {
  let fulltime = new Date(); // new dte
  let hitler = fulltime + " "; 
  let nigger = hitler.split(" ")
  let faggot = nigger.splice(6, 3, '')
  let day = nigger[0] // day
  let month = nigger[1] // month
  let year = nigger[3] // year
  let time22 = nigger[4] // time 
  console.log(nigger)
  console.log(fulltime)
  return time = time22;
}



console.log(req.body)

res.render(path + "submit.ejs", {data: req.body})
})
app.post('/login', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
//  res.send('welcome, ' + req.body.lastname)
console.log(req.body)
Database.set("Email", req.body.email)
Database.set("pasword", req.body.pasword)
Database.set("message", req.body.message)
  console.log(`User logged in with: ${Database.get('Email')} & ${Database.get("pasword")}`)
  if(req.body.email === "admin") {
    var var1 = "for allah";
    res.render(path + "login2.ejs", {data: req.body, test: var1});
    console.log('Admin Logged in!')
  } else return(res.render(path + "login.ejs", {data: req.body}));

})

app.post('/lookup', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)
  console.log(req.body)
    let code = req.body.code;
  if(!req.body.code) {
      code = "Undefined";
  }

  let input = Database.get(code)
 var var1 = false;
  if(!input) {
    var1 = true;
  }
  if(var1 === true) {
    let text = `The user, ${req.body.code} (${req.body.fname}, ${req.body.lname}) does not exist in the database.`
      return(res.render(path + "lookupUKN.ejs", {data: req.body, test: input, code: code, text: text}));
  } else return(res.render(path + "lookup.ejs", {data: req.body, test: input, code: code}));
});



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
  console.log(`Last user logged in: ${Database.get('Email')} & ${Database.get("pasword")}`)
  console.log("Last user contacted." + Database.get('AndyLyek{time}'))
});
router.get("/submit",function(req,res){
 res.render(path + "submit.ejs");
//res.render(path + 'contact.ejs');
  console.log('Client Sent to Submit!')
});

router.get("/calculator",function(req,res){
 res.render(path + "calculator.ejs");
//res.render(path + 'contact.ejs');
  console.log('Client Sent to Calculator!')
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
  console.log('Client Sent to 404!')
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});






 // fs database
//   let msg = `/nUser ${req.body.firstname}, ${req.body.lastname} has contacted ${req.body.contacted} with the message ${req.body.message} on ${date}.`;
// fs.appendFile('database.txt', msg, (err) => {  
//     if (err) throw err;
//     console.log('The Database updated!');
// });