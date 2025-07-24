function yuvarla(derece){
    document.getElementById("cerceve").style.borderRadius=derece;
}

// parametreli ve dönüş değerli fonksiyon
function donustur(gram){
  var kilo=0;
  kilo=gram/1000;
  return kilo;
}

var kiloBul=donustur(5000);
alert("5000 gram = "+kiloBul+" kilo");