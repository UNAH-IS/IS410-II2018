function validar(){
    /*
    Aplicar validacion sin necesidad de bootstrap.
    if(document.getElementById("txt-lastname").value == ""){
        document.getElementById("txt-lastname").style.borderColor = "red";
        document.getElementById("lastname-incorrecto").style.display = "block";
    }
    */
    validarCampoVacio("txt-firstname");
    validarCampoVacio("txt-lastname");
    validarCampoVacio("txt-email");
    validarCampoVacio("txt-password");
    validarCampoVacio("txt-birthday");
}

function validarCampoVacio(id){
    if(document.getElementById(id).value == ""){
        document.getElementById(id).classList.remove("is-valid");
        document.getElementById(id).classList.add("is-invalid");
    }else{
        document.getElementById(id).classList.remove("is-invalid");
        document.getElementById(id).classList.add("is-valid");
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