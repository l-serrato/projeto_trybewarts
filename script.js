const finalCheck = document.getElementById('agreement');
const button = document.getElementById('submit-btn');

button.disabled = true;

function validateFormSubmit() {
  button.disabled = false;
}

finalCheck.addEventListener('click', validateFormSubmit);
