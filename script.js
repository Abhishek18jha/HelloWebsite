$(document).ready(function(){
    alert("Hi");
});



$(document).ready(function(){
  $("#HYS").click(function(){
    $(this).hide();
  });
  })

$(()=>{
$("p").click(()=>{
$("#h").hide();
})
})

$(()=>{
$("#hide").click(()=>{
$("p").hide();
})
})

$(()=>{
$("#show").click(()=>{
$("p").show();
})
})

$(()=>{
$(".HideSource").click(()=>{
$("#source").hide();
})
})

$(()=>{
$("#hideall").dblclick(()=>{
$("*").hide();
})
})

$(()=>{
  $(".hise").click(function(){
    $(this).hide();
  });
});
$(()=>{
$('.s').click(function(){
$("p#s").hide();
})
})

$(()=>{
$("p").mouseenter(()=>{
alert("Good Move")
})
})
$(()=>{
$("p").mouseleave(()=>{
alert("Good Bye")
})
})
$(()=>{
$("p").mousedown(()=>{
alert("Mouse down over")
})
})
$(()=>{
$("h1").mouseup(()=>{
alert("Mouse up over")
})
})






//if (navigator.javaEnabled()) {
//alert("Java is enabled");
//} else {
//alert("Java is not enabled");
//}
//
//var body = document.getElementsByTagName("body")[0];
//for (var prop in navigator) {
//var elem = document.createElement("p");
//var text = document.createTextNode(prop + ": " + navigator[prop]);
//elem.appendChild(text);
//body.appendChild(elem);
//}

//var star = {};
//function Star(constell,type,specclass,magnitude) {
//this.constellation = constell;
//this.type = type;
//this.spectralClass = specclass;
//this.mag = magnitude;
//}
//star["Polaris"] = new Star("Ursa Minor","Double/Cepheid","F7",2.0);
//star["Mizar"] = new Star("Ursa Major","Spectroscopic Binary","A1 V",2.3);
////star["Aldebaran"] = new Star("Taurus","Irregular Variable","K5 III",0.85);
////star["Rigel"] = new Star("Orion","Supergiant with Companion","B8 Ia",0.12);
////star["Castor"] = new Star("Gemini","Multiple/Spectroscopic","A1 V",1.58);
////star["Albireo"] = new Star("Cygnus","Double","K3 II",3.1);
////star["Acrux"] = new Star("Crux","Double","B1 IV",0.8);
////star["Gemma"] = new Star("Corona Borealis","Eclipsing Binary","A0 V",2.23);
////star["Procyon"] = new Star("Canis Minor","Double","F5 IV",0.38);
////star["Sirius"] = new Star("Canis Major","Double","A1 V",-1.46);
////star["Rigil Kentaurus"] = new Star("Centaurus","Double","G2 V",-0.01);
////star["Deneb"] = new Star("Cygnus","Supergiant","A2 Ia",1.25);
////star["Vega"] = new Star("Lyra","White Dwarf","A0 V",0.03);
////star["Altair"] = new Star("Aquila","White Dwarf","A7 V",0.77);
//
//for(var element in star){
//    for (var propt in star[element])
//    {document.write(element +": "+ propt +" = " + star[element][propt]);
//    document.write(";<br>")};
//}
//if ("Polaris" in star) {
//star["Polaris"].aka = "The North Star";
//alert("Polaris found and is also known as " + star["Polaris"].aka);
//}
//for (var element in star) {
//if ("aka" in star[element]) {
//alert(element + " is in " + star[element].constellation);
//}
//}
//document.forms
//
//
//










//var star = {};
//star["Polaris"] = new Object;
//star["Mizar"] = new Object;
//star["Aldebaran"] = new Object;
//star["Rigel"] = new Object;
//star["Castor"] = new Object;
//star["Albireo"] = new Object;
//star["Acrux"] = new Object;
//star["Gemma"] = new Object;
//star["Procyon"] = new Object;
//star["Sirius"] = new Object;
//star["Rigil Kentaurus"] = new Object;
//star["Deneb"] = new Object;
//star["Vega"] = new Object;
//star["Altair"] = new Object;
//star["Polaris"].constellation = "Ursa Minor";
//star["Mizar"].constellation = "Ursa Major";
//star["Aldebaran"].constellation = "Taurus";
//star["Rigel"].constellation = "Orion";
//star["Castor"].constellation = "Gemini";
//star["Albireo"].constellation = "Cygnus";
//star["Acrux"].constellation = "Crux";
//star["Gemma"].constellation = "Corona Borealis";
//star["Procyon"].constellation = "Canis Minor";
//star["Sirius"].constellation = "Canis Major";
//star["Rigil Kentaurus"].constellation = "Centaurus";
//star["Deneb"].constellation = "Cygnus";
//star["Vega"].constellation = "Lyra";
//star["Altair"].constellation = "Aquila";
//star["Polaris"].type = "Double/Cepheid";
//star["Mizar"].type = "Spectroscopic Binary";
//star["Aldebaran"].type = "Irregular Variable";
//star["Rigel"].type = "Supergiant with Companion";
//star["Castor"].type = "Multiple/Spectroscopic";
//star["Albireo"].type = "Double";
//star["Acrux"].type = "Double";
//star["Gemma"].type = "Eclipsing Binary";
//star["Procyon"].type = "Double";
//star["Sirius"].type = "Double";
//star["Rigil Kentaurus"].type = "Double";
//star["Deneb"].type = "Supergiant";
//star["Vega"].type = "White Dwarf";
//star["Altair"].type = "White Dwarf";
//star["Polaris"].spectralClass = "F7";
//star["Mizar"].spectralClass = "A1 V";
//star["Aldebaran"].spectralClass = "K5 III";
//star["Rigel"].spectralClass = "B8 Ia";
//star["Castor"].spectralClass = "A1 V";
//star["Albireo"].spectralClass = "K3 II";
//star["Acrux"].spectralClass = "B1 IV";
//star["Gemma"].spectralClass = "A0 V";
//star["Procyon"].spectralClass = "F5 IV";
//star["Sirius"].spectralClass = "A1 V";
//star["Rigil Kentaurus"].spectralClass = "G2 V";
//star["Deneb"].spectralClass = "A2 Ia";
//star["Vega"].spectralClass = "A0 V";
//star["Altair"].spectralClass = "A7 V";
//star["Polaris"].mag = 2.0;
//star["Mizar"].mag = 2.3;
//star["Aldebaran"].mag = 0.85;
//star["Rigel"].mag = 0.12;
//star["Castor"].mag = 1.58;
//star["Albireo"].mag = 3.1;
//star["Acrux"].mag = 0.8;
//star["Gemma"].mag = 2.23;
//star["Procyon"].mag = 0.38;
//star["Sirius"].mag = -1.46;
//star["Rigil Kentaurus"].mag = -0.01;
//star["Deneb"].mag = 1.25;
//star["Vega"].mag = 0.03;
//star["Altair"].mag = 0.77;




