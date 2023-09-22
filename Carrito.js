const carrito=document.getElementById('carrito');
const template=document.getElementById('template');
const fragment=document.createDocumentFragment();
const btnesBotones=document.querySelectorAll('.card .btn');

const carritoObjeto={}

const agregarCarrito = (e)=>{
    console.log(e.target.dataset.comida);

    const producto = {
        titulo:e.target.dataset.comida,
        id:e.target.dataset.comida,
        cantidad:1
    }
    if(carritoObjeto.hasOwnProperty(producto.id)){
        producto.cantidad=carritoObjeto[producto.titulo].cantidad+1

    }
    carritoObjeto[producto.titulo]=producto;
    pintaCarrito(producto)
    /* console.log(carritoObjeto);   */
}; 
const pintaCarrito=(producto)=>{
    carrito.textContent="";
    Object.values(carritoObjeto).forEach(item=>{
    const clone=template.content.firstElementChild.cloneNode(true);    
    clone.querySelector(".lead").textContent=item.titulo;
    clone.querySelector(".badge").textContent=item.cantidad;
    fragment.appendChild(clone);
    })
    carrito.appendChild(fragment);

    
}

btnesBotones.forEach((btn) => btn.addEventListener('click',agregarCarrito));
