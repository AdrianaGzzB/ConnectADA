//sintaxis---------------------------
/*
class Nombre_Clase{ //class declaration
    //cuerpo de la clase
}
const Nombre_Clase2=class{//class expresion
} */

class Cliente{
    constructor(nombre,saldo,edad){
        this.nombre=nombre; //
        this.saldo=saldo;
        this.edad=edad;
        this.arreglo=[]
    }
    mostrarSaldo(){ //un metodo esta dentro de una clase esa es la diferencia con una funcion, su sintaxis es el nombre del metodo,parentexis y llaves
    return `Hola ${this.nombre}, tu saldo es de ${this.saldo} y tu edad es de: ${this.edad}`
    } 
    retirarSaldo(retiro){
        this.saldo-=retiro;
    }
   //metodo estatico nunca va variar su valor y pertenece a la clase
   
   agregarArreglo(valor){
    this.arreglo.push(valor)
   }

   static apertura(){
    return `Bienvenido al cajero`
   } 
   
}
const cliente1=new Cliente('Andy',950,19)
console.log(cliente1)
cliente1.retirarSaldo(100)
cliente1.agregarArreglo('aprendiendo POO')
console.log(cliente1.mostrarSaldo())
console.log(cliente1.apertura())


//codigo para herencia o subclase
class Empresa extends Cliente{ //con la palabra extends yo le digo que va ser una herencia
    constructor(nombre,saldo,edad,telefono,tipo){
    super(nombre,saldo,edad); //con la palabra super yo le digo que estas propiedades son las que estoy heredando
    this.telefono=telefono;
    this.tipo=tipo;
    }
    static bienvenida(){
        return `Hola, bienvenido al cajero`
    }
}
const adry=new Cliente('Adriana',1000,32);
console.log(adry.mostrarSaldo());
const empresa=new Empresa('Jessi',2000,23,43565757,'servicio');
console.log(empresa.mostrarSaldo());
console.log(Empresa.bienvenida())

/*
const nombre=new Cliente('Adriana',300,23); //instanciar es dar valor a las propiedades 
const cliente1=new Cliente('Andy', 1000,19)
console.log(cliente1)
cliente1.retirarSaldo(100)
console.log(cliente1.mostrarSaldo())
console.log(Cliente.apertura())*/

