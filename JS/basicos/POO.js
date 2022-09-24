class Comida { //lleva llaves la clase
    constructor(id,nombre,color){ //lleva llaves el constructor
        this.id=id;//el id que pasemos de la clase comida va ser igual al id del objeto nuevo
        this.nombre= nombre;//la palabra this va hacer que la propiedad nombre de la clase Comida tome el valor de la propiedad nombre del nuevo objeto
        this.color= color; //debe llevar la palabra this seguida de un punto y el nombre de la propiedad
}
//para declarar un metodo es afuera del constructor pero adentro de la clase
//no se pone la palabra function
nombre(){
    return `${this.nombre} de color ${this.color}`; //temple sintaxs o concatenacion 
}
}
class Galleta extends Comida{
    constructor(id,nombre,color,sabor){
        super(id,nombre,color);
        this.sabor=sabor;
    }
}
const manzana=new Comida(1,'manzana','rojo'); //creamos un objeto nuevo y con la palabra 'new'estamos instanciando, la palabra const es de constructor
const pera=new Comida(2,'pera','verde')//este es otro objeto nuevo
console.log(manzana.nombrar());
console.log(pera.nombrar());