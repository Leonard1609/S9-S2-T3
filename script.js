function registrarEstudiante() {
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const curso = document.getElementById("curso").value;
    const lista = document.getElementById("listaEstudiantes");

    if (nombre && correo && telefono) {
        // Crear el elemento de la lista (li)
        const li = document.createElement("li");

        // Creamos un contenedor para el texto de los datos
        const info = document.createElement("span");
        info.innerHTML = `<strong>${nombre}</strong> - ${curso} | ${correo} | 📱 ${telefono}`;
        li.appendChild(info);

        // --- BOTÓN ACTUALIZAR ---
        const btnActualizar = document.createElement("button");
        btnActualizar.textContent = "Actualizar";
        btnActualizar.className = "btn-edit";
        btnActualizar.onclick = function() {
            let nuevoNombre = prompt("Nuevo nombre:", nombre);
            if (nuevoNombre) {
                info.innerHTML = `<strong>${nuevoNombre}</strong> - ${curso} | ${correo} | 📱 ${telefono}`;
            }
        };

        // --- BOTÓN BORRAR ---
        const btnBorrar = document.createElement("button");
        btnBorrar.textContent = "Borrar";
        btnBorrar.className = "btn-delete";
        btnBorrar.onclick = function() {
            li.remove();
        };

        // Agregar botones al li y el li a la lista
        li.appendChild(btnActualizar);
        li.appendChild(btnBorrar);
        lista.appendChild(li);

        // Limpiar el formulario
        document.getElementById("registroForm").reset();
    } else {
        alert("Por favor, completa todos los campos requeridos.");
    }
}