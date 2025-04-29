// Función para mostrar el formulario seleccionado
function mostrarFormulario(id) {
    document.querySelectorAll('.formulario').forEach(form => {
        form.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
}

// Función para mostrar detalles de una ventana y calcular materiales
function mostrarDetalles(ventana) {
    // Datos de cada ventana (esto puede ser dinámico dependiendo de tus necesidades)
    let datosVentana = {
        "A": {
            img: "imagenes/ventana_a.png", // Agrega aquí la URL de la imagen de la ventana
            aluminio1: (1.5 + 1.5) + (0.94 + 0.94), // Ejemplo de cálculo
            aluminio2: (0.65 + 0.65) + (0.65 + 0.65),
            aluminio3: 0.65 + 0.65,
            aluminio4: 0.8 + 0.8
        },
        "B": {
            img: "imagenes/ventana_b.jpeg", // Agrega aquí la URL de la imagen de la ventana
            aluminio1: (1.5 + 1.5) + (0.94 + 0.94), 
            aluminio2: (0.65 + 0.65) + (0.65 + 0.65),
            aluminio3: 0.65 + 0.65,
            aluminio4: 0.8 + 0.8
        },
        "C": {
            img: "imagenes/ventana_c.jpeg", // Agrega aquí la URL de la imagen de la ventana
            aluminio1: (1.5 + 1.5) + (0.94 + 0.94), 
            aluminio2: (0.65 + 0.65) + (0.65 + 0.65),
            aluminio3: 0.65 + 0.65,
            aluminio4: 0.8 + 0.8
        }
    };

    // Mostrar los detalles y cálculos
    let detalles = datosVentana[ventana];
    document.getElementById('imagenVentana').src = detalles.img;
    document.getElementById('aluminio1').textContent = detalles.aluminio1.toFixed(2);
    document.getElementById('aluminio2').textContent = detalles.aluminio2.toFixed(2);
    document.getElementById('aluminio3').textContent = detalles.aluminio3.toFixed(2);
    document.getElementById('aluminio4').textContent = detalles.aluminio4.toFixed(2);

    // Mostrar la sección de detalles
    document.getElementById('detallesVentana').style.display = 'block';
}
