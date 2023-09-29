//const formularioQuery = document.querySelector("#formulario");
const formulario = document.getElementById('formulario');
const userName = document.querySelector("input[name='userName']");
const userEmail = document.querySelector("input[name='userEmail']");

/* userName.addEventListener('input', (e) =>{
    alert(userName.checkValidity());
}); */

/* const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail'); */

const alertSuccess = document.getElementById("alertSuccess");
const alertEmail = document.getElementById("alertEmail");
const alertName = document.getElementById("alertName");

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;


const pintarMensajeExito = ()=>{
    alertSuccess.classList.remove('d-none');
    alertSuccess.textContent = "Mensaje enviado con exito"
}
const pintarMensajeError = (errores)=>{
    errores.forEach(item =>{
        item.input.classList.add("is-invalid")
        item.tipo.textContent = item.msg;
    });
}
formulario.addEventListener("submit",(e) =>{

    e.preventDefault();
    const errores = [];
    alertSuccess.classList.add("d-none"); 

    //console.log(userName.value.trim()); //esto devuelve true solo si existe espacio
        if(!regUserName.test(userName.value)||!userName.value.trim()){  
            //userName.classList.add("is-invalid");
            errores.push({
                tipo: alertName,
                input: userName,
                msg: "Formato no valido en el campo, solo letras",
            });

        }else {
            userName.classList.add("is-valid");
            userName.classList.remove("is-invalid");
            //alertName.classList.add("d-none");
        }

        if(!regUserEmail.test(userEmail.value)||!userEmail.value.trim()){
            
            errores.push({
                tipo: alertEmail,
                input: userEmail,
                msg: "Escriba un correo valido"
            });
        }
        else
        {
            userEmail.classList.add("is-valid");
            userEmail.classList.remove("is-invalid");
        }

        if (errores.length !== 0){
            pintarMensajeError(errores);
            return; 
        }

    console.log("Formulario enviado con exito");
    console.log(userName.value);
    console.log(userEmail.value);

    pintarMensajeExito();
});

