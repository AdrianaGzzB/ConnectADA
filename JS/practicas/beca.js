const edad = 10;
const prom = 6;
let beca;

if (edad >= 18) {
  if (prom >= 9) {
    beca = 2000;
  } else if (prom >= 7.5) {
    beca = 1000;
  } else if (prom >= 6) {
    beca = 500;
  } else {
    console.log(`Mandar invitacion`);
  }
} else if (prom >= 9) {
  beca = 3000;
} else if (prom >= 8) {
  beca = 2000;
} else if (prom >= 6) {
  beca = 100;
} else {
  console.log(`Mandar invitacion`);
}
console.log(`El total de la beca es de:$ ${beca}`);
