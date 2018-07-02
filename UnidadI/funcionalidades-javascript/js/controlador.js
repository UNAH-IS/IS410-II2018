//Que podemos hacer con javascript:
//Hacer web dinamica
document.write("<ul>");
for(var i=0; i<5; i++){
    document.write("<li>Opcion " + i + "</li>");
}
document.write("</ul>");

/*for(var i=0; i<5; i++){
    alert("Tu computadora tiene virus!!!!!");
}*/

//Es posible acceder al DOM de un documento
console.log("El valor del input es: " + document.getElementById("txt-nombre").value);
alert("Se cambiara el valor del input");
document.getElementById("txt-nombre").value = "Juan";

//lower camelcase
//Gestionar eventos del usuario
function clickAqui(){
    document.getElementById("div-contenido").innerHTML =  "<b>Se hizo click sobre el boton, esta logica esta dentro de una funcion</b>";
    document.getElementById("txt-nombre").style.borderColor ="red";

    
}

//Hacer peticiones hacia el servidor de forma asincrona.
//Se verá en la segunda unidad.