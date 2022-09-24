const carros = [ //arreglo
    { 
      modelo: 'Ford Mustang', //propiedades
      millaje: 25000, 
      motor: 5.0, 
      produccion: 2017, 
      precio: 25000, 
    }, 
   
    { modelo: 'Honda Accord', millaje: 10000, produccion: 2021, precio: 20000 }, 
   
    { modelo: 'Mini Cooper', millaje: 15000, produccion: 2005, precio: 5000 }, 
  ];
  
  //const modelos=carros.map(carro=>carro.modelo)
  //console.log(modelos);
  const precios=carros.map(precio=>precio.precio)
  //console.log(precios);
  const precioEuros=carros.map(precioE=>precioE.precio*.85) //dentro del map puedes hacer operaciones y se ven afectados todos los valores de la propiedad, aqui solo converitmos el valor del precio a Euros
  
 // console.log(precioEuros);
  //vamos hacer un filtro que cree un arreglo que traiga los carros cuya produccion sean modelos arriba del 2010 y con km(millaje) menor a 30000
//en un filter internamente se mapea primero y luego filtra en base a las condiciones que le damos 
const carrosSemiNuevos = carros.filter(carro=>carro.produccion > 2010 && carro.millaje < 30000 ); //utilizamos operadores logicos
console.log(carros)
console.log(carrosSemiNuevos); 








    