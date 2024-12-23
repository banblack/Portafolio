<?php
// Establece las cabeceras para que la respuesta se devuelva en formato JSON
header('Content-Type: application/json');

// Función para limpiar entradas y prevenir inyección de caracteres maliciosos
function sanitize_input($data) {
    return preg_replace('/[\r\n]+/', '', $data); // Elimina saltos de línea y caracteres maliciosos
}

// Recoge y sanitiza el nombre del formulario
$nombre = trim(filter_input(INPUT_POST, 'nombre', FILTER_SANITIZE_STRING)); 
// Recoge y valida el correo electrónico
$email = trim(filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL)); 
// Recoge y sanitiza el asunto del formulario
$asunto = trim(filter_input(INPUT_POST, 'asunto', FILTER_SANITIZE_STRING)); 
// Recoge y sanitiza el mensaje del formulario
$mensaje = trim(filter_input(INPUT_POST, 'mensaje', FILTER_SANITIZE_STRING)); 

// Inicializa un arreglo para almacenar la respuesta del servidor
$response = [];

// Verifica que todos los campos estén llenos
if (!empty($nombre) && !empty($email) && !empty($asunto) && !empty($mensaje)) {
    // Verifica que el correo electrónico sea válido
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Define el destinatario del correo
        $receiver = "cristopher.leyton1999@gmail.com"; 
        // Construye el asunto del correo
        $subject = "Nuevo mensaje de contacto: $asunto"; 
        // Cuerpo del mensaje que se enviará
        $body = "Nombre: $nombre\nEmail: $email\nAsunto: $asunto\nMensaje: $mensaje"; 
        // Cabeceras del correo, asegurando un remitente genérico y una dirección de respuesta válida
        $headers = "From: no-reply@tu-dominio.com\r\n"; 
        $headers .= "Reply-To: $email\r\n"; // Añade el email del usuario como dirección de respuesta

        // Envía el correo y verifica si fue exitoso
        if (mail($receiver, $subject, $body, $headers)) {
            // Respuesta positiva si el correo fue enviado correctamente
            $response['status'] = 'success';
            $response['message'] = 'Tu mensaje fue enviado con éxito.';
        } else {
            // Respuesta negativa si el correo no pudo ser enviado
            $response['status'] = 'error';
            $response['message'] = 'Hubo un problema al enviar el mensaje. Inténtalo nuevamente más tarde.';
        }
    } else {
        // Respuesta de error si el correo electrónico no es válido
        $response['status'] = 'error';
        $response['message'] = 'Por favor, ingresa un email válido.';
    }
} else {
    // Respuesta de error si alguno de los campos está vacío
    $response['status'] = 'error';
    $response['message'] = 'Todos los campos son requeridos.';
}

// Convierte la respuesta a formato JSON y la envía al cliente
echo json_encode($response);
?>
