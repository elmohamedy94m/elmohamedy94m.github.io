var myimage = document.querySelector("img");
var mybutton1 = document.getElementById("1");
var mybutton2 = document.getElementById("2");
var mybutton3 = document.getElementById("3");
var mybutton4 = document.getElementById("4");
var mybutton5 = document.getElementById("5");
var mybutton6 = document.getElementById("6");

var usrbutton=document.getElementById("usr");
var myheading =document.querySelector("h1");

function hi() {
  var usrname=prompt("what's your name?");
  localStorage.setItem("name", usrname);
  myheading.innerHTML="Hello, "+usrname+"!";
}
/*if(!localStorage.getItem("name")){
  hi();
}
else {
  var storedname=localStorage.getItem("name");
  myheading.innerHTML="Hello, "+name+"!";
}*/

usrbutton.onclick=function() {
  hi();
}


/*mybutton.onclick = function() {
  var mysource = myimage.getAttribute("src");
  if(mysource === "images/1.jpg") {
      myimage.setAttribute("src","images/2.jpg");
  }
  /*else if {
      myimage.setAttribute("src","images/3.jpg");
  }
  else if {
      myimage.setAttribute("src","images/4.jpg");
  }
  else if {
      myimage.setAttribute("src","images/5.jpg");
  }*/
/*  else {
      myimage.setAttribute("src","images/1.jpg");
  }
}*/

mybutton1.onclick = function() {
  myimage.setAttribute("src", "images/1.jpg");
}
mybutton2.onclick = function(){
  myimage.setAttribute("src", "images/2.jpg");
}
mybutton3.onclick = function() {
  myimage.setAttribute("src", "images/3.jpg");
}
mybutton4.onclick = function() {
  myimage.setAttribute("src", "images/4.jpg");
}
mybutton5.onclick = function() {
  myimage.setAttribute("src", "images/5.jpg");
}
mybutton6.onclick = function() {
  myimage.setAttribute("src", "images/6.jpg");
}
