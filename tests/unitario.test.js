//Testes Unitários

function validarFormulario({ nome, email, senha }) {
  const erros = {}

  //Testa um conjunto de caracteres especiais que não devem estar presentes no nome
  const regexCaracteresProibidosNome = /[0-9!@#$%^&*()_=+\\[\]{}|\\;:'"<>,.?/~`]/;

  if (!nome || nome.trim().length < 4) {
    erros.nome = 'Nome é obrigatório'
  } else if (regexCaracteresProibidosNome.test(nome)) {
    erros.nome = 'Nome não pode conter números ou caracteres especiais.';
  }

  //Pega a posição do arroba e define as variaveis que vao ter o numero de caracteres antes e depois do arroba para seguir as regras do email atuais definidas por RFCs.
  const posicaoArroba = email.indexOf('@');
  let caracteresAntesArroba = 0;
  let caracteresDepoisArroba = 0;

  if (posicaoArroba !== -1) {
    caracteresAntesArroba = posicaoArroba;
    caracteresDepoisArroba = email.length - (posicaoArroba + 1);
  }


  if (!email || !email.includes('@') || email.trim().length < 6 || caracteresAntesArroba > 64 || caracteresDepoisArroba > 255) {
    erros.email = 'Email inválido'
  }

  if (!senha || senha.length < 6) {
    erros.senha = 'Senha deve ter no mínimo 6 caracteres'
  }

  //Retorna erros no código caso haja
  return Object.keys(erros).length ? erros : true
}

function runUnitTests() {

  testar("Formulário com dados válidos retorna true!", () => {
    const resultado = validarFormulario({ nome: 'Samuel Dopke', email: 'samuelouco@hotmail.com', senha: 'ernestocabeca332' })

    if (resultado !== true) throw new Error('Não aceitou dados válidos')
  });

  testar("Formulário com nome vazio retorna erro!", () => {
    const resultado = validarFormulario({ nome: '', email: 'emailpadrao@gmail.com', senha: 'senhapadrao123' })

    if (typeof resultado !== 'object' || !resultado.nome) throw new Error('Aceitou dados inválidos, esperado erro')
  })

  testar("Formulário com caracteres especiais retorna erro!", () => {
    const resultado = validarFormulario({ nome: ' 1 %%Arthur', email: 'emailpadrao@gmail.com', senha: 'senhapadrao123' })

    if (typeof resultado !== 'object' || !resultado.nome) throw new Error('Aceitou dados inválidos, esperado erro')
  })

  testar("Formulário com email sem '@' retorna erro!", () => {
    const resultado = validarFormulario({ nome: 'nomepadrao', email: 'emailpadraogmail.com', senha: 'senhapadrao123' })

    if (typeof resultado !== 'object' || !resultado.email) throw new Error('Aceitou dados inválidos, esperado erro')
  })

  testar("Formulário com email com mais de 64 caracteres antes do @ retorna erro", () => {
    const resultado = validarFormulario({ nome: 'nomepadrao', email: 'meuemailmuitograndecommaisdesessentaequatrocaractereslocalmentevaidarerro@dominio.com', senha: 'senhapadrao123' })

    if (typeof resultado !== 'object' || !resultado.email) throw new Error('Aceitou dados inválidos, esperado erro')
  })

  testar("Formulário com email com mais de 255 caracteres depois do @ retorna erro", () => {
    var texto = 'A'
    var parteLonga = texto.repeat(256)

    const resultado = validarFormulario({ nome: 'nomepadrao', email: `samuel@${parteLonga}`, senha: 'senhapadrao123' })

    if (typeof resultado !== 'object' || !resultado.email) throw new Error('Aceitou dados inválidos, esperado erro')
  })


  testar("Formulário com email menor que 6 caracteres retorna erro!", () => {
    const resultado = validarFormulario({ nome: 'nomepadrao', email: 's@.co', senha: 'senhapadrao123' })

    if (typeof resultado !== 'object' || !resultado.email) throw new Error('Aceitou dados inválidos, esperado erro')
  })

  testar("Formulário com senha menor que 6 caracteres retorna erro!", () => {
    const resultado = validarFormulario({ nome: 'nomepadrao', email: 'emailpadraogmail.com', senha: '123' })

    if (typeof resultado !== 'object' || !resultado.senha) throw new Error('Aceitou dados inválidos, esperado erro')
  })



}