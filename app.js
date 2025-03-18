let amigos = []; // Array para almacenar los nombres

// Función para agregar amigos
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    document.getElementById("amigo").value = "";
    actualizarLista();
}

// Función para actualizar la lista de amigos en la pantalla
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debe agregar al menos un amigo antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> El amigo secreto es: <strong>${amigoSecreto}</strong> </li>`;
}
