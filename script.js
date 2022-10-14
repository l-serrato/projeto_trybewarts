/* eslint-disable prefer-arrow-callback */
/* eslint-disable editorconfig/editorconfig */
const BUTTON_FORM = document.querySelector('button');
const EMAIL_FORM = document.querySelector('#email');
const PASSWORD_FORM = document.querySelector('#password');

BUTTON_FORM.addEventListener('click', function validandoForm() {
  BUTTON_FORM.preventDefault();
  if (EMAIL_FORM === 'tryber@teste.com' && PASSWORD_FORM === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});