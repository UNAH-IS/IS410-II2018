<?php
    session_start(); 
    if (!isset($_SESSION["usuario"]))
        header("Location: index.php");

    if ($_SESSION["tipoUsuario"]=="ADMIN")
?>