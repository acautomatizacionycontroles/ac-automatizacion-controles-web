// AC Automatización y Controles

console.log("Sitio cargado correctamente");

// Cambiar color del header al hacer scroll
window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.background = "rgba(5,7,10,.98)";
    } else {
        header.style.background = "rgba(11,15,20,.95)";
    }

});
