/*pp=95
pp=85>200
pp=75>300*/

const np = 100;
let tot;
if (np > 300) { tot = np * 75; }
else if (np > 200) { tot = np * 85 }
else { tot = np * 95 }
console.log(`El total a pagar es :$ ${tot}`)    