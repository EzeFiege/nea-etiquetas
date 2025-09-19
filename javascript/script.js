document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los datos del formulario
    const numeroRemito = document.getElementById('numeroRemito').value;
    const fecha = document.getElementById('fecha').value;
    const cantidadBultos = parseInt(document.getElementById('cantidadBultos').value, 10);
    const imagenSeleccionada = document.getElementById('imagenSeleccionada').value;
    const observaciones = document.getElementById('observaciones').value;

    // Validar la cantidad de bultos
    if (isNaN(cantidadBultos) || cantidadBultos < 1) {
        // En lugar de alert, usa un mensaje en la interfaz
        // showMessage("La cantidad de bultos debe ser un número válido mayor que 0.");
        return;
    }

    // Limpiar etiquetas anteriores
    const etiquetasDiv = document.getElementById('etiquetas');
    etiquetasDiv.innerHTML = '';

    // Generar etiquetas
    for (let i = 1; i <= cantidadBultos; i++) {
        const etiqueta = document.createElement('div');
        etiqueta.className = 'etiqueta';
        
        // Crear elemento de imagen
        const imagen = document.createElement('img');
        imagen.src = `images/${imagenSeleccionada}`;
        imagen.className = 'etiqueta-imagen';
        
        // Crear el contenedor de información y su contenido
        const infoDiv = document.createElement('div');
        infoDiv.className = 'etiqueta-info';
        infoDiv.innerHTML = `
            <div><strong>Número de Remito:</strong></div>
            <div>${numeroRemito}</div>
            <div><strong>Fecha:</strong></div>
            <div>${fecha}</div>
            <div><strong>Bulto:</strong></div>
            <div>${i} de ${cantidadBultos}</div>
            <div><strong>Observaciones:</strong></div>
            <div class="observaciones-texto">${observaciones}</div>
        `;
        
        etiqueta.prepend(imagen);
        etiqueta.appendChild(infoDiv);
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