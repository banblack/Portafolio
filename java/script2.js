form.onsubmit = (e) => {
    e.preventDefault(); //No permite que el formulario se envie por default
    estadoTxt.style.display = "block";
    estadoTxt.style.color = "lightgrey";
    estadoTxt.innerText = "Enviando tu Mensaje...";

    let xhr = new XMLHttpRequest(); //Creando un objeto xml
    xhr.open("POST", "./php/email.php", true); //Enviando un post request a mensaje.php
    xhr.onload =()=>{
        //Cuando ajax carga
        if (xhr.readyState == 4 && xhr.status == 200) {
            //si el estado de la respuesta de ajax es 200 y su estado es 4 significa
            let response = xhr.response; //guardando la respuesta de ajax en una variable
            if (response.indexOf("Todos los campos son requeridos") != -1 || response.indexOf("Todos los campos son requeridos")!= -1 || response.indexOf("Todos los campos son requeridos") != -1  ||response.indexOf("Todos los campos son requeridos")!= -1) {
                estadoTxt.style.color = "red";
            } else {
                form.reset();
                setTimeout(() => {
                    estadoTxt.style.display = "none";
                }, 3000);
            }

        }
        estadoTxt.innerText = response;
    }

    let formData = new FormData(form);
    xhr.send(formData);
}