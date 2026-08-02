# Conectar un ejercicio HTML con el portal DSD I

Incluye este script antes de `</body>`:

```html
<script src="https://dsd-i-intensivtraining.ramon-reyes.workers.dev/dsd-connector.js"></script>
```

Cuando la alumna presione el botón final del ejercicio, envía el resultado:

```html
<script>
async function enviarResultado() {
  await DSDTraining.submit({
    exercise: "Nombre del ejercicio",
    score: 8,
    total: 10,
    answers: { pregunta1: "respuesta de la alumna" },
    duration_seconds: 720
  });
  alert("Ergebnis wurde gespeichert.");
}
</script>
```

El HTML debe abrirse desde el portal. El portal agrega automáticamente la sesión de la alumna y el identificador del material. No se debe escribir el nombre ni el curso dentro del HTML externo.
