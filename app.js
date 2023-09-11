let sayiAl = Number(prompt("lütfen bir sayı tutunuz!"));

let tutulanSayi = document.getElementById("sayiTut");

tutulanSayi.textContent = "Tutmuş olduğunuz Sayı : " + sayiAl;

tutulanSayi.style.display = "none";

let x2sonuc = document.getElementById("x2sonuc");

let x2sonucu = sayiAl * 2;

x2sonuc.textContent = "Çarpım sonucu : " + x2sonucu;

x2sonuc.style.display = "none";

let rastgeleSayi = Number(Math.floor(Math.random() * 100) + 1);

let sayiVerme = document.getElementById("sayiVerme");

sayiVerme.textContent = "Eklemeniz gereken sayı : " + rastgeleSayi;

let sayiEkleme = document.getElementById("sayiEkleme");

let sayiEklemeOk = x2sonucu + rastgeleSayi;

sayiEkleme.textContent = "Verilen Sayının Eklenmiş Hali : " + sayiEklemeOk;

sayiEkleme.style.display = "none";

let bölü2 = document.getElementById("bölü2");

let bölüm2 = sayiEklemeOk / 2;

bölü2.textContent = "Sayınızın 2 Ye bölünmüş hali : " + bölüm2;

bölü2.style.display = " none";

let ilkCikar = document.getElementById("ilkCikar");
ilkCikar.textContent =
  "Adım 4 Lütfen ilk başta tuttuğunuz sayıdan  çıkarınız  ";
ilkCikar = bölüm2 - sayiAl;

let sonuc = document.getElementById("sonuc");
sonuc.textContent = "Sonuç " + ilkCikar;

let cevapButton = document.getElementById("showanswer");

cevapButton.addEventListener("click", function () {
  sonuc.style.display = "block";
});
