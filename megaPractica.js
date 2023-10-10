console.log("funcionando");
const formulario = document.querySelector("#formulario");
const cardsEstudiantes = document.querySelector("#cardsEstudiantes");
const cardsProfesores = document.querySelector("#cardsProfesores");
const templateEstudiante = document.getElementById("templateEstudiante").content
const templateProfesor = document.querySelector("#templateProfesor").content
const alerta = document.getElementsByClassName('alert')[0];

const estudiantes = [];
const profesores = [];

document.addEventListener("click", (e) => {
     //console.log(e.target.dataset.nombre); 
    if(e.target.dataset.nombre){
        //console.log(e.target.matches(".btn-success"));
    }
        if(e.target.matches(".btn-success")){

            for (let i in estudiantes){

                let item = estudiantes[i];

                if(item.nombre===e.target.dataset.nombre){
                    item.setEstado = true;
                    break;
                }
            }

            Persona.pintarPersonaUI(estudiantes, "Estudiante");
        }
        if(e.target.matches(".btn-danger")){
            estudiantes.map((item)=>{ 
                if(item.nombre===e.target.dataset.nombre){
                    item.setEstado = false;
                }
                console.log(item)
                return item;
            })
            Persona.pintarPersonaUI(estudiantes, "Estudiante");
        }
    })

class Persona {
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    static pintarPersonaUI (personas, tipo){
        if(tipo === "Estudiante"){
            cardsEstudiantes.textContent = "";
            const fragment = document.createDocumentFragment();
            personas.forEach((item) =>{
                fragment.appendChild(item.agregarEstudiante());
            })
            cardsEstudiantes.appendChild(fragment);
        }
        if(tipo === "Profesor"){
            cardsProfesores.textContent = "";
            const fragment = document.createDocumentFragment();
            personas.forEach((item)=>{
                fragment.appendChild(item.agregarNuevoProfesor());

            });
            cardsProfesores.appendChild(fragment);
        }
    }
}

class Estudiante extends Persona {
    #estado = false;
    #estudiante = "Estudiante";

    set setEstado (estado){
        this.#estado = estado;
    }
    get getEstudiante (){
        return this.#estudiante;
    }
    agregarEstudiante (){       

        const clone = templateEstudiante.cloneNode(true);
        clone.querySelector("h5 .text-primary").textContent = this.nombre;
        clone.querySelector(".lead span").textContent = this.edad
            if(this.#estado){
                clone.querySelector(".badge").className = "badge bg-success"
                clone.querySelector(".btn-success").disabled = true;
                clone.querySelector(".btn-danger").disabled = false;
            }else {
                clone.querySelector(".badge").className = "badge bg-danger"
                clone.querySelector(".btn-danger").disabled = true;
                clone.querySelector(".btn-success").disabled = false;

            }
                clone.querySelector(".badge").textContent = this.#estado ? "Aprobado" : "Desaprobado";
                clone.querySelector(".btn-success").dataset.nombre = this.nombre;
                clone.querySelector(".btn-danger").dataset.nombre = this.nombre;
                           
            return clone;
        }
       
    }

class Profesor extends Persona {
    #profesor = "Profesor"

    agregarNuevoProfesor(){
        const clone = templateProfesor.cloneNode(true);
        clone.querySelector("h5").textContent = this.nombre;
        clone.querySelector("h6").textContent = this.#profesor;
        clone.querySelector("#edadProfesor  ").textContent = this.edad;
        return clone;
    }
}

formulario.addEventListener("submit", (e) =>{
  e.preventDefault(); // esto es para quitar el comportamiento que hace por defecto el navegador

    const datos =  new FormData(formulario);
    const [nombre,edad,opcion] = [...datos.values()];
    let repite=false;
    if(opcion === "Estudiante"){
        for(let i in estudiantes){
            if(estudiantes[i].nombre==nombre){
                repite = true;
                break;
            }
        }
        if(repite===false){
            alerta.classList.add('d-none');
            const estudiante = new Estudiante(nombre, edad); 
            estudiantes.push(estudiante) //Empujo el nuevo estudiante
            Persona.pintarPersonaUI(estudiantes,opcion);
        }
        else{
            alerta.classList.remove('d-none');
        }
    }
    if(opcion === "Profesor"){
        for(let i in profesores){
            if(profesores[i].nombre==nombre){
                repite = true;
                break;
            }
        }
        if(repite===false){
            alerta.classList.add('d-none');
            const profesor = new Profesor(nombre,edad);
            profesores.push(profesor);
            Persona.pintarPersonaUI(profesores,opcion);
        }else{
            alerta.classList.remove('d-none');
        }
    }
});