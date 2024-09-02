document.addEventListener("DOMContentLoaded", function(event) {
    var textos = ["Hola!, soy Romy", "Soy Programadora", "Soy Diseñadora UX/UI", "Soy Estudiante de Ciberseguridad"];
    var index = 0;
    var letra_actual = 0;
    var texto_actual = "";
    var velocidad = 100; 
  
    function escribirTexto() {
      if (letra_actual < textos[index].length) {
        texto_actual += textos[index].charAt(letra_actual);
        document.querySelector(".texto-maquina").textContent = texto_actual;
        letra_actual++;
        setTimeout(escribirTexto, velocidad);
      } else {
        setTimeout(borrarTexto, 2000); 
      }
    }
  
    function borrarTexto() {
      if (letra_actual >= 0) {
        texto_actual = textos[index].substring(0, letra_actual);
        document.querySelector(".texto-maquina").textContent = texto_actual;
        letra_actual--;
        setTimeout(borrarTexto, velocidad);
      } else {
        index = (index + 1) % textos.length;
        setTimeout(escribirTexto, 500); 
      }
    }
  
    escribirTexto();
  });


  //para el formulario de contacto //
  document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var asunto = document.getElementById('asunto').value;
    var mail = document.getElementById('mail').value;
    var mensaje = document.getElementById('mensaje').value;

    var cuerpoCorreo = "Nombre: " + nombre + "\n" +
                       "Correo electrónico: " + mail + "\n" +
                       "Mensaje:\n" + mensaje;

    var link = "mailto:gaiteromina@gmail.com" +
               "?subject=" + encodeURIComponent(asunto) +
               "&body=" + encodeURIComponent(cuerpoCorreo);


    window.location.href = link;
  });

  //seleccion de menu y scrolleo //
// Esperamos a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos los enlaces del menú
    var enlacesMenu = document.querySelectorAll('nav ul li a');

    // Iteramos sobre los enlaces del menú
    enlacesMenu.forEach(function(enlace) {
        // Añadimos un evento de clic a cada enlace
        enlace.addEventListener('click', function(event) {
            event.preventDefault(); // Evitamos el comportamiento por defecto del enlace

            // Obtenemos el valor del atributo href del enlace clicado
            var destino = this.getAttribute('href');

            // Obtenemos la posición vertical del div destino
            var posicionDestino = document.querySelector(destino).offsetTop;

            // Desplazamos suavemente la página hacia la posición del div destino
            window.scrollTo({
                top: posicionDestino,
                behavior: 'smooth'
            });
        });
    });
});

//modo oscuro//
// Función para cambiar entre modo claro y oscuro
function toggleModoOscuro() {
    document.body.classList.toggle("modo-oscuro");
}

// Escuchador de eventos para el interruptor del modo oscuro
document.getElementById("modo-oscuro-toggle").addEventListener("change", function() {
    toggleModoOscuro();
});



