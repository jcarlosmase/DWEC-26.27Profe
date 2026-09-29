/*
const arr = [3, 5, 7];
arr.foo = "hello";

for (const i in arr) {
  console.log(i);
}
// "0" "1" "2" "foo"

for (const i of arr) {
  console.log(i);
}
// Logs: 3 5 7
*/

//EJERCICIO

var datos = [
    {
        dni: "11111111A",
        nombre: "PEPE",
        apellidos: "LOPEZ PEREZ",
        telefono: "666666666",
        asignaturas : [
            {
                nombre: "DWEC",
                codigo: "1111"
            },
            {
                nombre: "DWES",
                codigo: "1122"
            }

        ]
    }
];

var profe = {
        dni: "22222222B",
        nombre: "LUIS",
        apellidos: "MARTINEZ GARCÍA",
        telefono: "666777777",
        asignaturas : [
            {
                nombre: "ENTORNOS",
                codigo: "1133"
            },
            {
                nombre: "LENGUAJE DE MARCAS",
                codigo: "1144"
            }

        ]
};

//Insertar al final de un array
datos.push(profe);

//EJERCICIO 1
//Realiza un listado completo en consola de todos los
//profesores junto con la asignatura que impartan

//EJERCICIO 2
//Dado un código de asignatura, mostrar el nombre y apellidos
//del profesor que la imparte
var codAsignatura = "1111";

for(let i = 0;i < datos.length;i++){

}

for(let i in datos){
    
}

//Interactuando con el usuario

/*
Crear un formulario para dar de alta profesores introduciendo el DNI nombre apellidos y teléfono
del mismo
*/
//Capturando elementos de formulario
var DNI = document.getElementById("DNI");
var Nombre = document.getElementById("nombre");
var Apellidos = document.getElementById("apellidos");
var Telefono = document.getElementById("telefono");
var btn1 = document.getElementById("boton1");
var btn2 = document.getElementById("boton2");
//Captura evento clic del boton 1
btn1.addEventListener("click", function(){
    var unProfe = {};
    unProfe.dni = DNI.value;
    unProfe.nombre = Nombre.value;
    unProfe.apellidos = Apellidos.value;
    unProfe.telefono = Telefono.value;
    unProfe.asignaturas = [];
    datos.push(unProfe);
});
btn2.addEventListener("click", function(){
    for(let i of datos){
        console.log(`${i.dni} ${i.nombre} ${i.apellidos} ${i.telefono}`);
        for(let j of i.asignaturas)
            console.log(`    ${j.codigo} ${j.nombre}`);
    }
});
/*
Más abajo añadir otro formulario para añadir asignaturas a un profesor
indicando código de la asignatura nombre de la asignatura y DNI del profesor que la imparte
*/
var DNI2 = document.getElementById("DNI2");
var codA = document.getElementById("codA");
var nombreA = document.getElementById("nombreA");
var btn3 = document.getElementById("boton3");
var btn4 = document.getElementById("boton4");
btn3.addEventListener("click", function(){
    for(let i of datos){
        if(i.dni == DNI2.value){
            var unaAsignatura = {};
            unaAsignatura.codigo = codA.value;
            unaAsignatura.nombre = nombreA.value;
            i.asignaturas.push(unaAsignatura);
        }
    }
});
btn4.addEventListener("click", function(){
    for(let i of datos){
        console.log(`${i.dni} ${i.nombre} ${i.apellidos} ${i.telefono}`);
        for(let j of i.asignaturas)
            console.log(`    ${j.codigo} ${j.nombre}`);
    }
});
/*
Añadir un tercer y último formulario donde introduciendo el código de la asignatura
me indique el profesor que imparte esa asignatura
*/
var DNI3 = document.getElementById("DNI3");
var btn5 = document.getElementById("boton5");
btn5.addEventListener("click", function(){
    for(let i of datos){
        if(i.dni == DNI3.value){
            for(let j of i.asignaturas)
                console.log(`${j.codigo} ${j.nombre}`);
            break;
        }
    }
});
/*
Posdata todos los datos que se muestran se mostrarán por consola
*/