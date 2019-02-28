var english = document.getElementById("english");
var ep = document.getElementById("ep");
var eg = document.getElementById("eg");

var islamiat = document.getElementById("islamiat");
var ip = document.getElementById("ip");
var ig = document.getElementById("ig");

var urdu = document.getElementById("urdu");
var up = document.getElementById("up");
var ug = document.getElementById("ug");

var pak = document.getElementById("pak");
var pp = document.getElementById("pp");
var pg = document.getElementById("pg");

var science = document.getElementById("science");
var sp = document.getElementById("sp");
var sg = document.getElementById("sg");

var math = document.getElementById("math");
var mp = document.getElementById("mp");
var mg = document.getElementById("mg");


var englishInput = +prompt("Enter your English Marks");
english.innerHTML = englishInput
ep.innerHTML = englishInput + "%"
if (englishInput < 40){
    eg.innerHTML = "fail"
}
else {
    eg.innerHTML = "pass"
}


var islamiatInput = +prompt("Enter your Islamiat Marks");
islamiat.innerHTML = islamiatInput
ip.innerHTML = islamiatInput + "%"
if (islamiatInput < 40){
    ig.innerHTML = "fail"
}
else {
    ig.innerHTML = "pass"
}


var urduInput = +prompt("Enter your Urdu Marks");
urdu.innerHTML = urduInput
up.innerHTML = urduInput + "%"
if (urduInput < 40){
    ug.innerHTML = "fail"
}
else {
    ug.innerHTML = "pass"
}


var pakInput = +prompt("Enter your pak studies Marks");
pak.innerHTML = pakInput
pp.innerHTML = pakInput + "%"
if (pakInput < 40){
    pg.innerHTML = "fail"
}
else {
    pg.innerHTML = "pass"
}


var scienceInput = +prompt("Enter your science Marks");
science.innerHTML = scienceInput
sp.innerHTML = scienceInput + "%"
if (scienceInput < 40){
    sg.innerHTML = "fail"
}
else {
    sg.innerHTML = "pass"
}


var mathInput = +prompt("Enter your math Marks");
math.innerHTML = mathInput
mp.innerHTML = mathInput + "%"
if (mathInput < 40){
    mg.innerHTML = "fail"
}
else {
    mg.innerHTML = "pass"
}

var totle = document.getElementById("totle")

var totleMarks = englishInput + islamiatInput + urduInput + mathInput + scienceInput + pakInput;

totle.innerHTML = totleMarks;

var totlePercentage = document.getElementById("totleper")

var totleper = (totleMarks / 600) * 100

totlePercentage.innerHTML = totleper + "%"

var grade = document.getElementById("grade")

if (totleper > 100){
    grade.innerHTML = "Unknown"
}
else if (totleper >= 90){
    grade.innerHTML = "A-1"
}
else if (totleper >= 80){
    grade.innerHTML = "A"
}
else if (totleper >=70){
    grade.innerHTML = "B"
}
else if (totleper >= 60){
    grade.innerHTML = "C"
}
else if (totleper >= 50){
    grade.innerHTML = "D"
}
else if (totleper >= 40){
    grade.innerHTML = "E"
}
else if (totleper < 40){
    grade.innerHTML = "FAIL"
}