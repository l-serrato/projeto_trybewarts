const finalCheck = document.getElementById('agreement');
const button = document.getElementById('submit-btn');

button.disabled = true;

finalCheck.addEventListener('click', validateFormSubmit)

function validateFormSubmit() {
    button.disabled = false;
  } 