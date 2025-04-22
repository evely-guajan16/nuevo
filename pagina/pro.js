function calcularResultado() {
  const respuestasCorrectas = {
    p1: "b",
    p2: "b", 
    p3: "c", 
    p4: "a",
    p5: "b", 
    p6: "a", 
    p7: "a", 
    p8: "a",
    p9: "c", 
    p10: "b" 
  };

  let puntaje = 0;

  for (let i = 1; i <= 10; i++) {
    const respuesta = document.querySelector(`input[name="p${i}"]:checked`);
    if (respuesta && respuesta.value === respuestasCorrectas[`p${i}`]) {
      puntaje++;
    }
  }

  const nombre = document.getElementById("nombre").value;
  if (!nombre.trim()) {
    alert("Por favor, ingrese su nombre antes de enviar las respuestas.");
    return;
  }

  alert(`${nombre}, tu puntaje es: ${puntaje}/10`);
}
