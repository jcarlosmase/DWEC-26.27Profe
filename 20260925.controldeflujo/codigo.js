//Codigo
var cosa = 3;
console.log(cosa++); // 3 y después incrementa a 4
cosa = 3;
console.log(++cosa); // incrementa a 4 y muestra 4

//Ejemplo de bucles
function howMany(selectObject) {
    let numberSelected = 0;
    for (let i = 0; i < selectObject.options.length; i++) {
        if (selectObject.options[i].selected) {
        numberSelected++;
        }
    }
    return numberSelected;
}

let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
        alert(
            "Número de opciones seleccionadas: " +
            howMany(document.selectForm.musicTypes), //document.getEle,entById("musicTypes")
        );
});