const carrito=document.getElementById('carrito');
const template=document.getElementById('template');
const footer=document.getElementById('footer');
const templateFooter=document.getElementById('templateFooter');
const fragment=document.createDocumentFragment();

document.addEventListener("click",(e) =>{

//console.log(e.target.matches(".card .btn-outline-primary")); 
if(e.target.matches(".card .btn-outline-primary")){
    //console.log("Ejecutar agregar al carrito")
    agregarCarrito(e);
    };
    if(e.target.matches(".list-group-item .btn-success")){
        btnAumentar(e);
        }
    if(e.target.matches(".list-group-item .btn-danger")){
        btnDisminuir(e);
        }
});
let carritoObjeto=[];

const agregarCarrito = (e)=>{
    console.log(e.target.dataset.comida);

    const producto = {
        titulo:e.target.dataset.comida,
        id:e.target.dataset.comida,
        cantidad:1,
        precio:parseInt(e.target.dataset.precio),
    };
    //console.log(producto); 
     const indice = carritoObjeto.findIndex(
        (item) => item.id === producto.id);
        //console.log(indice);
    if(indice===-1){
        carritoObjeto.push(producto);
        }else {
        carritoObjeto[indice].cantidad++;
        //carritoObjeto[indice].precio=carritoObjeto[indice].cantidad*producto.precio;  
    } 
    
        console.log(carritoObjeto);
        pintaCarrito(); 
}; 
 const pintarFooter = () => {
    console.log("Pintar footer");
    footer.textContent = "";
    const total = carritoObjeto.reduce((acc, current)=> acc + current.cantidad*current.precio, 0);
    const clone = templateFooter.content.cloneNode(true);   
    clone.querySelector('span').textContent=total;
    footer.appendChild(clone);
}; 
const pintaCarrito = () =>{
    carrito.textContent="";

    carritoObjeto.forEach((item)=>{
    const clone = template.content.cloneNode(true);    
    clone.querySelector(".text-white .lead").textContent = item.titulo;
    clone.querySelector(".badge").textContent=item.cantidad;
    clone.querySelector("div .lead span").textContent = item.precio*item.cantidad;

    clone.querySelector(".btn-success").dataset.id = item.id;
    clone.querySelector(".btn-danger").dataset.id = item.id;
    fragment.appendChild(clone);
    });
    carrito.appendChild(fragment);   
    pintarFooter(); 
};
const btnAumentar = (e)=>{
    console.log("Me diste click",e.target.dataset.id);
    carritoObjeto=carritoObjeto.map(item=>{
        if(item.id=== e.target.dataset.id){
            item.cantidad++;

        }
            return item;
    });
    pintaCarrito();
};
const btnDisminuir=(e)=>{

    console.log("me diste click",e.target.dataset.id);

   /*  let index = carritoObjeto.findIndex(item => item.id===e.target.dataset.id); 
    let item = carritoObjeto[index];

    if(item.cantidad > 0){
        item.cantidad--;
    }
    else
    {
        carritoObjeto.splice(index, 1);
    } */

    carritoObjeto=carritoObjeto.filter(item=>{
            if(item.id===e.target.dataset.id){
                if(item.cantidad>0){
                    item.cantidad--
                        if(item.cantidad===0) return
                        return item
                }
            }else{return item}
    });
    pintaCarrito();
};


/* $(document).ready(function(){

    $(document).on("click", ".card .btn-outline-primary", function(e){
        agregarCarrito(e);
    });

    $(document).on("click", ".list-group-item .btn-success", function(e){
        //btnAumentar(e);
        let comida = $(this).data('id');

        let hola = carritoObjeto.find((e) => e.id==comida);
        hola.precio * 
        console.log(hola)
    });

}); */