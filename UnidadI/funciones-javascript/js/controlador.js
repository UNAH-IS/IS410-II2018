/*function sumar(a, b){
    return a+b;
}*/

//Almacenar una funcion en una variable llamada sumar
var sumar = function(a,b){
    return a+b;
}


//Almacenar el resultado de la ejecucion de una funcion en la variable x
var x = sumar(4,5);
console.log(x);

var mostrarMensaje = function(){
    console.log("Hola Mundo");
}

function ejecutarFuncion(a){
    a();
}

//Aqui se esta enviando la funcion completa, en este punto NOOOOOOOOOOO se ejecuta.
ejecutarFuncion(mostrarMensaje);


//Esto es un error ya que le estaría enviando el resultado de la ejecución de una función
//ejecutarFuncion(mostrarMensaje());


//Enviar como parametro una nueva funcion, esta funcion es anonima porque no tiene nombre
ejecutarFuncion(function(){
    console.log("Esta es otra funcion");
});