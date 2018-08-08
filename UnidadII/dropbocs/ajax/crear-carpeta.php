<?php
    if (isset($_POST)){
        echo json_encode($_POST);
        mkdir("../data/".$_POST["carpeta-actual"]."/".$_POST["carpeta"]);
    }
?>