function mesajGonder() {
    var mesaj = document.getElementById("mesaj").value;
    var d = new Date();
    var saat = d.getHours();
    var dakika = d.getMinutes();

    document.getElementById("mesajKutulari").innerHTML +=
        "<div class='gidenMesaj'> <img src='images/resim.jpg'>"
        + mesaj +
        "<span id='tarih'>" + saat + ":" + (dakika < 10 ? "0" + dakika : dakika) + "</span></div>";

    document.getElementById("mesaj").value = "";
}

function mesajAl() {
    var mesaj = document.getElementById("mesajAlt").value;
    var d = new Date();
    var saat = d.getHours();
    var dakika = d.getMinutes();

    document.getElementById("mesajKutulari").innerHTML +=
        "<div class='gelenMesaj'><img src='images/resim1.PNG'>"
        + mesaj +
        "<span id='tarih'>" + saat + ":" + (dakika < 10 ? "0" + dakika : dakika) + "</span></div>";

    document.getElementById("mesajAlt").value = "";
}
