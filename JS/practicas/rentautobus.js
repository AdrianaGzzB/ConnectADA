const nalum=0
let ptotal;
if(nalum>=100){
    ptotal=nalum*65;
}
else if(nalum>=50){
    ptotal=nalum*70;
} 
else if(nalum>=30){
    ptotal=nalum*95;
}
else { ptotal=4000/nalum;
}
console.log(`El costo total es de:$ ${ptotal}`)
