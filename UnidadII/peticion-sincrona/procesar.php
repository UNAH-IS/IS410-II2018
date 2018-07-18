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
        echo "Este archivo recibió la informacion<br>";
        echo "Usuario ingresado: ".$_GET["txt-usuario"]."<br>";
        echo "Password ingresado: ".$_GET["txt-password"]."<br>";
    ?>    
</body>
</html>
