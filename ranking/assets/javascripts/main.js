//Obtener los elementos de la clase .close
let links = document.querySelectorAll('.close');

//recorrerlos
links.forEach(function(link){
    //Agregar un evento click a cada uno de ellos
    link.addEventListener("click", function(ev){
        ev.preventDefault();
        let content = document.querySelector('.content')
        //quitar las clases de animacion que tiene
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated")

        //Agregar clases para animar su salida
        content.classList.add("animate__fadeOutUp")
        content.classList.add("animate__animated")
        //tiempo de la animacion de salida y entrada
        setTimeout(function(){
            location.href = "../index.html";
        },1000)
    });
});