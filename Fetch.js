/* fetch("https://pokeapi.co/api/v2/pokemon/ditto")
.then((res)=>res.json())
.then((data)=>console.log(data))  */

document.addEventListener("DOMContentLoaded",()=>{
    fetchData();
    
    
})
        
const fetchData = async () => {
//console.log("Obteniendo datos...");
try{
        loadingData(true);
        const res = await fetch('https://rickandmortyapi.com/api/character');
        const data = await res.json();
        pintarCard(data);
        //console.log(data);
    }catch (error){
        console.log(error);
    }finally{
        loadingData(false);
    }
};
const pintarCard = (data) =>{
    const cards = document.getElementById('card-dinamicas');
    const templateCard = document.getElementById('template-card').content
    const fragment = document.createDocumentFragment()
    //console.log(data);
    data.results.forEach((element) => {
        // console.log(element);
        const clone = templateCard.cloneNode(true);
        clone.querySelector("h5").textContent = element.name;
        clone.querySelector("p").textContent = element.species;
        clone.querySelector(".card-img-top").setAttribute("src",element.image);
        fragment.appendChild(clone); //guardamos en el fragment para evitar reflow
    });
    cards.appendChild(fragment);
};
const loadingData = (estado) => {
    const loading  = document.getElementById("Loading")
    if(estado){
        loading.classList.remove("d-none");
    }else{
        loading.classList.add("d-none");
    }
    

}


