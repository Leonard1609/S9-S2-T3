function registrarEstudiante() {
    // 1. Capturamos los elementos
    const nombreInput = document.getElementById("nombre");
    const correoInput = document.getElementById("correo");
    const telefonoInput = document.getElementById("telefono");
    const cursoInput = document.getElementById("curso");
    const lista = document.getElementById("listaEstudiantes");

    // 2. Obtenemos los valores
    const nombre = nombreInput.value.trim();
    const correo = correoInput.value.trim();
    const telefono = telefonoInput.value.trim();
    const curso = cursoInput.value;

    // --- VALIDACIÓN DE TELÉFONO (9 dígitos) ---
    const regexTelefono = /^[0-9]{9}$/;

    if (!nombre || !correo || !telefono) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    if (!regexTelefono.test(telefono)) {
        alert("El teléfono debe tener exactamente 9 números.");
        return;
    }

    // 3. Crear el elemento de la lista (li)
    const li = document.createElement("li");
    
    // Contenedor para el texto
    const info = document.createElement("span");
    info.innerHTML = `<strong>${nombre}</strong> - ${curso} <br> <small>Email: ${correo} | Tel: ${telefono}</small>`;
    li.appendChild(info);

    // --- BOTÓN ACTUALIZAR ---
    const btnActualizar = document.createElement("button");
    btnActualizar.textContent = "Editar";
    btnActualizar.className = "btn-edit";
    btnActualizar.onclick = function() {
        let nuevoNombre = prompt("Editar nombre:", nombre);
        if (nuevoNombre) {
            info.innerHTML = `<strong>${nuevoNombre}</strong> - ${curso} <br> <small>Email: ${correo} | Tel: ${telefono}</small>`;
        }
    };

    // --- BOTÓN BORRAR ---
    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Borrar";
    btnBorrar.className = "btn-delete";
    btnBorrar.onclick = function() {
        li.remove();
    };

    // 4. Insertar botones y agregar a la lista
    li.appendChild(btnActualizar);
    li.appendChild(btnBorrar);
    lista.appendChild(li);

    // 5. Limpiar el formulario
    document.getElementById("registroForm").reset();
}