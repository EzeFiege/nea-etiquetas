        // Obtener elementos del modal
        const modal = document.getElementById("myModal");
        const btn = document.getElementById("openModal");
        const span = document.getElementsByClassName("close")[0];
        const form = document.getElementById("formulario");

        // Mostrar el modal
        btn.onclick = function() {
            modal.style.display = "block";
        }

        // Ocultar el modal cuando se hace clic en la "X"
        span.onclick = function() {
            modal.style.display = "none";
        }

        // Ocultar el modal cuando se hace clic fuera del modal
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        // Manejar el envío del formulario
        form.onsubmit = function(event) {
            event.preventDefault(); // Evitar el envío del formulario

            // Obtener los datos del formulario
            const numeroRemito = document.getElementById('numeroRemito').value;
            const fecha = document.getElementById('fecha').value;
            const cantidadBultos = parseInt(document.getElementById('cantidadBultos').value, 10);
            const imagenSeleccionada = document.getElementById('imagenSeleccionada').value;
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
                etiqueta.className = 'etiqueta';
                
                const imagen = document.createElement('img');
                imagen.src = `images/${imagenSeleccionada}`; // Ruta de la imagen seleccionada
                imagen.className = 'etiqueta-imagen'; // Clase CSS para la imagen
                
                etiqueta.innerHTML = `
                    <div class="etiqueta-info">
                        <strong>Número de Remito:</strong> ${numeroRemito}<br>
                        <strong>Fecha:</strong> ${fecha}<br>
                        <strong>Bulto:</strong> ${i} de ${cantidadBultos}<br>
                        <strong>Observaciones:</strong> ${observaciones}
                    </div>
                `;
                etiqueta.prepend(imagen);
                etiquetasDiv.appendChild(etiqueta);
            }
            // Ocultar el modal después de procesar
            modal.style.display = "none";
        }

        // Cerrar el modal al presionar la tecla Escape
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                modal.style.display = "none";
            }
        });