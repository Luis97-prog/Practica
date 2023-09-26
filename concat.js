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

const cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const arrayMeses = cadenaMeses.split(",");
console.log(arrayMeses);

const nuevoTexto = arrayMeses.join("-");
console.log(nuevoTexto);
