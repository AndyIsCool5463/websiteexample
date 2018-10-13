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
  let hitler = fulltime + " ";
  let nigger = hitler.split(" ")
  let faggot = nigger.splice(6, 3, '')
  let day = nigger[0]
  let month = nigger[1]
  let year = nigger[3]
  let time22 = nigger[4]
  console.log(nigger)
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
function 404() {
  window.location.replace("/egierghwerlgherlughlwerhjkl");
}
