<?php
    $archivo = fopen("../data/usuarios.json","a+");
    fwrite($archivo, json_encode($_POST) . "\n");
    fclose($archivo);
    $respuesta["codigo"]= 0;
    $respuesta["mensaje"]= "Registro guardado exitosamente";
    echo json_encode($respuesta);
?>