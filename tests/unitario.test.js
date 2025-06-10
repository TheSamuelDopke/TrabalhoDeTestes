// Função que roda todos os testes

function validarFormulario({ nome, email, senha }) {
  const erros = {}

  if (!nome || nome.trim().length < 4) {
    erros.nome = 'Nome é obrigatório'
  }

  if (!email || !email.includes('@') || email.trim().length < 6) {
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
    const resultado = validarFormulario({nome: '', email: 'emailpadrao@gmail.com', senha: 'senhapadrao123'})

    if(typeof resultado !== 'object' || !resultado.nome) throw new Error('Aceitou dados inválidos, esperado erro')

  })

  testar("Formulário com email sem '@' retorna erro!", () => {
    const resultado = validarFormulario({nome: 'nomepadrao', email: 'emailpadraogmail.com', senha: 'senhapadrao123'})

    if(typeof resultado !== 'object' || !resultado.email) throw new Error('Aceitou dados inválidos, esperado erro')
  })

  testar("Formulário com email menor que 6 caracteres retorna erro!", () => {
    const resultado = validarFormulario({nome: 'nomepadrao', email: 's@.co', senha: 'senhapadrao123'})

    if(typeof resultado !== 'object' || !resultado.email) throw new Error('Aceitou dados inválidos, esperado erro')
  })

  testar("Formulário com senha menor que 6 caracteres retorna erro!", () => {
    const resultado = validarFormulario({nome: 'nomepadrao', email: 'emailpadraogmail.com', senha: '123'})

    if(typeof resultado !== 'object' || !resultado.email) throw new Error('Aceitou dados inválidos, esperado erro')
  })



}