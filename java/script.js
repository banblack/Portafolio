$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $(".scroll-up-btn").addClass("show");
        } else {
            $(".scroll-up-btn").removeClass("show");
        }
    });
    //Animacion Menu
    var typed = new Typed(".typing", {
        strings: ["Youtuber", "Streamer", "Bloguero", "Desarrollador"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
    });
    var typed = new Typed(".typing-2", {
        strings: ["Youtuber", "Streamer", "Bloguero", "Desarrollador"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
    });

    //Slide-up Script
    $(".scroll-up-btn").click(function () {
        $("html").animate({
            scrollTop: 0,
        });
    });

    //Script NavBar y Boton Menu
    $(".boton-menu").click(function () {
        $(".navbar .menu").toggleClass("active");
        $(".boton-menu i").toggleClass("active");
    });
    // owl-carrousel script
    $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 3,
                nav: false,
            },
        },
    });
    //Formulario

    
    const form = document.querySelector("form"),
    statusTxt = form.querySelector(".boton-form span");

form.onsubmit = (e) => {
e.preventDefault(); // Previene el envío estándar del formulario
statusTxt.style.color = "#0D6EFD";
statusTxt.style.display = "block";
statusTxt.innerText = "Enviando tu mensaje...";

// Crear la solicitud para Formspree
let xhr = new XMLHttpRequest();
xhr.open("POST", "https://formspree.io/f/mrbbgdbo", true); // URL de Formspree
xhr.setRequestHeader("Accept", "application/json"); // Indica que esperamos un JSON como respuesta

xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    // Éxito en el envío
    form.reset(); // Resetea el formulario
    statusTxt.style.color = "green";
    statusTxt.innerText = "¡Mensaje enviado exitosamente!";
    setTimeout(() => {
      statusTxt.style.display = "none";
    }, 3000);
  } else {
    // Error en el envío
    statusTxt.style.color = "red";
    statusTxt.innerText = "Error al enviar el mensaje. Intenta de nuevo.";
  }
};

let formData = new FormData(form); // Captura los datos del formulario
xhr.send(formData); // Envía los datos a Formspree
};

    
});