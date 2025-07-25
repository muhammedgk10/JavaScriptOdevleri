let ad = "Muhammed";
let yas = 19;
console.log(ad);
console.log(yas);

const pi = 3.147;
console.log(pi);

function girdiyaz(girdi) {
    console.log("Kullanıcı başarılı: " + girdi);
}

girdiyaz("Muhammed");
girdiyaz(19);

let girdiYazEs6 = (girdi) => {
    console.log("ES6 ya göre girdi: " + girdi);
}

girdiYazEs6("akkayasoft"); 

let yeniTipMetot = input_type => console.log(input_type);
yeniTipMetot(5);

function aritmetik(a, b) {
    console.log("Toplam = ", a + b);
    console.log("Çıkarma = ", a - b);
    console.log("Çarpma = ", a * b);
    console.log("Bölme = ", a / b);
    console.log("Mod Alma = ", a % b);
    console.log("Üslü ifade = ", a ** b);
}
aritmetik(4, 2);

function stringBirlestirme() {
    console.log("5 + 3 =", 5 + 3);
    console.log("5 + \"3\" =", 5 + "3");
    console.log("5 + 5 + \"3\" =", 5 + 5 + "3");
    console.log("\"3\" + 5 + 5 =", "3" + 5 + 5);
    console.log("5 + 5 + \"3\" + 5 =", 5 + 5 + "3" + 5);
}
stringBirlestirme();

function atamaOperatoru() {
    let x = 5;
    console.log("old value of x:", x);
    x += 3;
    console.log("New value of x:", x);

    let y = 5;
    console.log("old value of y:", y);
    y -= 3;
    console.log("New value of y:", y);

    let a = 6;
    console.log("old value of a:", a);
    a *= 3;
    console.log("New value of a:", a);

    let b = 6;
    console.log("old value of b:", b);
    b /= 3;
    console.log("New value of b:", b);

    let c = 6;
    console.log("old value of c:", c);
    c %= 3;
    console.log("New value of c:", c);

    let d = 6;
    console.log("old value of d:", d);
    d **= 3;
    console.log("New value of d:", d);
}
atamaOperatoru();

function karsilastirma() {
    console.log("5==='5': ", 5 === '5');
    console.log("5==5  : ", 5 == 5);
    console.log("5!='5': ", 5 != '5');
    console.log("5!==5 : ", 5 !== 5);
    console.log("5!==6 : ", 5 !== 6);
    console.log("5!='5': ", 5 != '5');
    console.log("5 > 2 : ", 5 > 2);
    console.log("5 > 7 : ", 5 > 7);
    console.log("5 < 7 : ", 5 < 7);
    console.log("5 < 2 : ", 5 < 2);
    console.log("5 < 5 : ", 5 < 5);
    console.log("5 >= 5 : ", 5 >= 5);
    console.log("5 <= 5 : ", 5 <= 5);
}
karsilastirma();

function mantiksal() {
    var raining = false;
    var cloudy = true;
    console.log("It is raining: ", raining);
    console.log("It is cloudy: ", cloudy);
    console.log("It is raining AND cloudy: ", raining && cloudy);
    console.log("It is raining OR cloudy: ", raining || cloudy);
    console.log("It is not raining: ", !raining);
    console.log("It is not cloudy: ", !cloudy);
}
mantiksal();

function kontrolDeyimleri() {
    let girdi = prompt('Bir sayı giriniz');
    if (!girdi) {
        console.log("Herhangi bir sayı girmediniz");
    } else if (isNaN(girdi)) {
        console.log("Geçersiz bir sayı ", girdi);
        console.log("Girdiğiniz metnin uzunluğu: ", girdi.length);
    }

    girdi = Number(girdi);
    if (!isNaN(girdi)) {
        for (let i = 1; i <= 10; i++) {
            console.log(girdi, "x", i, "=", girdi * i);
        }
    }
}
kontrolDeyimleri();

function switchCase() {
    let sayi = prompt('1 ile 7 arasında bir sayı giriniz:');
    if (isNaN(sayi) || sayi < 1 || sayi > 7) {
        console.log("Invalid input");
    } else {
        sayi = parseInt(sayi);
        switch (sayi) {
            case 1: console.log("Sunday"); break;
            case 2: console.log("Monday"); break;
            case 3: console.log("Tuesday"); break;
            case 4: console.log("Wednesday"); break;
            case 5: console.log("Thursday"); break;
            case 6: console.log("Friday"); break;
            case 7: console.log("Saturday"); break;
            default: console.log("Invalid entry");
        }
    }
}
switchCase();

let girdi = prompt("Bir sayı girin");
girdi = Number(girdi);
if (isNaN(girdi)) {
    console.log("Geçerli bir sayı girmediniz.");
} else {
    for (let i = 0; i < 10; i++) {
        console.log(girdi, "x", i, "=", girdi * i);
    }
}

let basla = true;
while (basla) {
    let kelime = prompt("Bir kelime gir:");
    if (isNaN(kelime)) {
        console.log("Girilen kelimenin uzunluğu = " + kelime.length);
    } else {
        console.log("Kelime olmayan bir yapı girdin. Sadece kelime girebilirsin. Tekrar dene.");
    }

    let devam = prompt("Devam etmek istiyor musun? Durmak için n'e bas.");
    if (devam == "n") {
        basla = false;
    }
}

let liste = ["Muhammed", "Gök", 4, 5, true, "akkayasoft"];
console.log(liste[0]);
console.log(liste[5]);

liste.forEach((element) => {
    console.log(element);
});

let liste2 = ["Muhammed", "Gök", 4, 5, true, "Akkayasoft"];
for (const [index, value] of Object.entries(liste2)) {
    console.log(index, "-", value);
}

 function degistir() {
 document.getElementById("baslik").innerText = "DOM ile değiştirildi!";
}