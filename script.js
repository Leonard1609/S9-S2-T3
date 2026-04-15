function registrarEstudiante() {
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const curso = document.getElementById("curso").value;

    if (nombre && correo && telefono) {
        alert(`¡Registro Exitoso!\nEstudiante: ${nombre}\nCurso: ${curso}`);
        // Aquí podrías limpiar el formulario después del registro
        document.getElementById("registroForm").reset();
    } else {
        alert("Por favor, completa todos los campos requeridos.");
    }
}