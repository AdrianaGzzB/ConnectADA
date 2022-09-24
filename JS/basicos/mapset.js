var obj={
    a:1,
    b:2
};
function mult(a,b){
    return a*b;
}

var map=new Map();
map.set(false,0);
map.set(obj,"is a object");
map.set(mult,"funcion mult");
console.log(map.get(mult));