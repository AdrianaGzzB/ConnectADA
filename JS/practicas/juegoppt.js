let j1 = 'piedra';
let j2 = "papel";
let piedra = "piedra";
let papel = "papel";
let tijera = "tijera";
let gana;

console.log(`Los valores son: ${j1} , ${j2}`);

if ((j1!=piedra && j1!=papel && j1!=tijera) || (j2!=piedra && j2!=papel && j2!=tijera))
   {  
   console.log("Error, dato no reconocido");
}
else if ((j1 == papel && j2 == piedra) || (j1 == tijera && j2 == papel) || (j1 == piedra && j2 == tijera)) {
    gana = 'jugador 1'}
else if ((j1 == papel && j2 == papel) || (j1 == piedra && j2 == piedra) || (j1 == tijera && j2 == tijera)) { 
    console.log("Es un empate") }
else {
    gana = 'jugador 2'}
    console.log(`El ganador es ${gana}`)
