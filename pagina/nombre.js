
const nombreInput = document.getElementById("nombre").value.trim();
if (nombreInput) {
  localStorage.setItem("nombreEstudiante", nombreInput);
}
function calcularResultado() {
    const respuestasCorrectas = {
      p1: "b",
      p2: "a",
      p3: "b",
      p4: "b",
      p5: "a",
      p6: "a",
      p7: "b",
      p8: "b",
      p9: "a",
      p10: "a",
    };
  
    let puntos = 0;
  
    for (let pregunta in respuestasCorrectas) {
      const opciones = document.getElementsByName(pregunta);
      for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked && opciones[i].value === respuestasCorrectas[pregunta]) {
          puntos++;
        }
      }
    }
  
    // Guardamos los puntos de esta página
    localStorage.setItem('resultadoPag5', puntos);
  
    // Mostramos el resultado en pantalla
    mostrarResultadoFinal(puntos);
  }
  
  function mostrarResultadoFinal(puntos) {
   
    const totalPreguntas = 10;
    const porcentaje = (puntos / totalPreguntas) * 100;
  
    let mensaje = "";
  
    if (porcentaje >= 90) {
      mensaje = "¡Excelente rendimiento! 😃";
    } else if (porcentaje >= 70) {
      mensaje = "Buen trabajo, tu rendimiento ha sido bueno. 👍";
    } else if (porcentaje >= 50) {
      mensaje = "Tu rendimiento es estable, puedes mejorar. 😊";
    } else {
      mensaje = "Necesitas reforzar el tema. ¡Sigue practicando! 💪";
    }
  
    // Creamos contenedores para mostrar resultados si no existen
    if (!document.getElementById("resultadoFinal")) {
      const contenedor = document.createElement("div");
      contenedor.id = "resultadoFinal";
      contenedor.innerHTML = `
        <h2 id="saludoFinal"></h2>
        <p id="resumenFinal"></p>
        <p id="mensajeRendimiento"></p>
      `;
      document.body.appendChild(contenedor);
    }
  
    document.getElementById("saludoFinal").textContent = `Hola`;
    document.getElementById("resumenFinal").textContent = `Tuviste un total de ${puntos} de ${totalPreguntas} respuestas correctas.`;
    document.getElementById("mensajeRendimiento").textContent = mensaje;
  
    document.getElementById("resultadoFinal").style.display = "block";
  }
  