const lista=document.querySelector("#lista");
const fragment=document.createDocumentFragment();
const liTemplate=document.querySelector("#liTemplate");
const arrayPaises=["Peru","Mexico","Colombia"];
const clickPaises = (e) => console.log("me diste click",e.target);

arrayPaises.forEach(pais=>{
    const clone= liTemplate.content.firstElementChild.cloneNode(true); 
    clone.querySelector('span').textContent=pais
    clone.addEventListener("click",clickPaises);

    fragment.appendChild(clone)

})

lista.appendChild(fragment); 



/* const clone=liTemplate.content.cloneNode(true);
clone.querySelector(".text-primary").textContent = "agregue a traves de un template";
 */