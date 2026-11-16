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
form.elements[2].addEventListener("change", ()=>{
    alert("Has cambiado de sexo");
});
form.elements[1].addEventListener("change", ()=>{
    alert("Has cambiado de sexo");
});
//form.reset();