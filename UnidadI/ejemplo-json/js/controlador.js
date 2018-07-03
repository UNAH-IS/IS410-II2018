var persona = 
    {
        nombre:"Jaun",
        apellido:"Perez",
        fechaNacimiento:{
            dia:5,
            mes:"Enero",
            anio:2025
        }
    };

persona.genero = "Masculino"

console.log("Mes fecha de nacimiento: " + persona.fechaNacimiento.mes);
console.log("Nombre: " + persona.nombre);
console.log(persona);

