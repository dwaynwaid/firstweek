// zadanie1 

// Stwórz program, który przyjmie od użytkownika przez prompt imię, a następnie 15 nazwisko, na końcu wiek (3 prompt-y). Tylko jeżeli wiek to min. 18 to wyświetl w konsoli imię i nazwisko. 
  
let name = prompt('What is your name ?');
let surname = prompt('What is your surname ?');
let age = prompt('What is your age ?');

if (age >= 18) {
  console.log(name +' '+ surname);
} else {
  console.log('Your age is less than 18');
}

// zadanie2
// Stwórz prosty kalkulator. Zapytaj użytkownika o pierwszą liczbę, drugą i o znak – osobno trzema prompt. Następnie za pomocą odpowiednich ifów i operacji wykonaj jedno z działań: ⦁ a + b 16 ⦁ a – b ⦁ a * b ⦁ a / b Wyświetl wynik działania w konsoli.
// https://replit.com/@KorbeckyMarcin/ciczenie-2#index.js

let first = Number(prompt('Enter first number: '));
let second = Number(prompt('Enter second number: '));
let symbol = prompt('Enter symbol: ');

if (symbol === '+') {
  console.log(first+second);
} else if (symbol === '-') {
  console.log(first-second);
} if (symbol === '*') {
  console.log(first*second);
} if (symbol === '/') {
  console.log(first/second);
}

// zadanie3

// Program CrAzY TeXt. Napisz taki program, który przyjmuje tekst wpisany perzez użytkownika przez prompt. Następnie w pętli wypisz po kolei każdy pojedynczy znak, ale w ten sposób, aby nieparzyste były zapisane wielką literą, a parzyste – małą. Np. Hello wyświetl jako: H e L l O PS. Poszczególne znaki możesz wyciągać z tekstu jak z tablicy. Np. str[1]. ⦁ Rozwiązanie przy użyciu programowania funkcyjnego:

let text = prompt('Enter text: ');

for(let i = 0; i <=text.length-1;i++) {
  if (i % 2 === 0) {
    console.log(text[i].toUpperCase());
  } else {
    console.log(text[i]);
  }
}
