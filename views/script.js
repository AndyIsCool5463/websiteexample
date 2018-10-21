
function timeConvertor(time) {
    var PM = time.match('PM') ? true : false

    time = time.split(':')
    var min = time[1]

    if (PM) {
        var hour = 12 + parseInt(time[0],10)
        var sec = time[2].replace('PM', '')
    } else {
        var hour = time[0]
        var sec = time[2].replace('AM', '')
    }

    return(`${hour}:${min}:${sec}`)
}

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
  return document.getElementById("lolU").innerHTML = `It is currently ${timeConvertor(time22)} on ${day}, ${month} ${year}!`;
}

function redirect404() {
  window.location.replace("/404");
}
function redirecthome() {
  window.location.replace("/");
}
function submit() {
  window.location.replace("/submit")
}
function redirectcontact() {
  window.location.replace('/contact')
}
function oof404() {
  window.location.replace("/egierghwerlgherlughlwerhjkl");
}
function calculator() {
  window.location.replace('/calculator')
}
function formsubmit() {
  document.getElementById('loginform').submit();
}
function mainlogin() {
  document.getElementById('loginform').submit();
}
function redirectAdmin() {
   window.location.replace("/login")
}
function lookup() {
   var code = document.getElementById('code').value;
    document.getElementById('lookupForm').submit();
 return module.exports = { code: `${code}` };
}
function POSTdiscord() {
    document.getElementById('POSTdiscordForm').submit();
}

function goBack() {
    window.history.back();
}

function insert(num) {
    document.form.textview.value = document.form.textview.value+num;
}

function equal() {
  var exp = document.form.textview.value;
  if(exp) {
      document.form.textview.value = eval(document.form.textview.value)
  }  
}
function clean() {
  document.form.textview.value = "";
}

function back() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length-1)
}

function redirectGit() {
    window.location.replace('https://github.com/AndyIsCool5463/websiteexample')
}

function helloworld() {
  window.alert("Hello World!")
}

function mylinkfunction(e) {

       window.location.href="#Author";

       /* need to stop the form sending of the form

        UPDATE as comment: This may not be exactly correct syntax 
        for stopping a form , look up preventing form submission */

       e.preventDefault();
       e.stopPropagation(); 

       }
