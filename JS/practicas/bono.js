const sueldo=2800
const antiguedad=6
let bono;
if(antiguedad>4 || sueldo<2000)
    { bono=sueldo*.25;
      console.log(`El bono es de:$ ${bono}`)}
else{bono=sueldo*.20;
      console.log(`El bono es de:$ ${bono}`)}