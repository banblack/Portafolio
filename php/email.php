<?php
//Llamar Campos
$nombre = htmlspecialchars($_POST['nombre']);
$email = htmlspecialchars($_POST['email']);
$asunto = htmlspecialchars($_POST['asunto']);
$mensaje = htmlspecialchars($_POST['mensaje']);

if (!empty($nombre) && !empty($email) && !empty($asunto) && !empty($mensaje)) {
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $receiver = "cristopher.leyton1999@gmail.com";
        $subject = "From: $nombre <$email>";
        $body = "Name:$nombre\nEmail: $email\nAsunto: $asunto\nMensaje: $mensaje";
        $sender = "From: $email";
        if (mail($receiver, $subject, $body, $sender)) {
            echo "Tu mensaje fue enviado";
        } else {
            echo "Lo siento, tu mensaje no fue enviado";
        }
    } else {
        echo "Ingresa un email válido";
    }
} else {
    echo "Todos los campos son requeridos";
}
?>