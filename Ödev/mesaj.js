function mesajGonder(){
var mesaj=document.getElementById("mesaj").value;
var d = new Date();
var saat=d.getHours();
var dakika=d.getMinutes();
document.getElementById("mesajKutulari").innerHTML+=
"<div class='gidenMesaj'> <img src='images/resim1.jpg'>"
+ mesaj +
"<span id='tarih'>"+saat+":"+dakika+"</span></div>";
document.getElementById("mesaj").value=
"";
}



function mesajAl(){
var mesaj=document.getElementById("1mesaj").value;
var d = new Date();
var saat=d.getHours();
var dakika=d.getMinutes();
document.getElementById("1mesajKutulari").innerHTML+=
"<div class='gidenMesaj'> <img src='images/resim1.jpg'>"
+ mesaj +
"<span id='tarih'>"+saat+":"+dakika+"</span></div>";
document.getElementById("1mesaj").value=
"";
}


