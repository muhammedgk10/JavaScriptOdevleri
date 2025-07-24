// onLoad Belirtilen elemanın tarayıcıya yüklenmesiyle gerçekleşen olaydır.
// onClick Kullanıcının bir elemana tıklamasıyla gerçekleşen olaydır.
// onDblClick Kullanıcının bir elemana çift tıklamasıyla gerçekleşen olaydır.
// onFocus Kullanıcının bir elemanı seçtiğinde (odaklandığında) gerçekleşen olaydır.
// onBlur Kullanıcının seçtiği elemandan ayrıldığında gerçekleşen olaydır.
// onMouseOver Kullanıcının bir elemanın üzerinde fare ile gezdiğinde gerçekleşen olaydır.
// onMouseOut Kullanıcının fare ile üzerinde gezdiği elemandan ayrıldığında gerçekleşen
// olaydır.
// onMouseDown Kullanıcının bir elemanın üzerine fare ile bastığı zaman gerçekleşen olaydır.
// onMouseUp Kullanıcının fare ile bir elemanın üzerine basmayı bıraktığında gerçekleşen
// olaydır.
// onKeyDown Metin girişi yapılabilen elemanlara bilgi girişi yaparken gerçekleşen olaydır

function darkMode(){
    document.getElementsByTagName("body")[0].style.color="white";
    document.getElementsByTagName("body")[0].style.backgroundColor="black";
}

function lightMode(){
    document.getElementsByTagName("body")[0].style.color="black";
    document.getElementsByTagName("body")[0].style.backgroundColor="white";
}