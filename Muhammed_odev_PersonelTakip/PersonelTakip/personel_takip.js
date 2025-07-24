const personeller=[
    {id:1, ad:"Ayhan Akkaya",yas:35, departman:"BT", maas:50000,dogumtarhi:"20.05.1988",dogumyeri:"Eyyübiye",tcno:"12345678901"},
    {id:2, ad:"Muhammed Gök",yas:19, departman:"Pazarlama", maas:30000, dogumtarhi:"21.08.2006",dogumyeri:"Karaköprü",tcno:"12345678901"},
    {id:3, ad:"suriyeli",yas:19, departman:"IK", maas:20000,dogumtarhi:"21.04.2018",dogumyeri:"hakkari",tcno:"12345678901"},
    {id:4, ad:"mami",yas:19, departman:"Muhasebe", maas:10000,dogumtarhi:"24.05.2006",dogumyeri:"Eyyübiye",tcno:"12345678901"},
    {id:5, ad:"Ayhan Akkaya",yas:35, departman:"YZ", maas:60000,dogumtarhi:"26.07.1990",dogumyeri:"Eyyübiye",tcno:"12345678901"},
    
];

function personelGoster(){
    const tumPersoneller=personeller.map((personel,index)=>`<p>${personel.id}:${personel.ad} - ${personel.departman} - ${personel.maas} -${personel.yas}</p>`).join("");
    document.getElementById("personelTakip").innerHTML=tumPersoneller; 
}

function toplamMaasHesapla(){
    const tumMaas=personeller.reduce((toplam, personel)=>toplam+personel.maas,0);
    alert(`Toplam maaş: ${tumMaas}`);
}

function idYeGorePersonelBul(personelId){
    const bulPersonel=personeller.find((personel)=>personel.id===personelId);

    if(bulPersonel){
        document.getElementById("personelTakip").innerHTML=`<p>${bulPersonel.id}:${bulPersonel.ad} - ${bulPersonel.yas} - ${bulPersonel.departman} - ${bulPersonel.maas}</p>`;
    } 
    
    else {
         document.getElementById("personelTakip").innerHTML=`<p>Personel bulunamadı.</p>`;    
    }
}

function yazilimGelistirmeUzmanlariniGoster(){
    const yazilimGelistirmeUzmanlarini = personeller.filter(
        (personel) => personel.departman === "YZ"
    );
    const yazilimGelistirmeUzmanlariniGoster = yazilimGelistirmeUzmanlarini.map(
        (personel, index) => `<p>${personel.id}:${personel.ad} -${personel.yas} - ${personel.departman} - ${personel.maas}</p>`
    ).join("");
    document.getElementById("personelTakip").innerHTML = yazilimGelistirmeUzmanlariniGoster;
}

function IKCalisanlariniGoster(){
    const ikCalisanlari = personeller.filter(
        (personel) => personel.departman === "IK"
    );
    const ikCalisanlariHtml = ikCalisanlari.map(
        (personel, index) => `<p>${personel.id}:${personel.ad} -${personel.yas} - ${personel.departman} - ${personel.maas}</p>`
    ).join("");
    document.getElementById("personelTakip").innerHTML = ikCalisanlariHtml;
}



function personelKisiselbilgiler(){
    const personelKisisel = personeller.map(
        (personel, index) => `<p>${personel.id}:${personel.ad} - ${personel.dogumyeri} - ${personel.dogumtarhi} -${personel.tcno} -${personel.yas}</p>`
    ).join("");
    document.getElementById("personelTakip").innerHTML = personelKisisel;
}

function personelBul(){
    const isim = prompt("Ad yaz:");
    const bulunan = personeller.filter(p => p.ad == isim);

    if(bulunan.length > 0){
        alert("Bulundu: " + bulunan.map(p => p.ad).join(", "));
        document.getElementById("personelTakip").innerHTML = bulunan.map(
            p => `<p>${p.ad} - ${p.departman} - ${p.maas}</p>`
        ).join("");
    } else {
        alert("Yok.");
        document.getElementById("personelTakip").innerHTML = "<p>Bulunamadı</p>";
    }
}
