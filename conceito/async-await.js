
// async -assíncrono

async function exibirNomeFormatado(nome){
    return nome.toUpperCase()
}

//await - esperar

console.log(await exibirNomeFormatado(`Pipoca`))