 function validarYmostrar(event) {
      
        event.preventDefault();
    
        var nombre = document.getElementById("nombre").value;
        var contraseña = document.getElementById("contraseña").value;
    
     
        if (!nombre || !contraseña) {
            alert("Por favor ingrese los datos.");
            return;
        }

        if (contraseña === "123456:)") {
            alert("¡Bienvenido, " + nombre + "!");
            
            window.location.href = 'SIMULADOR.html';
        } else {
            alert("La contraseña es incorrecta, por lo que no estás autorizado. Pulsa el botón regresar para volver a la página principal.");
        }
    }