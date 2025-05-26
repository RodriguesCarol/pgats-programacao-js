function geradorDeTagsDeIdentificacao(nome) {
    return nome.toUpperCase()

}


function verificarSePodeSerAdotado(idadeDog, porte) {
    const podeSerAdotado = idadeDog == 1 && porte === 'M' ? true : false
    return podeSerAdotado
}




function calcularConsumoDeRacao(nome, idade, peso) {
    const gramasPorDia = peso * 300
    return gramasPorDia

}




let atividade
function decidirTipoDeAtividadePorPorte(porte) {
    switch (porte) {

        case 'pequeno':

            atividade = `brincar dentro de casa`

            break

        case 'médio':

            atividade = `caminhada no quarteirão`

            break

        case 'grande':

            atividade = `correr no parque`

            break

        default:

            atividade = `porte inválido`

    }

    return atividade

}



async function buscarDadoAsync() {
    const nomeDog = 'Pipoca'
    return nomeDog

}




export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}