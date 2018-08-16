$("#btn-guardar").click(function(){
    var parametros= 
            "nombre="+$("#txt-nombre").val()+"&"+
            "apellido="+$("#txt-apellido").val()+"&"+
            "usuario="+$("#txt-usuario").val()+"&"+
            "password="+$("#txt-password").val()+"&"+
            "genero="+$("input[name='rbt-genero']:checked").val()+"&"+
            $('input[name="chk-gustos[]"]:checked').serialize();

    console.log("Gustos serializados: " + $('input[name="chk-gustos[]"]:checked').serialize());

    console.log(parametros);

    $.ajax({
        url:"ajax/guardar.php",
        method:"POST",
        data:parametros,
        dataType:"json",
        success:function(respuesta){
            if (respuesta.codigo==0)
                alert(respuesta.mensaje);
        },
        error:function(error){
            console.log(error);
        }
    });
});

$(document).ready(function(){
    $.ajax({
       url:"ajax/obtener-usuarios.php",
       dataType:"json",
       success: function(respuesta){
            console.log(respuesta);
       },
       error:function(error){
           console.log(error);
       }
    });
});