const miBoton = document.getElementById("miBoton");
miBoton.addEventListener("click", function handleClick() {
    alert("¡Tu vives en el universo, y el universo vive en ti!");
});

const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});
function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
  }
  function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) {
      alert('Por favor ingrese un correo electrónico válido.');
    } else 
    emailInput = document.getElementById('email');
      emailInput.addEventListener("click"), function handleClick(){
      alert('Correo electrónico enviado correctamente.');
    }
  }