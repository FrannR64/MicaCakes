

//menu
const hamburguer=document.querySelector(".hamburguer");
const ul= document.getElementById("ul");

//fotos
const imagenes=document.querySelectorAll(".imagen")
const agregar_imagen=document.querySelector(".agregar_imagen");
const box=document.querySelector(".box")
const cruz=document.querySelector(".cruz")

hamburguer.addEventListener("click", ()=>{

ul.classList.toggle("desaparecer");

})



imagenes.forEach(imagen =>{

imagen.addEventListener("click",()=>{

    box.classList.add("fondo");
    box.classList.add("show");
   

    aparecerImagen(imagen.getAttribute('src'));
    console.log(imagen);
   



})


})

box.addEventListener("click", (e)=>{

    if(e.target != agregar_imagen)
    {
        agregar_imagen.classList.remove("ver");
        setTimeout(() => {
            box.classList.remove("show");
        }, 350);
        
       
    }    





})


const aparecerImagen = (agregar)=>{

agregar_imagen.src=agregar;
agregar_imagen.classList.add("ver");

}










