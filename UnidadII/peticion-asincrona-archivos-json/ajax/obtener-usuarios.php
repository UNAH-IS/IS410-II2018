<?php
    $archivo = fopen("../data/usuarios.json","r");
    $linea="";
    $usuarios=array();
    while(($linea = fgets($archivo))){
        $registro = json_decode($linea,true);
        $usuarios[] = $registro;
    }
    //var_dump($usuarios);
    echo json_encode($usuarios);
?>