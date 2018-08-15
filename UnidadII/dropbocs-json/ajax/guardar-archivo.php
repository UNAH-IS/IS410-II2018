<?php
    $archivo=fopen("../data/".$_POST["carpetaActual"].".json","a+");
    //$_POST["tipo"]="folder";
    fwrite($archivo, json_encode($_POST)."\n");
    //../data/home.json
    fclose($archivo);

    $respuesta["codigoRespuesta"]=1; //Codigo inventado para que el cliente entienda que todo esta bien.
    $respuesta["mensajeRespuesta"]="El archivo fue creado con éxito."; //Codigo inventado para que el cliente entienda que todo esta bien.
    echo json_encode($respuesta);
?>