//function processConfirm(answer) {
//var result = "";
//if (answer) {
//result = "Excellent. We'll play a nice game of chess.";
//} else {
//result = "Maybe later then.";
//}
//return result;
//}
//var confirmAnswer = confirm("Shall we play a game?");
//var theAnswer = processConfirm(confirmAnswer);
//alert(theAnswer);








// var inputNum = parseInt(prompt("Please enter a number below 100:"));
// if (inputNum > 99) {
//  alert("That number, " + inputNum*342 + ", is not below 100.");
// }












//var myObj = {
// star: "Algol",
// constellation: "Perseus"
//};
//if ("star" in myObj) {
// alert("There is a property called star in this object"+myObj.star);
//}else{
//    alert("no")
//}






//var dat = new Date();
//var Day = dat.getDate();
//var DayofWeek = dat.getDay();
//var fullYear4Digit = dat.getFullYear();
//var hours = dat.getHours();
//var month = dat.getMonth();
//document.write(Day);document.write("<br>")
//document.write(DayofWeek);document.write("<br>");
//document.write(fullYear4Digit);document.write("<br>");
//document.write(hours);document.write("<br>");
//document.write(month);document.write("<br>");









/* Function to return a time of loading of a page

var started = new Date();
var now = started.getTime();
for(var i=0;i<1000000000;i++){
    
}
var bottom = new Date();
var diff = (bottom.getTime()-now)/1000;
var finaltime = diff.toPrecision(5);
var dateLoc = document.getElementById("dateField");
dateLoc.innerHTML ="page rendered in " +finaltime +" second.";













/*
// Finding days left in year
function timing(today,then){
var today = new Date();
var then = new Date();

then.setFullYear(2021,0,1);
var diff = then.getTime()-today.getTime();

diff = Math.floor(diff/(1000*60*60*24));
var dateLoc = document.getElementById("dateField");
 dateLoc.innerHTML ="There are "+ diff+ " days untill 1/1/2021"+" from today: " +today;}

setTimeout(timing(),1000)















//var myDate = new Date();
//var dateString = myDate.toLocaleDateString() + " " +myDate.toLocaleTimeString();
//var dateLoc = document.getElementById("dateField");
//dateLoc.innerHTML ="Hello - Page Rendered on " +dateString;
//document.write(myDate.toLocaleDateString());document.write("<br>");
//document.write(myDate.toDateString());
//document.write("<br>");
//document.write(myDate.getFullYear());
//document.write("<br>");
//document.write(myDate.getDay());
//document.write("<br>");












//var star = new Array();
//star[0] = "Polaris";
//star[1] = "Deneb";
//star[2] = "Vega";
//star[3] = "Altair";
//var stars = ["Polaris", "Deneb", "Vega", "Altair"];
//var star1 = [["Polaris", "Ursa Minor"],["Deneb","Cygnus"],["Vega","Lyra"],
//["Altair","Aquila"]];
//
//console.log(star);
//console.log(stars);
//console.log(star1)















//var myObject ={"identifier": "1",
// "name": "Coho Vineyard"};
//alert(myObject.identifier)
//alert(myObject.name)











//Empty Varialbe
/*
var myVariable = '';
document.write(myVariable)











//document.write("\nhello\tgoodbe\b\v\f")
//document.write(Math.PI);
//document.write(Math.POSITIVE_INFINITY);
//Math Object Operation
/*
var x = Math.random()*100;
var y = Math.round(x);
var z = Math.pow(y,2);
    
document.write(z);
document.write("<br>");}
//document.write(x);







//document.write("Is Not a Number : "+ isNaN('four'));
//document.write("Is Not a Number : "+ isNaN(4));













//var h =0x3;
//var i =0x2;
//var j =h*i;
//
//alert(h);
//
//alert(i);
//
//alert(j);
//










/* IFelse
var x =5;

if(x>0){
    alert("Number you Entered is greated than 0");
}else{
    alert("Not Greater than 0");
}
*/




//Fuction & Code to find cube of alert
/*
function cubeme(incomingNum){
    if(incomingNum==1){
        return "What are you Doing?";
    }else{
        return Math.pow(incomingNum,3);
    }
}
var theNum =1;
var finalNum =cubeme(theNum);
if(isNaN(finalNum)){
    alert("You should know that 1 to any power is 1.");
}else {
    alert("When cubed, "+theNum +" is "+ finalNum);
}
*/