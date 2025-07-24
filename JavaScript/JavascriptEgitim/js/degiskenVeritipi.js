//Değişken Tanımlama Kuralları: Değişken tanımlarken aşağıdaki kurallara dikkat edilmelidir.
//• Tüm tanımlanan değişkenlerin isimleri benzersiz olmalıdır.
//• Değişken isimleri harf, alt çizgi (_) veya dolar işareti ($) ile başlamalıdır.
//• Değişken isimleri sayı ile başlayamaz.
//• Değişken isimlerinde alt çizgi ve dolar işareti hariç özel karakterler kullanılamaz.
//• Değişken isimleri büyük ve küçük harflere duyarlıdır (Sayi ile sayi değişkenleri farklıdır.).
//• Javascript’e ait kod ifadeleri değişken ismi olamaz (var, if, else vb.).


var sayi=52; //sayısal(number) veri tipi
var oran=1.618; //sayısal(float) veri tipi
var sehir="Ordu"; //metinsel(string) veri tipi
var tercih=true; //mantıksal(boolean) veri tipi

var personel={ //nesne(object) veri tipi
ad:"Sinan",
boy:1.87,
kilo:92,
meslek:"Şef(Aşçı)"
}

var a = 5.5; //sayısal(float) veri tipi
var b = 16;  //sayısal(number) veri tipi
var toplam = a + b; //sayısal(float) veri tipi
alert("Toplam: " + toplam); //alert kutusu ile kullanıcıya bilgi verme

var secenek="A";
var yil="2021";
var soru='Javascript ile bir elemanın stil özellikleri değiştirilebilir.';