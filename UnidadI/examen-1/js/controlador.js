/********INDEXED DB******** */
//Esta funcion abrira la base de datos en caso de existir. Si no existe la creará.
var db;

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
        db = solicitud.result;
        //Obtener los registros del objectstore de usuarios y mostrarlos en la consola.
        llenarUsuarios();
        llenarPosts();
    }

    //En caso de que no exista o necesite una actualizacion, luego de ejecutar esta funcion se abrirá la base de datos
    solicitud.onupgradeneeded = function(evento){
        console.log("No existia la base de datos, se creara");
        //El objeto db hace referencia a la base de datos facebook, necesitamos la referencia para crear un almacen de datos
        db = evento.target.result;
        db.createObjectStore("usuarios",{ keyPath:"codigo", autoIncrement: true});
        db.createObjectStore("posts",{ keyPath:"codigo", autoIncrement: true});
        //En esta funcion se deben crear los almacenes de objetos (Object Stores)
        //Object Store => Almacen de objetos
    }
}

abrirBD();

function llenarUsuarios(){
    var transaccion = db.transaction(["usuarios"], "readonly"); //readonly cuando sea solo para consultar informacion
    var objectStoreUsuarios = transaccion.objectStore("usuarios");
    //Un cursor es un componente que permite recorrer de uno en uno los objetos de un objectstore
    var cursor = objectStoreUsuarios.openCursor();
    cursor.onsuccess = function(evento){
        //Esta funcion se ejecutara por cada objeto en el objectstore
        if (evento.target.result){
            console.log(evento.target.result.value);
            if (document.getElementById("tabla-usuarios")!=null){
                document.getElementById("tabla-usuarios").innerHTML += 
                        "<tr><td>"+evento.target.result.value.firstname+
                        "</td><td>"+evento.target.result.value.email+"</td></tr>";          
            }else if (document.getElementById("slc-usuario")!=null){
                var nombre = evento.target.result.value.firstname + ' '+ evento.target.result.value.lastname;
                document.getElementById("slc-usuario").innerHTML += 
                            '<option value="'+ nombre +'">'+ nombre +'</option>';
            }
            evento.target.result.continue();
        }else{
            console.log("Se termino de leer el objectstore");
        }
    }
}


function llenarPosts(){
    document.getElementById("posts").innerHTML = "";
    var transaccion = db.transaction(["posts"], "readonly"); //readonly cuando sea solo para consultar informacion
    var objectStorePosts = transaccion.objectStore("posts");
    //Un cursor es un componente que permite recorrer de uno en uno los objetos de un objectstore
    var cursor = objectStorePosts.openCursor();
    cursor.onsuccess = function(evento){
        //Esta funcion se ejecutara por cada objeto en el objectstore
        if (evento.target.result){
            //console.log(evento.target.result.value);
            var post = evento.target.result.value;
            document.getElementById("posts").innerHTML += 
                    '<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">'+
                    '<div class="post"><img src="img/profile.jpg" class="rounded-circle img-thumbnail">'+
                    '<b>'+post.usuario+'</b><small class="text-muted">'+
                    post.fecha+'</small><hr>'+post.post+
                    '<br><button class="btn btn-danger" onclick="eliminarPost('+post.codigo+');"><i class="fas fa-trash-alt"></i></button></div></div>';
            evento.target.result.continue();
        }else{
            console.log("Se termino de leer el objectstore");
        }
    }
}



/********FIN INDEXED DB******** */


function guardar(){
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
        var transaccion = db.transaction(["usuarios"], "readwrite"); //readonly cuando sea solo para consultar informacion
        var objectStoreUsuarios = transaccion.objectStore("usuarios");
        var solicitud = objectStoreUsuarios.add(usuario);//Funcion para agregar un objeto al objectstore

        solicitud.onerror = function(evento){
            console.err("No se pudo insertar el registro");
        }

        solicitud.onsuccess = function(evento){
            console.log("El registro fue almacenado");
        }
    }
    else
        console.log("Hay campos vacios, no se creo el objeto usuario");
    
}

function guardarPost(){
    /*
    Aplicar validacion sin necesidad de bootstrap.
    if(document.getElementById("txt-lastname").value == ""){
        document.getElementById("txt-lastname").style.borderColor = "red";
        document.getElementById("lastname-incorrecto").style.display = "block";
    }
    */
    if (
        validarCampoVacio("slc-usuario") &&
        validarCampoVacio("txt-post") &&
        validarCampoVacio("txt-fecha")
    ){
        var post = {};
        post.usuario = document.getElementById("slc-usuario").value;
        post.post = document.getElementById("txt-post").value;
        post.fecha = document.getElementById("txt-fecha").value;
        console.log(post);
        var transaccion = db.transaction(["posts"], "readwrite"); //readonly cuando sea solo para consultar informacion
        var objectStorePosts = transaccion.objectStore("posts");
        var solicitud = objectStorePosts.add(post);//Funcion para agregar un objeto al objectstore

        solicitud.onerror = function(evento){
            console.err("No se pudo insertar el registro");
        }

        solicitud.onsuccess = function(evento){
            console.log("El registro fue almacenado");
            llenarPosts();
            $('#postModal').modal('hide');
        }
    }
    else
        console.log("Hay campos vacios, no se creo el objeto post");
    
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

function eliminarPost(codigoPost){
    console.log("Eliminar post con codigo: " + codigoPost);
    var solicitud = db.transaction(["posts"], "readwrite")
                    .objectStore("posts")
                    .delete(codigoPost);

    solicitud.onsuccess = function(evento){
        console.log("Se elimino el JSON con codigo: " + codigoPost);
        llenarPosts();
    }
}


//Para obtener un JSON get(codigo)
//Para actualizar es con put()