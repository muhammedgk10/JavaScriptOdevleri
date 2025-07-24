// ID Seçiciler
// ID seçiciler, HTML belgesindeki belirli bir öğeyi seçmek için kullanılır. Her ID, benzersiz olmalıdır ve JavaScript'te `getElementById` yöntemi ile erişilebilir.
document.getElementById("baslik").style.fontSize="52px";
document.getElementById("icerik").innerHTML="<b>Bu yazı kalın bir yazıdır.</b>";
document.getElementById("paragraf").innerText="Paragrafa yeni cümleler eklenebilir";
document.getElementById("adSoyad").value="Ayhan Akkaya";

// class Seçiciler
// class seçiciler, HTML belgesindeki belirli bir sınıfa ait öğeleri seçmek için kullanılır. JavaScript'te `getElementsByClassName` yöntemi ile erişilebilir.

document.getElementsByClassName("harfler")[0].style.fontSize="52px";
document.getElementsByClassName("harfler")[1].style.fontSize="52px";
document.getElementsByClassName("harfler")[0].style.color="white";
document.getElementsByClassName("harfler")[1].style.color="white";

// Name Seçiciler
// name seçiciler, HTML belgesindeki belirli bir adı taşıyan öğeleri seçmek için kullanılır. JavaScript'te `getElementsByName` yöntemi ile erişilebilir.
document.getElementsByName("kullaniciAdi")[0].style.backgroundColor="red";
document.getElementsByName("kullaniciAdi")[0].style.color="white";

// Tag Seçiciler
// tag seçiciler, HTML belgesindeki belirli bir etikete sahip öğeleri seçmek için kullanılır. JavaScript'te `getElementsByTagName` yöntemi ile erişilebilir.
document.getElementsByTagName("span")[1].style.borderBottomStyle="solid";
document.getElementsByTagName("span")[2].style.borderBottomSize="2px";
