document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los datos del formulario
    const numeroRemito = document.getElementById('numeroRemito').value;
    const fecha = document.getElementById('fecha').value;
    const cantidadBultos = parseInt(document.getElementById('cantidadBultos').value, 10);
    const observaciones = document.getElementById('observaciones').value;

    // Validar la cantidad de bultos
    if (isNaN(cantidadBultos) || cantidadBultos < 1) {
        alert("La cantidad de bultos debe ser un número válido mayor que 0.");
        return;
    }

    // Limpiar etiquetas anteriores
    const etiquetasDiv = document.getElementById('etiquetas');
    etiquetasDiv.innerHTML = '';

    // Generar etiquetas
    for (let i = 1; i <= cantidadBultos; i++) {
        const etiqueta = document.createElement('div');
        etiqueta.className = 'etiqueta'; // Añade la clase para aplicar el estilo
        
        // Crear contenido para la etiqueta
        const contenido = `
            <div>Número de Remito: ${numeroRemito}</div>
            <div>Fecha: ${fecha}</div>
            <div>Bulto ${i} de ${cantidadBultos}</div>
            <div>Observaciones: ${observaciones}</div>
        `;
        
        etiqueta.innerHTML = contenido;
        etiquetasDiv.appendChild(etiqueta);
    }

    // Ocultar el modal después de procesar
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
});

// Mostrar el modal
document.getElementById('openModal').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'block';
});

// Ocultar el modal cuando se hace clic en la "X" o fuera del modal
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'none';
});
window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = 'none';
    }
});