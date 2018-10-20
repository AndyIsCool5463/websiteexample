const express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser')
var path = __dirname + '/views/';
const fs = require('fs')
const Enmap = require('enmap')
const date = new Date()
const stringifyObject = require('stringify-object');
const scripts = require('./views/script.js')
const request = require('request')
router.use(function (req,res,next) {
//  console.log("/" + req.method);
  next();
});
// Quote System
var quotesArray = fs.readFileSync('quotes.txt').toString().split("\n");

const randomQuote = require('random-quote');
var quote = randomQuote()
       .then(quote => quote = quote)
      .catch(err => console.error(err));
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
time()
var time;
let id = `${fname}${lname}${time}`;
let msg = `${message}`;
Database.set(id, msg)
console.log(id)
  console.log(msg)
function time() {
  let fulltime = new Date();
  let idnno = fulltime + " ";
  let lol = idnno.split(" ")
  let faggot = lol.splice(6, 3, '')
  let day = lol[0]
  let month = lol[1]
  let year = lol[3]
  let time22 = lol[4]
  console.log(lol)
  console.log(fulltime)
  time = `${day}${month}${year}`
console.log(req.body)
}
res.render(path + "submit.ejs", {data: req.body, id: id})
})
app.post('/login', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
//  res.send('welcome, ' + req.body.lastname)
// console.log(req.body) Error Checking
// let id = `HWT`; TESTING HWT ID
// let msg = `Hello World! This is a test of the Database system! Use only for debugging purposes only!`;
// Database.set(id, msg)
Database.set("Email", req.body.email)
Database.set("pasword", req.body.pasword)
Database.set("message", req.body.message)
  console.log(`User logged in with: ${Database.get('Email')} & ${Database.get("pasword")}`)
  if(req.body.email === "admin") {
    var var1 = "for allah";
    var yo = quotesArray[Math.floor(Math.random() * quotesArray.length)];
    
   // console.log(yo) Error Checking
    res.render(path + "login2.ejs", {data: req.body, test: var1, value: yo});
    console.log('Admin Logged in!')
  } else return(res.render(path + "login.ejs", {data: req.body, quote: quote}));

})
let uuid = "144314d2-e2e0-4c62-a861-c5d6884ebe9c";
app.post('/discord', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)
   // if (req.body.uuid != uuid) return res.sendStatus(403)
  console.log(req.body)
  var file = require(path + "discord.json"); 
  console.log(file)
    res.json(file);
});

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
 res.render(path + "contact.ejs");
//res.render(path + 'contact.ejs');
  console.log('Client Sent to Contact!')
  console.log(`Last user logged in: ${Database.get('Email')} & ${Database.get("pasword")}`)
 //  console.log("Last user contacted." + Database.get('AndyLyek{time}'))
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