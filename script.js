function registrarEstudiante() {
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const curso = document.getElementById("curso").value;
    const lista = document.getElementById("listaEstudiantes");

    const regexTelefono = /^[0-9]{9}$/;

    if (nombre && correo && telefono) {
        if (!regexTelefono.test(telefono)) {
            alert("El teléfono debe tener 9 números.");
            return;
        }

        const li = document.createElement("li");

        // Estructura de la tarjeta: Cuadrito + Info + Botones
        li.innerHTML = `
            <div class="avatar"><span>FOTO</span></div>
            <div class="info-estudiante">
                <strong>${nombre}</strong><br>
                <small>${curso} | 📱 ${telefono}</small>
            </div>
            <div class="acciones">
                <button class="btn-edit" onclick="editarRegistro(this, '${nombre}')">Editar</button>
                <button class="btn-delete" onclick="this.parentElement.parentElement.remove()">Borrar</button>
            </div>
        `;

        lista.appendChild(li);
        document.getElementById("registroForm").reset();
    } else {
        alert("Completa todos los campos.");
    }
}

// Función aparte para editar (más limpia)
function editarRegistro(boton, nombreAntiguo) {
    let nuevoNombre = prompt("Editar nombre:", nombreAntiguo);
    if (nuevoNombre) {
        const infoDiv = boton.parentElement.previousElementSibling;
        const smallInfo = infoDiv.querySelector("small").innerHTML;
        infoDiv.innerHTML = `<strong>${nuevoNombre}</strong><br><small>${smallInfo}</small>`;
    }
}

function toggleDarkMode() {
    // Le ponemos o quitamos la clase "dark-mode" al body
    document.body.classList.toggle("dark-mode");
    
    // Cambiamos el texto del botón para que se vea pro
    const btn = document.getElementById("btnDarkMode");
    if (document.body.classList.contains("dark-mode")) {
        btn.textContent = "☀️ Modo Claro";
    } else {
        btn.textContent = "🌙 Modo Oscuro";
    }
}