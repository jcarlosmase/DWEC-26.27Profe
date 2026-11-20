//Validación de un formulario de empleados
// de una empresa con los siguientes elementos:
// - DNI
// - Nombre
// - Apellidos
// - Edad
// - Fecha de nacimiento
// - Tipo de empleado: Directivo, encargado u operario
// - Departamento/s al que pertenece
//REGLAS DE VALIDACIÓN
// 1. DNI Correcto
// 2. Algún valor > 3 para nombre y apellidos sin contar blancos
// 3. Edad entre 18 y 65
// 4. Fecha de nacimiento correcta en formado dd/mm/aaaa
// 5. Que se haya marcado alguna opción en tipo de empleado y departamento

//Recojo el formulario
let form = document.forms[0];
form.addEventListener("submit", (event)=>{
    event.preventDefault(); //retengo el submit
    let cajaErrores = document.getElementById("errores");
    let hayErrores = false;

    //compruebo cosas
    if(!compruebaDNI(form.elements["dni"].value)){
        cajaErrores.innerHTML += "- El DNI introducido es incorrecto <br />";
        hayErrores = true;
    }
    if(...){
        cajaErrores.innerHTML += "- El Nombre introducido debe tener mas de 3 caracteres <br />";
        hayErrores = true;
    }
    //envio el formulario
    if(!hayErrores)
        form.submit();
});

function compruebaDNI(DNI){
    return false;
}