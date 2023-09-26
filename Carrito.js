const carrito=document.getElementById('carrito');
const template=document.getElementById('template');
const fragment=document.createDocumentFragment();
const btnesBotones=document.querySelectorAll('.card .btn');

const carritoObjeto=[];

const agregarCarrito = (e)=>{
    console.log(e.target.dataset.comida);

    const producto = {
        titulo:e.target.dataset.comida,
        id:e.target.dataset.comida,
        cantidad:1
    };
    
    const indice = carritoObjeto.findIndex(
        (item) => item.id === producto.id);
        console.log(indice);
    if(indice===-1){
        carritoObjeto.push(producto);
    }else {
        carritoObjeto[indice].cantidad++;
    }
        console.log(carritoObjeto);
        pintaCarrito(carritoObjeto);
}; 
    const pintaCarrito=(array)=>{
    carrito.textContent="";
    array.forEach((item)=>{
    const clone = template.content.firstElementChild.cloneNode(true);    
    clone.querySelector(".lead").textContent=item.titulo;
    clone.querySelector(".badge").textContent=item.cantidad;
    fragment.appendChild(clone);
    })
    carrito.appendChild(fragment);    
};

btnesBotones.forEach((btn) => btn.addEventListener('click',agregarCarrito));

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