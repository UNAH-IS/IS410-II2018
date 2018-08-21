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
        include("class/class-computadora.php");
        $c=new Computadora("ASUS","XX","Rojo","3","5","4k");
        //echo "el modelo de computadora es: ".$c->getModelo();
        echo $c;
    ?>
</body>
</html>