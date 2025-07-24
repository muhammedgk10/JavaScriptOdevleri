//Aritmetik Operatörler
let a = 10;
let b = 5;  
let toplam = a + b; // Toplama işlemi
let fark = a - b; // Çıkarma işlemi
let carpim = a * b; // Çarpma işlemi
let bolum = a / b; // Bölme işlemi  
let kalan = a % b; // Mod alma işlemi (kalan)
let usAlma = a ** b; // Üs alma işlemi
console.log("Toplam: " + toplam); // Toplama sonucu
console.log("Fark: " + fark); // Çıkarma sonucu
console.log("Çarpım: " + carpim); // Çarpma sonucu
console.log("Bölüm: " + bolum); // Bölme sonucu
console.log("Kalan: " + kalan); // Mod alma sonucu
console.log("Üs Alma: " + usAlma); // Üs alma sonucu    
// Atama Operatörleri
let x = 10; // Değişkene değer atama
x += 5; // x = x + 5; (Toplama atama)
x -= 3; // x = x - 3; (Çıkarma atama)
x *= 2; // x = x * 2; (Çarpma atama)
x /= 4; // x = x / 4; (Bölme atama)
x %= 3; // x = x % 3; (Mod alma atama)
console.log("Atama Sonucu: " + x); // Atama işlemi sonucu
// Karşılaştırma Operatörleri
let y = 10;
let z = 20;
console.log("Eşit mi?: " + (y == z)); // Eşitlik kontrolü
console.log("Eşit değil mi?: " + (y != z)); // Eşitsizlik kontrolü
console.log("Büyük mü?: " + (y > z)); // Büyüklük kontrolü
console.log("Küçük mü?: "+ (y < z)); // Küçüklük kontrolü
console.log("Büyük veya eşit mi?: " + (y >= z)); // Büyüklük veya eşitlik
console.log("Küçük veya eşit mi?: " + (y <= z)); // Küçüklük veya eşitlik
// Mantıksal Operatörler
let a1 = true;
let b1 = false;
console.log("Mantıksal VE (AND): " + (a1 && b1)); // AND işlemi
console.log("Mantıksal VEYA (OR): " + (a1 || b1)); // OR işlemi
console.log("Mantıksal DEĞİL (NOT): " + (!a1)); // NOT işlemi
// Bit Düzey Operatörleri
let bit1 = 5; // 0101
let bit2 = 3; // 0011
console.log("Bit Düzey AND: " + (bit1 & bit2)); // Bit düzey AND işlemi
console.log("Bit Düzey OR: " + (bit1 | bit2)); // Bit düzey OR işlemi
console.log("Bit Düzey XOR: " + (bit1 ^ bit2)); // Bit düzey XOR işlemi
console.log("Bit Düzey NOT: " + (~bit1)); // Bit düzey NOT işlemi
console.log("Bit Düzey Sol Kaydırma: " + (bit1 << 1)); // Sol kaydırma işlemi
console.log("Bit Düzey Sağ Kaydırma: " + (bit1 >> 1)); // Sağ kaydırma işlemi