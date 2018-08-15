$("#btn-guardar").click(function(){
    var parametros= 
            "nombre="+$("#txt-nombre").val()+"&"+
            "apellido="+$("#txt-apellido").val()+"&"+
            "usuario="+$("#txt-usuario").val()+"&"+
            "password="+$("#txt-password").val()+"&"+
            "genero="+$("input[name='rbt-genero']:checked").val()+"&"+
            $('input[name="chk-gustos[]"]:checked').serialize();

    console.log(parametros);

    $.ajax({
        url:"ajax/guardar.php",
        method:"POST",
        data:parametros,
        dataType:"json",
        success:function(respuesta){
            console.log(respuesta);
        }
    });
});