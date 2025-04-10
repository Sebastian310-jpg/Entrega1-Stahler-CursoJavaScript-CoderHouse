const alumnos = [];

let idAlumno = 1;

const ingresarAlumno = () => {
    let nombreAlumno = prompt("Ingresa el nombre:");
    let apellidoAlumno = prompt("Ingresa el apellido:");
    let edadAlumno = Number(prompt("Ingresa la edad:"));
    let calificacionAlumno = Number(prompt("Ingresa la calificación:"));
    let estatusAlumno;

    if (validarDatos(nombreAlumno, apellidoAlumno, edadAlumno, calificacionAlumno)){
        console.log("Datos Invalidos.");
        return;
    }

    if (calificacionAlumno > 5){
        estatusAlumno = "APROBADO";
    } else {
        estatusAlumno = "DESAPROBADO";
    }

    const alumno = {
        id: idAlumno++,
        nombre: nombreAlumno,
        apellido: apellidoAlumno,
        edad: edadAlumno,
        calificacion: calificacionAlumno,
        estatus: estatusAlumno,
    }

    alumnos.push(alumno);
    console.log(alumnos);

    // mostrarAlumnos();
}

const validarDatos = (nombre, apellido, edad, calificacion) => {
    if (nombre === "" || apellido === "" || isNaN(edad) || isNaN(calificacion)){
        return true;
    }

    return false;
}

const mostrarAlumnos = () => {

    console.log(`Cantidad de Alumnos: ${alumnos.length}`);
    console.log(`--------------------------`);

    for (let i = 0; i < alumnos.length; i++){
        console.log(`Nombre: ${alumnos[i].nombre} ${alumnos[i].apellido}`);
        console.log(`Edad: ${alumnos[i].edad}`);
        console.log(`Calificación: ${alumnos[i].calificacion}`);
        console.log(`Estatus: ${alumnos[i].estatus}`);
        console.log(`--------------------------`);
    }
}

const calcularPromedioCalificacion = () => {
    let total = 0;

    for (let i = 0; i < alumnos.length; i++){
        total += alumnos[i].calificacion;
    }

    let promedio = total / alumnos.length;

    console.log(`El Promedio de Calificación es: ${promedio.toFixed(1)}`);
}

const mostrarAprobados = () => {
    let alumnosAprobados = [];

    for (let i = 0; i < alumnos.length; i++){
        if (alumnos[i].estatus === "APROBADO"){
            alumnosAprobados.push(alumnos[i]);
        }
    }

    console.log("Alumnos Aprobados:");
    console.log(`--------------------------`);

    for (let i = 0; i < alumnosAprobados.length; i++){
        console.log(`Nombre: ${alumnosAprobados[i].nombre} ${alumnosAprobados[i].apellido}`);
        console.log(`Edad: ${alumnosAprobados[i].edad}`);
        console.log(`Calificación: ${alumnosAprobados[i].calificacion}`);
        console.log(`--------------------------`);
    }
}

const mostrarDesaprobados = () => {
    let alumnosDesaprobados = [];

    for (let i = 0; i < alumnos.length; i++){
        if (alumnos[i].estatus === "DESAPROBADO"){
            alumnosDesaprobados.push(alumnos[i]);
        }
    }

    console.log("Alumnos Desaprobados:");
    console.log(`--------------------------`);

    for (let i = 0; i < alumnosDesaprobados.length; i++){
        console.log(`Nombre: ${alumnosDesaprobados[i].nombre} ${alumnosDesaprobados[i].apellido}`);
        console.log(`Edad: ${alumnosDesaprobados[i].edad}`);
        console.log(`Calificación: ${alumnosDesaprobados[i].calificacion}`);
        console.log(`--------------------------`);
    }
}