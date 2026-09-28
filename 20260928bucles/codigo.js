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


//EJERCICIO

var datos = [
    {
        nombre: "PEPE",
        apellidos: "LOPEZ PEREZ",
        telefono: "666666666",
        asignaturas: {
            nombre: "DWEC",
            codigo: "1111"
        }
    },
    {
        nombre: "MARIA",
        apellidos: "GARCIA GOMEZ",
        telefono: "677777777",
        asignaturas: {
            nombre: "DWES",
            codigo: "2222"
        }
    },
    {
        nombre: "JUAN",
        apellidos: "MARTINEZ RUIZ",
        telefono: "688888888",
        asignaturas: {
            nombre: "DIW",
            codigo: "3333"
        }
    },
    {
        nombre: "ANA",
        apellidos: "FERNANDEZ SANCHEZ",
        telefono: "699999999",
        asignaturas: {
            nombre: "DAW",
            codigo: "4444"
        }
    }
];

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
