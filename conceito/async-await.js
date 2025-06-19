
// async -assíncrono


async function exibirNomeFormatado(nome){
    return nome.toUpperCase()
}

//await - esperar , caso não especificado "await" irá retornar um promisse

console.log(await exibirNomeFormatado(`Pipoca`))

// exemplo de uso: em apis, onde temos que retornar o response após o a request executada.
// surti efeito sempre quando utilizados com os dois juntos async + await