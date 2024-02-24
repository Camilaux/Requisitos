/*document.getElementById("button_registro").addEventListener("click",registro);

//declaro variables

var contenedor_registro = document.querySelector(".contenedor_login_registro");
var formulario_registro = document.querySelector(".formulario_registro");
var caja_trasera_register = document.querySelector(".caja_trasera-registro");


function registro() {
        contenedor_registro.style.display = "block"; // Muestra el contenedor de registro
        caja_trasera_register.style.display = "none"; // Oculta la caja trasera si es necesario
}*/

document.addEventListener('DOMContentLoaded', function() {
    // Obtén el botón de registro por su ID
    var botonRegistro = document.getElementById('button_registro');
    
    // Obtén el formulario de registro por su clase
    var formularioRegistro = document.querySelector('.formulario_registro');
    
    // Obtén la caja trasera de registro por su clase
    var cajaTraseraRegistro = document.querySelector('.caja_trasera-registro');
    
    // Define la función que se ejecutará cuando se haga clic en el botón de registro
    function mostrarRegistro() {
        // Verifica si los elementos existen para evitar errores
        if(formularioRegistro && cajaTraseraRegistro) {
            formularioRegistro.style.display = 'block'; // Muestra el formulario de registro
            cajaTraseraRegistro.style.display = 'none'; // Oculta la caja trasera
        }
    }
    
    // Añade el evento click al botón de registro
    botonRegistro.addEventListener('click', mostrarRegistro);
});














/*document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el botón por su ID
    var botonRegistrarse = document.getElementById('button-registrarse');

    // Función que se ejecutará al hacer clic en el botón
    botonRegistrarse.addEventListener('click', function() {
        // Aquí puedes agregar la lógica para ocultar otros contenedores
        // y mostrar solo el contenedor de login y registro
        // Por ejemplo:
        document.getElementById('contenedor_login-registro').style.display = 'block';
        // Suponiendo que tienes otros contenedores que quieras ocultar, los ocultarías así:
        //document.getElementById('contenedor_todo').style.display = 'none';
    });
});*/
