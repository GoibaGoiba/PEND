const espacos = document.querySelectorAll(".espaco");
const pecas = document.querySelectorAll(".pecaX, .pecaO");

pecas.forEach(peca => {
    peca.addEventListener("dragstart", function (event) {
        event.dataTransfer.setData("text/plain", peca.id);
    });
});

espacos.forEach(espaco => {
    espaco.addEventListener("dragover", function (event) {
        event.preventDefault();
    });

    espaco.addEventListener("drop", function (event) {
        event.preventDefault();

        const id = event.dataTransfer.getData("text/plain");
        const elemento = document.getElementById(id);

        if (elemento && espaco.children.length === 0) {
            espaco.appendChild(elemento);
        }
    });
});
