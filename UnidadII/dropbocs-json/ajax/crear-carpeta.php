<?php
    //sleep(10);
    if (isset($_POST)){
        //Crear carpeta fisica
        mkdir("../data/".$_POST["carpeta-actual"]."/".$_POST["carpeta"]);
        //Crear archivo csv vacio
        $archivo=fopen("../data/".$_POST["carpeta-actual"]."/".$_POST["carpeta"].".csv","w");
        fclose($archivo);
        //../data/home/ProyectosdePOO.csv

        //Agregar registro en el archivo csv que contendra la carpeta
        $archivo=fopen("../data/".$_POST["carpeta-actual"].".csv","a+");
        fwrite($archivo, 
                $_POST["carpeta"].
                ",folder,".
                $_POST["fecha-creacion"].",".
                $_POST["fecha-modificacion"].",".
                $_POST["usuario"].",".
                $_POST["tamanio"]."\n");
        //../data/home.csv
        fclose($archivo);
        $respuesta["codigoRespuesta"]=1; //Codigo inventado para que el cliente entienda que todo esta bien.
        $respuesta["mensajeRespuesta"]="La carpeta fue creada con éxito."; //Codigo inventado para que el cliente entienda que todo esta bien.
        echo json_encode($respuesta);
    }
?>