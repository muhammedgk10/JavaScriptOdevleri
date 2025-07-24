function musteriEkle() {
    const adSoyad = document.getElementById("adSoyad").value;
    const yas = document.getElementById("yas").value;
    const musteriNo = document.getElementById("telefonNo").value;
    const adres = document.getElementById("Adres").value;

    if (!adSoyad || !yas || !musteriNo || !adres) {
        alert("Alanları doğru giriniz!");
        return;
    }

    document.getElementById("adSoyad").value = "";
    document.getElementById("yas").value = "";
    document.getElementById("telefonNo").value = "";
    document.getElementById("Adres").value = "";
}

function sil(btn) {
    const satir = btn.parentElement.parentElement;
    satir.remove();
}

function duzenle(btn) {
    const satir = btn.parentElement.parentElement;
    const hucreler = satir.querySelectorAll("td");

    document.getElementById("adSoyad").value = hucreler[0].innerText;
    document.getElementById("yas").value = hucreler[1].innerText;
    document.getElementById("telefonNo").value = hucreler[2].innerText;
    document.getElementById("Adres").value = hucreler[3].innerText;

    satir.remove();
}

