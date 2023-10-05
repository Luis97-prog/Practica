/*
funcion constructora = Plantilla = Class

    function persona (nombre){   <--funcion persona con parametros nombre
    this.nombre = nombre;
    this.saludar = function(){  <--el metodo saludar es igual a la funcion que retorna "dice hola"
      return `${this.nombre} dice hola`

    }
    this.saludarIngles = function (){
        return `${this.nombre} says hi`
    }

}
const juanito = new persona("juanito");
console.log(juanito.saludar());
const pedrito = new persona("pedrito");
console.log(pedrito.saludar());
console.log(pedrito.saludarIngles()); 
*/
class persona {
    constructor(nombre,edad,nota = []) { //esto construye las propiedades
        this.nombre = nombre;
        this.edad = edad;
}
    get getNombre() { // la regla de los getter es que no reciben parametros y siempre tienen que retornar algo
        return this.nombre;
}
    set setNombre(nombre){ //la regla de los setter es que solo recibe un parametro
        this.nombre = nombre; 
    }
    saludar(){
        return`${this.nombre} dice hola`;
    }
    static probarSaludo (nombre) { //
        return `${nombre} probando saludo`
        
    }
};
class estudiante extends persona {
    #notas = []
    set setNotas (nota){
        this.#notas.push(nota);
    
    } 
    get getNotas (){
        return this.#notas

    }
    
}
const juanito = new estudiante ("juanito",30);
juanito.setNotas = 7
juanito.setNotas = 5
juanito.setNotas = 1
console.log(juanito);
//juanito.nombre = "pedrito";
/* juanito.setNombre = "pedrito";
console.log(juanito.getNombre);
console.log(juanito.saludar()); */