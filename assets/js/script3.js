const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
    if (!this.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    }
    this.classList.add('was-validated');
          // Si es válido, mostrar alerta de éxito
    if (this.checkValidity()) {
        event.preventDefault(); // prevenir doble envío
        alert('¡Gracias! Tu mensaje ha sido enviado exitosamente.');
        this.reset();
        this.classList.remove('was-validated');
        }
    }, false);
}

  // Test de seguridad interactivo
const testForm = document.getElementById('testForm');
if (testForm) {
    testForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const q1 = document.getElementById('q1').value;
    const q2 = document.getElementById('q2').value;
    let score = 0;
    if (q1 === 'b') score++;
    if (q2 === 'b') score++;
    const resultDiv = document.getElementById('testResult');
    resultDiv.innerHTML = `<div class="alert alert-info">Obtuviste ${score} de 2 respuestas correctas.</div>`;
    });
}