function verificarPorte (nome,peso){
    const porteClassificado = peso <= 10 ? 'Pequeno': 'Médio'
    console.log(`-----------`)
    console.log(`nome: ${nome}`)
    console.log(`peso: ${peso}`)
    console.log(`porte: ${porteClassificado}`)
    console.log(`-----------`)
}


verificarPorte ('pipoca',9)
verificarPorte ('Marley',10)
verificarPorte ('Xuxa',11)





