$("#btn-login").click(function(){
    $.ajax({
        url:"ajax/login.php",
        data:"usuario="+$("#usuario").val()+"&password="+$("#password").val(),
        method:"POST",
        dataType:"json",
        success:function(respuesta){
            console.log(respuesta);
            if (respuesta.codigo == 0)
                window.location = "home.php";  //Redirreccionar desde js
        },
        error:function(error){
            console.log(error);
        }
    });
});