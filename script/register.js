const registerName = document.querySelector('[registerName]')
const registerEmail = document.querySelector('[registerEmail]')
const registerPassword = document.querySelector('[registerPassword]')
const registerSubmit = document.querySelector('[registerSubmit]')

const registerForm = document.querySelector('#registerForm')

registerSubmit.addEventListener('click', (e) => {
  //Para manter a validação nativa do html (required) ativa!
  if (!registerForm.reportValidity()) {
    e.preventDefault()
    return
  }
  e.preventDefault()

})

registerName.addEventListener('input', () => {
  const valorName = registerName.value.trim();
  if (valorName.length >= 4) {
    registerName.setCustomValidity('')
  } else {
    registerName.setCustomValidity('Digite pelo menos 4 caracteres')
  }
  registerName.reportValidity()
})

registerEmail.addEventListener('input', () => {
  const valorEmail = registerEmail.value.trim();
  if (valorEmail.length >= 6) {
    registerEmail.setCustomValidity('');
  } else {
    registerEmail.setCustomValidity('Seu email deve conter pelo menos 6 caracteres');
  }
  registerEmail.reportValidity();
});

registerEmail.addEventListener('focus', () => {
  //Valida o campo nome
  const valorName = registerName.value.trim();

  if (valorName.length < 4) {
    registerName.setCustomValidity('Digite pelo menos 4 caracteres');
  } else {
    registerName.setCustomValidity('');
  }
  registerName.reportValidity();
});

registerPassword.addEventListener('focus', () => {
  //Valida o campo nome
  const valorName = registerName.value.trim();

  if (valorName.length < 4) {
    registerName.setCustomValidity('Digite pelo menos 4 caracteres');
  } else {
    registerName.setCustomValidity('');
  }
  registerName.reportValidity();

  //Valida o campo email
  const valorEmail = registerEmail.value.trim();

  if (valorEmail.length < 6) {
    registerEmail.setCustomValidity('Seu email deve conter pelo menos 6 caracteres');
  } else {
    registerEmail.setCustomValidity('');
  }
  registerEmail.reportValidity();
});

//Título do Teste acima dos resultados
const tituloTeste = document.querySelector('[tituloTeste]')
const componentTest = document.querySelector('[componentTest]')
const unitTest = document.querySelector('[unitTest]')

componentTest.addEventListener('click', () => {
  tituloTeste.textContent = ''
  tituloTeste.style.fontSize = '24px'
  tituloTeste.textContent = 'Teste de Componente'
})

unitTest.addEventListener('click', () => {
  tituloTeste.textContent = ''
  tituloTeste.style.fontSize = '24px'
  tituloTeste.textContent += 'Teste Unitário'
})
