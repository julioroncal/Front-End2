const inputNome = document.querySelector('#nome');
const inputSobrenome = document.querySelector('#sobrenome');
const submitButton = document.querySelector('input[type="submit"]');
const container = document.querySelector('.container');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const typedNome  = inputNome.value;
  const typedSobrenome = inputSobrenome.value;

  container.innerHTML = `
    <p>toUpperCase() - ${typedNome.toUpperCase()}</p>
    <p>trim() - ${typedNome.trim()}</p>
    <p>toLowerCase() ${typedNome.toLowerCase()}</p>
    <p>concat() - ${typedNome.concat(' ', typedSobrenome)}</p>
    <p>replace() - ${typedNome.toLowerCase().replaceAll('a', '@').replaceAll('e', '3')}</p>
  `
});