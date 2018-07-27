<?php
    /**
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     *                  OJO: Este archivo no se esta utilizando
     *                  porque se paso toda la logica al archivo formulario.php
     * 
     * 
     * 
     * 
     * 
     */


    //sleep(10);
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <?php
        /*echo "Este archivo recibió la informacion<br>";
        echo $_POST["txt-nombre"]."<br>";
        echo $_POST["txt-apellido"]."<br>";
        echo $_POST["txt-usuario"]."<br>";
        echo $_POST["txt-password"]."<br>";
        echo $_POST["rbt-genero"]."<br>";
        
        var_dump($_POST["chk-gustos"]); //Esto es con fines de depuracion
        */
        if (isset($_POST["rbt-genero"])){
            $archivo = fopen("usuarios.csv","a+"); //r: read-lectura, w: write-escritura, a+: append-anexos

            $gustos = "";
            for($i=0;$i<sizeof($_POST["chk-gustos"]);$i++){
                $gustos .=  $_POST["chk-gustos"][$i] ."|"; 
            }
            fwrite($archivo, 
                    $_POST["txt-nombre"].";".
                    $_POST["txt-apellido"].";".
                    $_POST["txt-usuario"].";".
                    $_POST["txt-password"].";".
                    $_POST["rbt-genero"].";".
                    $gustos."\n"
            );   
            
            fclose($archivo);
            echo "Se guardo la información<br>";
        }else{
            echo "No se pudo guardar, debe seleccionar el genero";
        }


        //Leer el archivo.
        $archivo = fopen("usuarios.csv","r");
        echo "<table>".
            "<tr><th>Nombre</th>
            <th>Apellido</th>
            <th>Usuario</th>
            <th>Contraseña</th>
            <th>Genero</th>
            <th>Gustos</th>
            </tr>";
        while(($linea = fgets($archivo))){ //Lee una linea.
            $partes = explode(";", $linea); //$partes es un arreglo
            echo "<tr>
                    <td>$partes[0]</td>
                    <td>$partes[1]</td>
                    <td>$partes[2]</td>
                    <td>$partes[3]</td>
                    <td>$partes[4]</td>
                    <td>$partes[5]</td>
                </tr>";
            ///echo "<br>Linea: ".$linea;
        }
        echo "</table>";

        fclose($archivo);

    
    ?>
    
</body>
</html>

