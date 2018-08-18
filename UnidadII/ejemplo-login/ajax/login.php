<?php
    $archivo = fopen("../data/usuarios.json","r");
    while(($linea=fgets($archivo))){
        $registro = json_decode($linea,true);
        if ($registro["usuario"]==$_POST["usuario"]
            && $registro["password"]==$_POST["password"]){
                echo '{"codigo":0,"mensaje":"Usuario logueado con exito"}';
                fclose($archivo);
                exit();
        }
    }
    
    echo '{"codigo":1,"mensaje":"Credenciales invalidas"}';
?>