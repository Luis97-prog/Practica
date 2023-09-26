/* const numeros=[1,2,3,4,5];

const numeroPorDos = numeros.map((num)=> num*2);
console.log (numeroPorDos);


const users = [
    {uid: 1, name: "Jonh", age: 34},
    {uid: 2, name: "Amy", age: 20},
    {uid: 3, name: "camperCat", age: 10},
    {uid: 4, name: "fulano", age: 20},



]; */

/* const mayores = users.filter((user)=> user.age>30);
console.log(mayores);

const menores = users.filter((user)=>user.age<25);
console.log(menores); */


/* const distinto = users.findIndex((user)=> user.uid ===5);
console.log (distinto); */

/* const arr = ["Cat", "Dog", "Tiger", "Zebra"];
//             0     [1      2]        3
const newArray = arr.slice(1, 3);

console.log(newArray); */
/* const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = [...array1, ...array2];

console.log(array3); */
//El valor devuelto a la funcion reductora se asigna al acumulador, cuyo valor se recuerda en cada iteracion de la matriz y, en la ultima instancia, se convierte en el valor final, unico y resultante.
/* const numeros = [1, 2, 3, 4, 5];

const sumaTodos = numeros.reduce((acc, valorActual) => acc + valorActual);

console.log(sumaTodos); */

/* const arrayNumeros = [
    [0, 1],
    [2, 3],
    [4, 5],
];



const flatSingle = [].concat(...arrayNumeros);
console.log(flatSingle);
 */
const cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const arrayMeses = cadenaMeses.split(",");
console.log(arrayMeses);

const nuevoTexto = arrayMeses.join("-");
console.log(nuevoTexto);

