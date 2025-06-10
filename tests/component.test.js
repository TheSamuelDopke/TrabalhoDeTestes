function runComponentTests() {
    testar("Campo de nome recebe valor padrão", () => {
        const inputNome = document.querySelector('[registerName]')
        inputNome.value = 'valorpadraoteste'

        if (inputNome.value !== 'valorpadraoteste') {
            throw new Error('Não pegou o valor padrão')
        }
        inputNome.value = ''
    })

    testar("Campo de nome recebe caracteres numéricos", () => {
        const inputNome = document.querySelector('[registerName]')
        inputNome.value = '1424151'

        if (inputNome.value !== '1424151') {
            throw new Error('Não pegou caracter numérico');
        }
        inputNome.value = ''
    })

    testar("Campo de nome aceita valores especiais", () =>{
        const inputNome = document.querySelector('[registerName]')
        inputNome.value = '$%%%#'
        if (inputNome.value !== '$%%%#') {
            throw new Error('Não aceitou caracteres especiais!')
        }
        inputNome.value = ''
    })

    testar("Campo de nome está vazio inicialmente", () => {
        const inputNome = document.querySelector('[registerName]')
        if (inputNome.value !== '') {
            throw new Error('Campo de nome não está vazio inicialmente')
        }
    })

    testar("Campo de nome aceita espaços", () => {
        const inputNome = document.querySelector('[registerName]')
        inputNome.value = 'Ana Maria';
        if (inputNome.value !== 'Ana Maria') {
            throw new Error('Não aceitou espaços')
        }
        inputNome.value = ''
    })

    testar("Campo de email recebe valor padrão", () =>{
        const inputEmail = document.querySelector('[registerEmail]')
        inputEmail.value = 'emailpadrao@hotmail.com'
        if(inputEmail.value !== 'emailpadrao@hotmail.com'){
            throw new Error('Email não recebeu valor padrão')
        }
        inputEmail.value = ''
    })

    testar("Campo de email recebe caracteres numéricos", () => {
        const inputEmail = document.querySelector('[registerEmail]')
        inputEmail.value = '1234151@hotmail.com'
        if(inputEmail.value !== '1234151@hotmail.com'){
            throw new Error('Email não recebeu valor padrão')
        }
        inputEmail.value = ''
    })        

    testar("Campo de email está vazio inicialmente", () => {
        const inputEmail = document.querySelector('[registerEmail]')
        if (inputEmail.value !== '') {
            throw new Error('Campo de email não está vazio inicialmente')
        }
    })

    testar("Campo de senha aceita valor padrão", () =>{
        const inputSenha = document.querySelector('[registerPassword]')
        inputSenha.value = '@SenhaDIFF998**01'
        if(inputSenha.value !== '@SenhaDIFF998**01'){
            throw new Error('Campo de senha não recebe valor padrão')
        }
        inputSenha.value = ''
    })

    testar("Campo de senha está vazio inicialmente", () => {
        const inputPassword = document.querySelector('[registerPassword]')
        if (inputPassword.value !== '') {
            throw new Error('Campo de senha não está vazio inicialmente')
        }
    })

    

}
