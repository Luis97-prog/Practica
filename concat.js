//concat
/* const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
//const array3 = array1.concat(array2);
const array3 = [...array1, ...array2];

console.log(array3); */

//reduce

/* const numeros = [1, 2, 3, 4, 5];

const sumaTodos = numeros.reduce((acc, valorActual) => acc + valorActual);

console.log(sumaTodos); */

//union de matrices

/* const arrNum = [
["0","1"],
["2","3"],
["4","5"],
];
const soloNumeros = arrNum.reduce((acc,current)=>acc.concat(current));
console.log(soloNumeros); */

//matriz plana

/* const arrNum = [
["0","1"],
["2","3"],
["4","5"],
];
const arrPlano = [].concat(...arrNum);
console.log(arrPlano); */

//split

/* const cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const arrayMeses = cadenaMeses.split(",");
console.log(arrayMeses);

const nuevoTexto = arrayMeses.join("-");
console.log(nuevoTexto); */

/* const cajita = document.querySelectorAll(".border");

cajita.forEach((caja)=>{
    caja.addEventListener("click",(e)=>{
        e.stopPropagation();
        console.log("me diste click");


    });


}); */

/* const formulario = document.querySelector("form");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("click");
}); */

/* const ancla = document.querySelector("a");
ancla.addEventListener("click",(e)=>{
    console.log("me diste click");
    e.preventDefault();

}); */

/* const container = document.querySelector(".container");
container.addEventListener("click",(e)=>{ */
    /* console.log(e.target.dataset);

    if(e.target.id==="padre"){
        console.log("Le diste click al padre")
    }   
    if(e.target.id==="hijo"){
        console.log("Le diste click al hijo");
    }  
    if(e.target.id==="nieto"){
        console.log("Le diste click al nieto");
    }  */ 

/* if(e.target.matches(".border-secondary")){
    console.log("Le diste click al hijo");    

}
console.log(e.target.dataset.div);
if(e.target.dataset.div==="divNieto"){
    console.log("le diste click al nieto");

}
});  */
