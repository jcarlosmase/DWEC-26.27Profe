const form = document.getElementById('myForm');
console.log(form.action); // returns the action attribute
console.log(form.method); // returns the method attribute
console.log(form.elements);
var n = form.elements[0].value;
let boton = form.elements[3];
boton.addEventListener("click", () =>{
    var n = form.elements[0].value;
    alert("Hola + "+ n);
    var h = form.elements[1];
    var m = form.elements[2];
    if(h.checked){
        alert("eres un hombre")
    }else if(m.checked){
        alert("eres una mujer")
    }else{
        alert("No has indicado sexo");
    }
});

//form.reset();

//18/11/2026: Añadir botones de radio dinámicamente
let cNuevoSexo = document.getElementById("nuevoSexo");
let bNuevoSexo = document.getElementById("BaddSexo");
let cajaBR = document.getElementById("cajaBR");
bNuevoSexo.addEventListener("click", (event)=>{
    event.preventDefault();
    cajaBR.innerHTML += "<input name='sexo' type='radio' value='Otro'>" +
                         cNuevoSexo.value;
    form.elements[2].addEventListener("change", ()=>{
        alert("Has cambiado de sexo");
    });
    form.elements[1].addEventListener("change", ()=>{
        alert("Has cambiado de sexo");
    });
});
form.elements[2].addEventListener("change", ()=>{
    alert("Has cambiado de sexo");
});
form.elements[1].addEventListener("change", ()=>{
    alert("Has cambiado de sexo");
});
//CASILLAS DE VERIFICACIÓN: Comprobando que
//se ha marcado, por lo menos, una opción antes de enviar formulario
let Benviar = document.getElementById("Benviar");
Benviar.addEventListener("click", (accion)=>{
    accion.preventDefault(); //Retenemos el submit
    if (form.elements[6].checked ||
        form.elements[7].checked ||
        form.elements[8].checked)
       
       form.submit();
    else
        alert("Porfa, elige alguna afición");
});
