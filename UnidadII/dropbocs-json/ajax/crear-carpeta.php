<?php
    //sleep(10);
    if (isset($_POST)){
        //Crear carpeta fisica
        mkdir("../data/".$_POST["carpetaActual"]."/".$_POST["nombre"]);
        //Crear archivo csv vacio
        $archivo=fopen("../data/".$_POST["carpetaActual"]."/".$_POST["nombre"].".json","w");
        fclose($archivo);
        //../data/home/ProyectosdePOO.csv

        //Agregar registro en el archivo csv que contendra la carpeta
        $archivo=fopen("../data/".$_POST["carpetaActual"].".json","a+");
        //$_POST["tipo"]="folder";
        fwrite($archivo, 
                json_encode($_POST)."\n");
        //../data/home.json
        fclose($archivo);
        $respuesta["codigoRespuesta"]=1; //Codigo inventado para que el cliente entienda que todo esta bien.
        $respuesta["mensajeRespuesta"]="La carpeta fue creada con éxito."; //Codigo inventado para que el cliente entienda que todo esta bien.
        //echo "Hola";
        echo json_encode($respuesta);
    }
?>