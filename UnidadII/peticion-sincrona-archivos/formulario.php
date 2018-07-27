<?php
        if (isset($_POST["btn-enviar"])){
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
        }
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
    <form action="formulario.php" method="POST">
        <input value="Jose" name="txt-nombre" type="text" placeholder="Nombre" ><br>
        <input value="Perez" name="txt-apellido" type="text" placeholder="Apellido" ><br>
        <input value="jperez" name="txt-usuario" type="text" placeholder="Usuario" ><br>
        <input value="asd.456" name="txt-password" type="password" placeholder="Password" ><br>
        Genero: <br>
        <label><input type="radio" name="rbt-genero" value="F">Femenino</label>
        <label><input type="radio" name="rbt-genero" value="M">Masculino</label><br>
        Gustos: <br>
        <label><input type="checkbox" value="Baleadas" name="chk-gustos[]">Baleadas</label><br>
        <label><input type="checkbox" value="Sopa de mondongo" name="chk-gustos[]">Sopa de mondongo</label><br>
        <label><input type="checkbox" value="Queso" name="chk-gustos[]">Queso</label><br>
        <label><input type="checkbox" value="Curiles" name="chk-gustos[]">Curiles</label><br>
        <label><input type="checkbox" value="Ella" name="chk-gustos[]">Ella</label><br>

        <input name="btn-enviar" type="submit" value="Registrar usuario">
    </form>
    <hr>
    <?php 
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

<!--
Metodo de envio de informacion GET: Envia la informacion mediante la url
Formato URLEncoded: 
URL?parametro1=valor1&parametro2=valor2&...&parametroN=valorN

http://localhost/poo/IS410-II2018/UnidadII/peticion-sincrona/formulario.html
?
txt-usuario=jperez&
txt-password=asd.456&
btn-enviar=Enviar+informacion+al+servidor


-->