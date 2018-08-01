<?php
    //sleep(10);
    if ($_GET["respuesta"]=='html'){
        echo "<b>Usuario: " . $_GET["usuario"] . ", password: " . $_GET["password"]."</b>";
    }
    else if ($_GET["respuesta"]=='json'){
        $respuesta["usuario"] = $_GET["usuario"];
        $respuesta["password"] =  $_GET["password"];

        echo json_encode($respuesta); //Convierte un arreglo en json
    }
        
?>    
