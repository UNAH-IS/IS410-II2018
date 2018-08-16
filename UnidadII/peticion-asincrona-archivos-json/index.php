<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <form id="formulario">
        <input value="Jose" id="txt-nombre" name="txt-nombre" type="text" placeholder="Nombre" ><br>
        <input value="Perez" id="txt-apellido" name="txt-apellido" type="text" placeholder="Apellido" ><br>
        <input value="jperez" id="txt-usuario" name="txt-usuario" type="text" placeholder="Usuario" ><br>
        <input value="asd.456" id="txt-password" name="txt-password" type="password" placeholder="Password" ><br>
        Genero: <br>
        <label><input type="radio" name="rbt-genero" value="F">Femenino</label>
        <label><input type="radio" name="rbt-genero" value="M">Masculino</label><br>
        Gustos: <br>
        <label><input type="checkbox" value="Baleadas" name="chk-gustos[]">Baleadas</label><br>
        <label><input type="checkbox" value="Sopa de mondongo" name="chk-gustos[]">Sopa de mondongo</label><br>
        <label><input type="checkbox" value="Queso" name="chk-gustos[]">Queso</label><br>
        <label><input type="checkbox" value="Curiles" name="chk-gustos[]">Curiles</label><br>
        <label><input type="checkbox" value="Ella" name="chk-gustos[]">Ella</label><br>

        <input name="btn-enviar" type="button" value="Registrar usuario" id="btn-guardar">
    </form>
    <hr>
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Usuario</th>
                <th>Genero</th>
            </tr>
        </thead>
        <tbody id="contenido-usuarios">
        </tbody>
    </table>

    <?php 
        //Leer el archivo.
       /* $archivo = fopen("usuarios.csv","r");
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
        */
        ?>

    <script src="js/jquery.min.js"></script>
    <script src="js/controlador.js"></script>
</body>
</html>