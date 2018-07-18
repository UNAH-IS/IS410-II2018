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
        $nombre = "Juan";
        echo "Hola $nombre desde PHP<br>"; 
        /*
        La siguiente linea es equivalente a la anterior:
        echo "Hola ".$nombre." desde PHP<br>";
        */
    ?>
    <script>
        var nombre = "Pedro";
        document.write("Hola "+nombre+" desde JS");
    </script>
</body>
</html>