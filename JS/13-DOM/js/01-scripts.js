/*const header=document.getElementsByClassName('header');
console.log(header)

const hero=document.getElementsByClassName('contenido-hero');
console.log(hero)
const contenedores=document.getElementsByClassName('contenedor')
console.log(contenedores)*/
//acceder por medio del id
//te va mandar toda la ifromacion que tiene el elemento id
//si hay dos id con el mismo nombre solo te va mandar el primero que encuentra en el HTML

const formulario=document.getElementById('');
console.log(formulario)
 
const card=document.querySelector('.card')
console.log(card)

const info=document.querySelector('.premium .info')
console.log(info)
//acceder a uno mas especifico, al cual quiero acceder, primero se entra con el querySelectorAll (te regresa
// todo lo que encuentra )
const segundoCards=document.querySelector('.hospedaje')
console.log(segundoCard)

const segundoCard = document.querySelector('.hospedaje .card:nth-child(2)')
console.log(segundoCard)

const cards=document.querySelectorAll('.card')
console.log(cards)

const formularios=documento.querySelectorAll('#formulario')
console.log(formularios)

//--------------------modificar texto HTML con JS
const encabezado=document.querySelector('h1')
console.log(encabezado) //te manda el codigo del encabezado del HTML

//document.querySelector('.contenedor-hero h1').textContent='Nuevo encabezado'
//cuando en HTML tenemos la visibilidad como oculta el innerText no lo va encontrar, el textContent si te lo 
//encuentra y te lo hace visible, el innerHTML si lo encuentra pero te lo manda junto con el HTML
console.log(encabezado.innerText) //su visibilidad no encuentra el archivo como tal 
console.log(encabezado.textContent)//te encuentra el archivo y te lo hace visible
console.log(encabezado.innerHTML)//si lo encuentra, pero te lo manda con  todo y HTML, la estructura tal cual.