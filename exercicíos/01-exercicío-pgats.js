/**
 Gerador de tags de identificador
*/




const nome = "doguinho"
let idade = 3
let peso = 15
let raca = 'vira-lata'
const adotado = true
let racaFormatada = raca.charAt(0).toUpperCase()+ raca.slice(1).toLowerCase()

console.log("Nome: " + nome.toUpperCase())
console.log("Raça: " + racaFormatada)
console.log("Peso: " + peso)


export{
    racaFormatada
}


