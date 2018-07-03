/********INDEXED DB******** */
//Esta funcion abrira la base de datos en caso de existir. Si no existe la creará.
function abrirBD(){
    if (!("indexedDB" in window))
        console.err("Este navegador no soporta IndexedDB");
    else
        console.log("Este navegador si soporta indexedDB");


    var solicitud = window.indexedDB.open("facebook", 1);  //Parametros: nombre de la base de datos, version.

    //En caso de que ocurra un error
    solicitud.onerror = function(evento){
        console.log("Ocurrio un error");
    }

    //En caso de que pueda abrir la base de datos
    solicitud.onsuccess = function(evento){
        console.log("Se abrio la base de datos");
    }

    //En caso de que no exista o necesite una actualizacion, luego de ejecutar esta funcion se abrirá la base de datos
    solicitud.onupgradeneeded = function(evento){
        console.log("No existia la base de datos, se creara");
    }
}

abrirBD();

/********FIN INDEXED DB******** */


function validar(){
    /*
    Aplicar validacion sin necesidad de bootstrap.
    if(document.getElementById("txt-lastname").value == ""){
        document.getElementById("txt-lastname").style.borderColor = "red";
        document.getElementById("lastname-incorrecto").style.display = "block";
    }
    */
    if (
        validarCampoVacio("txt-firstname") &&
        validarCampoVacio("txt-lastname") &&
        validarCampoVacio("txt-email") &&
        validarCampoVacio("txt-password") &&
        validarCampoVacio("txt-birthday")
    ){
        var usuario = {};
        usuario.firstname = document.getElementById("txt-firstname").value;
        usuario.lastname = document.getElementById("txt-lastname").value;
        usuario.email = document.getElementById("txt-email").value;
        usuario.password = document.getElementById("txt-password").value;
        usuario.birthday = document.getElementById("txt-birthday").value;
        console.log(usuario);
    }
    else
        console.log("Hay campos vacios, no se creo el objeto usuario");
    
}

function validarCampoVacio(id){
    if(document.getElementById(id).value == ""){
        document.getElementById(id).classList.remove("is-valid");
        document.getElementById(id).classList.add("is-invalid");
        return false;
    }else{
        document.getElementById(id).classList.remove("is-invalid");
        document.getElementById(id).classList.add("is-valid");
        return true;
    }
}

function validarEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)){
        //console.log("Correo valido " + email); 
        document.getElementById("txt-email").classList.remove("is-invalid");
        document.getElementById("txt-email").classList.add("is-valid");
    }
    else{
        //console.log("Correo invalido " + email);
        document.getElementById("txt-email").classList.remove("is-valid");
        document.getElementById("txt-email").classList.add("is-invalid");
    }
}