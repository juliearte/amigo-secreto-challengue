// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Selección de elementos HTML
const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

// Función para agregar amigos
function agregarAmigo() {
    const amigo = inputAmigo.value.trim(); // Obtener el valor del campo y quitar espacios extra

    // Validar si el campo está vacío
    if (amigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Si el valor es válido, agregar al arreglo
    listaAmigos.push(amigo);

    // Limpiar el campo de entrada
    inputAmigo.value = "";

    // Actualizar la lista en la interfaz
    mostrarAmigos();
}

// Función para mostrar los amigos en la lista
function mostrarAmigos() {
    // Limpiar la lista HTML antes de agregar los nuevos elementos
    ulListaAmigos.innerHTML = "";

    // Recorrer el arreglo y agregar cada amigo como un <li>
    for (let i = 0; i < listaAmigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = listaAmigos[i];
        ulListaAmigos.appendChild(li);
    }
}

// Función para sortear amigos
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Necesitas al menos dos amigos para hacer un sorteo.");
        return;
    }

    // Crear una copia aleatoria de la lista de amigos para hacer el sorteo
    const amigosSorteados = [...listaAmigos];
    const resultados = [];

    // Barajar la lista de amigos
    for (let i = amigosSorteados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigosSorteados[i], amigosSorteados[j]] = [amigosSorteados[j], amigosSorteados[i]]; // Intercambio
    }

    // Asignar a cada amigo un compañero para el sorteo
    for (let i = 0; i < listaAmigos.length; i++) {
        resultados.push(`${listaAmigos[i]} -> ${amigosSorteados[i]}`);
    }

    // Mostrar los resultados del sorteo
    ulResultado.innerHTML = ""; // Limpiar resultados anteriores
    resultados.forEach(result => {
        const li = document.createElement("li");
        li.textContent = result;
        ulResultado.appendChild(li);
    });
}