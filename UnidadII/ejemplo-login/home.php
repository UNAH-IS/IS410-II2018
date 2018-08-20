<?php include("seguridad.php"); ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <h1>Bienvenido <?php echo $_SESSION["usuario"];?></h1>
    <a href="logout.php">Logout</a>
    <a href="registro.php">Registrar usuario</a>
</body>
</html>