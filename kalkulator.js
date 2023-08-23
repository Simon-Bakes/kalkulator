const odliczanie = () => {
  const dzis = new Date();
  const godzina = dzis.getHours();
  const minuta = dzis.getMinutes();
  let sekunda = dzis.getSeconds();
  if (sekunda < 10) sekunda = "0" + sekunda;

  /* document.getElementById(
    "wyswietlacz"
  ).innerHTML = `${godzina}:${minuta}:${sekunda}`;
  setTimeout("odliczanie()", 1000);*/
};

let x1 = 0,
  x2 = 0,
  liczba1 = "",
  liczba2 = "";
przelacznik = true;
ciag = "";

const liczby = (x) => {
  if (przelacznik == true) {
    liczba1 += x;
    ciag = liczba1.toString();
    x1 = +ciag;
    document.getElementById("wyswietlacz").innerHTML = ciag;
  }
  if (przelacznik == false) {
    liczba2 += x;
    ciag += x.toString();
    x2 = +liczba2;
    document.getElementById("wyswietlacz").innerHTML = ciag;
  }
};

let param = "";

const dzialanie = (p) => {
  param = p;
  ciag += param;
  document.getElementById("wyswietlacz").innerHTML = ciag;
  przelacznik = false;
};

let wyniczek = 0;

const wynik = () => {
  switch (param) {
    case "+":
      wyniczek = x1 + x2;
      break;
    case "-":
      wyniczek = x1 - x2;
      break;
    case "*":
      wyniczek = x1 * x2;
      break;
    case "/":
      wyniczek = x1 / x2;
      break;
  }
  //document.getElementById("wyswietlacz").innerHTML = wyniczek;
  ciag += "= " + wyniczek;
  document.getElementById("wyswietlacz").innerHTML = ciag;
  ciag = "";
  x1 = 0;
  x2 = 0;
  wyniczek = 0;
  param = "";
  przelacznik = true;
  liczba1 = "";
  liczba2 = "";
};

const czysc = () => {
  document.getElementById("wyswietlacz").innerHTML = "";
  ciag = "";
  x1 = 0;
  x2 = 0;
  wyniczek = 0;
  param = "";
  przelacznik = true;
  liczba1 = "";
  liczba2 = "";
};
