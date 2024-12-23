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
        form.onsubmit = (e)=>{
          e.preventDefault();
          statusTxt.style.color = "#0D6EFD";
          statusTxt.style.display = "block";
          statusTxt.innerText = "Sending your message...";
          
        
          let xhr = new XMLHttpRequest();
          xhr.open("POST", "./php/email.php", true);
          xhr.onload = ()=>{
            if(xhr.readyState == 4 && xhr.status == 200){
              let response = xhr.response;
              if(response.indexOf("required") != -1 || response.indexOf("valid") != -1 || response.indexOf("failed") != -1){
                statusTxt.style.color = "red";
              }else{
                form.reset();
                setTimeout(()=>{
                  statusTxt.style.display = "none";
                }, 3000);
              }
              statusTxt.innerText = response;
              
            }
          }
          let formData = new FormData(form);
          xhr.send(formData);
        }


    
});