fetch("https://api.github.com/repos/jcarlosmase/DWEC-26.27Profe/contents/")
    .then(response => response.json())
    .then(datos => {

        const contenedor = document.getElementById("carpetas");

        datos
            .filter(elemento => elemento.type === "dir")
            .forEach(carpeta => {

                const enlace = document.createElement("a");

                enlace.href = carpeta.name + "/";
                enlace.textContent = carpeta.name;

                const div = document.createElement("div");
                div.appendChild(enlace);

                contenedor.appendChild(div);
            });
    })
    .catch(error => {
        console.error("Error obteniendo las carpetas:", error);
    });