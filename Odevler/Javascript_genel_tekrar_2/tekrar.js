const satilanlar = [
    { ad: "Laptop", adet: 2, fiyat: 800 },
    { ad: "Monitor", adet: 1, fiyat: 150 },
    { ad: "Mouse", adet: 4, fiyat: 25 }
];

function toplamSatisHesapla(satilanlar) {
    let toplam = 0;
    for (let i = 0; i < satilanlar.length; i++) {
        toplam += satilanlar[i].adet * satilanlar[i].fiyat;
    }
    return toplam;
}

console.log("Toplam Satış Tutarı", toplamSatisHesapla(satilanlar));

const siparis = [
    { ad: "Espresso", adet: 1, fiyat: 3.5 },
    { ad: "Latte", adet: 2, fiyat: 4.0 },
    { ad: "Cappucino", adet: 1, fiyat: 4.5 }
];

function FaturaUret(siparis) {
    let toplamTutar = 0;
    console.log("Fiş:");
    console.log("");
    for (let i = 0; i < siparis.length; i++) {
        const parcaToplam = siparis[i].adet * siparis[i].fiyat;
        toplamTutar += parcaToplam;
        console.log(`${siparis[i].ad} - Miktar: ${siparis[i].adet}, Fiyat: $${siparis[i].fiyat}, Toplam: $${parcaToplam}`);
    }
    console.log("");
    console.log(`Genel Toplam: $${toplamTutar}`);
}


FaturaUret(siparis);

function gecerliSifreler(sifreler) {
    const regex = /^[a-zA-Z0-9]{8,20}$/;
    for (let i = 0; i < sifreler.length; i++) {
        if (regex.test(sifreler[i])) {
            console.log(`${sifreler[i]} geçerli`);
        } else {
            console.log(`${sifreler[i]} geçersiz`);
        }
    }
}

const sifreler = ["mgh12345", "123", "MuhammedGok123", "şifre!", "MuhammedGok9"];
gecerliSifreler(sifreler);



const urunler = [
    { urun: "Laptop", stok: 5 },
    { urun: "Headphones", stok: 0 },
    { urun: "Smartphone", stok: 3 }
];

function stokKontrol(urunler) {
    for (let i = 0; i < urunler.length; i++) {
        if (urunler[i].stok > 0) {
            console.log(`${urunler[i].urun} Stokta.`);
        } else {
            console.log(`${urunler[i].urun} Stokta Yok.`);
        }
    }
}

stokKontrol(urunler);
