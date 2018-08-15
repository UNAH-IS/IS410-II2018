$(document).ready(function(){
	console.log("El DOM ha sido cargado");
	console.log("Carpeta actual: " + $("#txt-carpeta-actual").val());
});

function detalleRegistro(){
	alert("Mostrar ventana modal con el detalle del registro, modifique esta funcion para que reciba todos los datos del registro como parametro y los muestre en una ventana modal. En este caso no necesita hacer peticion AJAX");
	$("#modal-detalle").modal("show");
}


$("#btn-crear-carpeta").click(function(){
	var parametros = "nombre="+$("#carpeta").val()+"&"+
					"fechaCreacion="+$("#fecha-creacion").val()+"&"+
					"fechaModificacion="+$("#fecha-modificacion").val()+"&"+
					"usuario="+$("#usuario").val()+"&"+
					"tamanio="+$("#tamanio").val()+"&"+
					"carpetaActual="+$("#txt-carpeta-actual").val()+"&"+
					"tipo=folder" ;
	console.log("Se enviara esta informacion al servidor: " + parametros);
	$("#btn-crear-carpeta").attr("disabled",true);

	$.ajax({
		url:"ajax/crear-carpeta.php",
		data:parametros,
		method:"POST",
		dataType:"json",
		success:function(respuesta){
			//console.log(respuesta);
			//return;
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

$("#btn-guardar-archivo").click(function(){
	var parametros= "nombre="+$("#nombre-archivo").val()+"&"+
					"fechaCreacion="+$("#fecha-creacion-archivo").val()+"&"+
					"fechaModificacion="+$("#fecha-modificacion-archivo").val()+"&"+
					"usuario="+$("#usuario-archivo").val()+"&"+
					"tamanio="+$("#tamanio-archivo").val()+"&"+
					"tipo=file&"+
					"carpetaActual="+$("#txt-carpeta-actual").val();
	console.log("Informacion enviada al servidor: "+parametros);
	$("#btn-guardar-archivo").attr("disabled",true);
	$.ajax({
		url:"ajax/guardar-archivo.php",
		data:parametros,
		dataType:"json",
		method:"POST",
		success:function(respuesta){
			if (respuesta.codigoRespuesta ==1){
				$("#btn-guardar-archivo").attr("disabled",false);
				$("#modal-archivo").modal("hide");
				$("#div-respuesta").html(respuesta.mensajeRespuesta);
				$("#div-respuesta").fadeIn(300);

				var cssIcono = "";
				var partesArchivo = $("#nombre-archivo").val().split(".");
				switch(partesArchivo[1]){
				case "docx":
					cssIcono = "far fa-file-word";
					break;
				case "pdf":
					cssIcono = "far fa-file-pdf";
					break;
				case "png":
					cssIcono = "far fa-file-image";
					break;
				case "jpg":
					cssIcono = "far fa-file-image";
					break;
				default:
					cssIcono = "far fa-file";
					break;
				} 
			

				$("#contenido-carpeta").append(
					`<tr>
						<td><a href="#"><i class="${cssIcono}"></i>${$("#nombre-archivo").val()}</a></td>
						<td>${$("#fecha-modificacion-archivo").val()}</td>
						<td>${$("#usuario-archivo").val()}</td>
						<td>${$("#tamanio-archivo").val()}</td>
					</tr>`
				);
			}
			console.log(respuesta);
		},
		error:function(error){
			console.log(error);
		}
	});
}); 
