$(document).ready(function(){
	console.log("El DOM ha sido cargado");
	console.log("Carpeta actual: " + $("#txt-carpeta-actual").val());
});

function detalleRegistro(){
	alert("Mostrar ventana modal con el detalle del registro, modifique esta funcion para que reciba todos los datos del registro como parametro y los muestre en una ventana modal. En este caso no necesita hacer peticion AJAX");
	$("#modal-detalle").modal("show");
}


$("#btn-crear-carpeta").click(function(){
	var parametros = "carpeta="+$("#carpeta").val()+"&"+
					"fecha-creacion="+$("#fecha-creacion").val()+"&"+
					"fecha-modificacion="+$("#fecha-modificacion").val()+"&"+
					"usuario="+$("#usuario").val()+"&"+
					"tamanio="+$("#tamanio").val()+"&"+
					"carpeta-actual="+$("#txt-carpeta-actual").val();
	console.log("Se enviara esta informacion al servidor: " + parametros);
	$("#btn-crear-carpeta").attr("disabled",true);

	$.ajax({
		url:"ajax/crear-carpeta.php",
		data:parametros,
		method:"POST",
		dataType:"json",
		success:function(respuesta){
			$("#btn-crear-carpeta").attr("disabled",false);
			console.log(respuesta);
			if (respuesta.codigoRespuesta == 1){
				$('#modal-carpeta').modal('hide');
				$("#div-respuesta").html(respuesta.mensajeRespuesta);
				$("#div-respuesta").fadeIn(300);

				$("#contenido-carpeta").append(
					`<tr>
						<td><a href="index.php?carpeta=${$("#txt-carpeta-actual").val()}/${$("#carpeta").val()}"><i class="fas fa-folder-open"></i>${$("#carpeta").val()}</a></td>
						<td>${$("#fecha-modificacion").val()}</td>
						<td>${$("#usuario").val()}</td>
						<td>${$("#tamanio").val()}</td>
					</tr>`
				);
              }	
			}
		});
});