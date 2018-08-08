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

	$.ajax({
		url:"ajax/crear-carpeta.php",
		data:parametros,
		method:"POST",
		dataType:"json",
		success:function(respuesta){
			console.log(respuesta);
		}
	});
});