let c1=0
let c2=0
let c3=0
let c4=0
let p1=0
let p2=0
let p3=0
let p4=0
let v=0
const voto=1

while (voto!=0){
if(voto==1){c1=c1+1}
else if(voto==2){c2=c2+1}
else if(voto==3){c3=c3+1}
else if(voto==4){c4=c4+1}
else{ v=v+1}
}
console.log(`Teclee el numero de voto 1,2,3,4`);
p1=(c1*100)/v
p2=(c2*100)/v
p3=(c3*100)/v
p4=(c4*100)/v
console.log(`El numero de votos para el candidato uno es ${c1} con un porcentaje del % ${p1}`);
console.log(`El numero de votos para el candidato uno es ${c2} con un porcentaje del % ${p2}`);
console.log(`El numero de votos para el candidato uno es ${c3} con un porcentaje del % ${p3}`);
console.log(`El numero de votos para el candidato uno es ${c4} con un porcentaje del % ${p4}`);