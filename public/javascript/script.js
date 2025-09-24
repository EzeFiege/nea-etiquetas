document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("openModal");
    const span = document.getElementsByClassName("close")[0];
    const form = document.getElementById("formulario");

    if (btn) {
        btn.onclick = function () {
            if (modal) modal.style.display = "block";
        }
    }

    if (span) {
        span.onclick = function () {
            if (modal) modal.style.display = "none";
        }
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            if (modal) modal.style.display = "none";
        }
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            if (modal) modal.style.display = "none";
        }
    });

    if (form) {
        form.onsubmit = function (event) {
            event.preventDefault();

            const numeroRemito = document.getElementById('numeroRemito').value;
            const fecha = document.getElementById('fecha').value;
            const cantidadBultos = parseInt(document.getElementById('cantidadBultos').value, 10);
            const imagenSeleccionada = document.getElementById('imagenSeleccionada').value;
            const observaciones = document.getElementById('observaciones').value;

            if (isNaN(cantidadBultos) || cantidadBultos < 1) {
                alert("La cantidad de bultos debe ser un número válido mayor que 0.");
                return;
            }

            const etiquetasDiv = document.getElementById('etiquetas');
            if (etiquetasDiv) {
                etiquetasDiv.innerHTML = '';

                for (let i = 1; i <= cantidadBultos; i++) {
                    const etiqueta = document.createElement('div');
                    etiqueta.className = 'etiqueta';

                    const imagen = document.createElement('img');
                    imagen.src = `images/${imagenSeleccionada}`;
                    imagen.className = 'etiqueta-imagen';

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
            }

            if (modal) modal.style.display = "none";
        }
    }
});
