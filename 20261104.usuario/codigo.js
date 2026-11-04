let ct = document.getElementById("campotexto");
let c = document.getElementById("caja");
const b = document.querySelector("html");
const img = document.querySelector("#miImagen");

// Eventos
// Evento keyup para actualizar el contenido del div con el valor del input
ct.addEventListener("keyup", () => {
    c.innerHTML = ct.value;
});
// Evento mouseover para mostrar una alerta
ct.addEventListener("mouseover", () => {
    alert("Mouseover");
});
// Evento mousemove para mostrar las coordenadas del ratón
b.addEventListener("mousemove", (event) => {
    c.innerHTML = event.clientX + "px, " + event.clientY + "px";
});
// Evento keyup para mover la imagen con las flechas del teclado
b.addEventListener("keyup", (event) => {
    if (event.key === "ArrowRight") {
        img.style.left = (parseInt(img.style.left) || 0) + 10 + "px";
    }else if (event.key === "ArrowLeft") {
        img.style.left = (parseInt(img.style.left) || 0) - 10 + "px";
    }else if (event.key === "ArrowUp") {
        img.style.top = (parseInt(img.style.top) || 0) - 10 + "px";
    }else if (event.key === "ArrowDown") {
        img.style.top = (parseInt(img.style.top) || 0) + 10 + "px";
    }
});