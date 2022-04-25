const inputs = document.querySelectorAll('.input')
const mensagemObrigatorio = document.querySelectorAll('.campo-obrigatorio')
const formulario = document.querySelector('.form')

function campoPreenchido(input, obrigatorio){
    mensagemObrigatorio[obrigatorio].classList.remove('nao-preenchido')
    input.classList.remove('nao-preenchido')
    input.classList.add('preenchido')
}

function campoNaoPreenchido(input, obrigatorio){
    input.classList.remove('preenchido')
    input.classList.add('nao-preenchido')
    mensagemObrigatorio[obrigatorio].classList.add('nao-preenchido')
}

inputs.forEach((input, obrigatorio) => {
    input.addEventListener('change', (evento) => {
        if (evento.target.value !== '') {
            campoPreenchido(input, obrigatorio)
        }else {
            campoNaoPreenchido(input, obrigatorio)
        }
    })
})

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()

    if (evento.target.nome.value === '') {
        campoNaoPreenchido(evento.target.nome, 0)
    }if (evento.target.email.value === '') {
        campoNaoPreenchido(evento.target.email, 1)
    }if (evento.target.telefone.value === '') {
        campoNaoPreenchido(evento.target.telefone, 2)
    }
    if (evento.target.mensagem.value === '') {
        campoNaoPreenchido(evento.target.mensagem, 3)
    }
})