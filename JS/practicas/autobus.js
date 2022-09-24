const numAlum = 10
let total
let costoporalumno
if (numAlum > 100) {
    costoporalumno = 20
    total = numAlum * costoporalumno
}
else if (numAlum >= 50) {
    costoporalumno = 35
    total = numAlum * costoporalumno
}
else if (numAlum >= 20) {
    costoporalumno = 40
    total = numAlum * costoporalumno
}
else{
    costoporalumno = 70
    total = numAlum * costoporalumno
}
console.log(`El costo total del alumno es de:$ ${costoporalumno}`)
console.log(`El costo total del autobus es de:$ ${total}`);
