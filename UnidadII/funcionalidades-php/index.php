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
        echo "Linea 1<br>\n";
        echo "Linea2<br>";

        function generarSelectList(){
            $opciones = array(); //Arreglo vacio
            $opciones[] = "Baleadas"; //0
            $opciones[] = "Cafe"; //1
            $opciones[] = "Sopa de mondongo"; //2
            $opciones[] = "Ella"; //3
            $opciones[4] = "Pollo con tajadas"; //4


            echo "Gustos: <select>";            
            for ($i=0;$i<sizeof($opciones);$i++)
                echo  "<option>$opciones[$i]</option>\n";
            echo "</select>";
        }

        generarSelectList();


        $arreglo = array(); //Arreglo vacio
        $arreglo[] = "Baleadas"; //0
        $arreglo[] = "Cafe"; //1
        $arreglo[] = 5; //2
        $arreglo[] = false; //3
        $arreglo[4] = array(); //4
        $arreglo["usuario"] = "jperez";
        $arreglo["password"] = "asd.456";

    ?>


</body>
</html>