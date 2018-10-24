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
const channel_regex = /<|>/g;
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
const ChannelG = new Enmap({  name: "guildChannels"});
const layout = require('express-layout')


ChannelG.defer.then( () => {
   console.log(ChannelG.size + " keys loaded");
});
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
  let json = require('./guilds.json')
  let json2 = require('./guildsN.json')
   // console.log(yo) Error Checking
    let channelManager = JSON.stringify(ChannelG.indexes)
    let NoNchannelManager = ChannelG.indexes;
    console.log(channelManager);
    var channelObject = []
    NoNchannelManager.forEach(c => {
   //   var channelObject = new Object();
     // var element = {}, cart = [];
      
      channelObject.push({"name": c, "guild": ChannelG.get(c)});
      return console.log(`Channel Key: ${c} - "${ChannelG.get(c)}"`);
       
    });
    let channel_map = ChannelG.fetchEverything()
    var stringify = JSON.stringify(channelObject)
    console.log(`${stringify}`)
    res.render(path + "login2.ejs", {data: req.body, test: var1, value: yo, guilds: json, guildsN: json2, channels: channelManager, channel_mapS: channel_map, c_obj: stringify});
    console.log('Admin Logged in!')
  } else return(res.render(path + "login.ejs", {data: req.body, quote: quote}));

})
let uuid = process.env.UUID;
app.post('/discord', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)
   // if (req.body.uuid != uuid) return res.sendStatus(403)
  console.log(req.body)
  var file = require(path + "discord.json"); 
  console.log(file)
    res.json(file);
});

app.post('/guildUpdate', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)
   // if (req.body.uuid != uuid) return res.sendStatus(403)
 // console.log(req.body)
  //let pretty = JSON.stringify(req.body.guilds)
//   var j = req.body.guilds
//   var j_split =  j.split(" ")
//   j_split.pop()
//   var c = req.body.ch;
//   var c_split = c.split(" ")
// //  c_split.pop()
//   var c_finish = JSON.stringify(c_split)
//   var j_finish = JSON.stringify(j_split)
//   var j_parsed = JSON.parse(j_finish)
//  // var c_parsed = JSON.parse(c_finish)
  //console.log(j_parsed)
 // console.log(c_finish)
 // console.log(req.body.ch)
  var n = req.body.guildsName;
  var id = req.body.guildsID;
// console.log(id)
  let idJ = id.split(" ")
 // let idJ = idS.join("")
   var arr = idJ.filter(v=>v!='');
  
   arr.forEach(function(entry) {
     arr.map((gID) => {
     return `${arr}`
     })
    //console.log(entry);
});
  var obj = arr.reduce(function(acc, cur, i) {
  acc[i] = cur;
  return acc;
}, {});
  
  
  var ch = req.body.ch; // change
//  console.log(ch) // change
  let chJ = ch.split(" ") // change
 // let idJ = idS.join("")
   var arr2 = chJ.filter(v=>v!=''); // change
  
   arr2.forEach(function(entry) { // change
     arr2.map((gID) => { // change 
     return `${arr2}` // change
     })
    //console.log(entry);
});
  var obj2 = arr2.reduce(function(acc, cur, i) { // change
  acc[i] = cur; // change
  return acc; // change 
}, {});
  
  
  var guildN = req.body.guildsName; // change
//  console.log(guildN) // change
  let guildNJ = guildN.split(" ") // change
 // let idJ = idS.join("")
   var arr3 = guildNJ.filter(v=>v!=''); // change
  
   arr3.forEach(function(entry) { // change
     arr3.map((guildNJ) => { // change 
     return `${arr3}` // change
     })
    //console.log(entry);
});
  var obj3 = arr3.reduce(function(acc, cur, i) { // change
  acc[i] = cur; // change
  return acc; // change 
}, {});
  
  
  //let d
  console.log(`OBJECT 1: ${JSON.stringify(obj)}`) // returns the ids array as obj
 // console.log(req.body.ch)
 // console.log(req.body.guildsName)
  console.log(`OBJECT 2: ${JSON.stringify(obj2)}`)
//  console.log(req.body.ch2)
  console.log(` OBJECT 3: ${JSON.stringify(obj3)}`)
 // var j_finish = JSON.stringify(n + id) // Displays Names first then IDs in Groups
  fs.writeFile('guilds.json', JSON.stringify(obj))
  fs.writeFile('channels.json', JSON.stringify(obj2))
  fs.writeFile('guildsN.json', JSON.stringify(obj3))
  console.log(req.body)
  //console.log(c_split)

  
  res.sendStatus(200)
//  process.exit(1)
});
app.post('/guildCanary', urlencodedParser, (req, res) => {
    if(!req.body) return res.sendStatus(400);
    let regex = /<|>/g;
    let regex_quotes = /"/g;
    //console.log(req.body)
    //debug(req.body.guildsID, req.body.guildsName, req.body.ch, req.body.channelNames)
    function debug() {
    let guildID = req.body.guildsID
    let guildsName = req.body.guildsName
    let channelID = req.body.ch
    let channelNames = req.body.channelNames
    console.log(`IDS: ${JSON.stringify(guildID)} JSON NON PARSED: ${guildID}`)
    console.log(`NAMES: ${JSON.stringify(guildsName)}`)
    console.log(`Channels IDs?: ${JSON.stringify(channelID).replace(regex, "")}`)
    console.log(`Channel Names: ${JSON.stringify(channelNames)}`)
    console.log(Channel)
    }
   // const Channel = JSON.stringify(req.body.channelNames).replace(regex_quotes, '\'');
    const Channel = req.body.channelNames
    const channelNameGuild = req.body.channelNameGuild;
    const cng = req.body.channelNameGuild;
  
     function callstack(cName, index) {
         ChannelG.set(cName, index)
     }
     Channel.forEach((c, index) => {
        callstack(c, channelNameGuild[index])
       console.log(`Currently setting database for Channel: ${c} in ${channelNameGuild[index]}!`)
     })
    console.log(`ALERT: ${ChannelG.size} have been overwritten/loaded`);
 //   console.log(JSON.stringify(req.body.channelNameGuild))
 //   console.log(cng.length)
 // console.log(channelNameGuild)
  //  console.log(channelNameGuild)
    
   // console.log(`${req.body.ch2}`)
    
 res.sendStatus(200);
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