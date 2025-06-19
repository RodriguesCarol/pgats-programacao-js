console.log ("Aula inicial JS")
console.error ("Falha na execução")
console.warn ("Atenção")
console.table([{
    nome: 'Samuel',
    turma: '02',
    disciplina: 'Prog JS '

},
{
    nome: 'Carol',
    turma: '02',
    disciplina: 'Prog JS '

}]
)

/**Constante e Variáveis
 * 
*/

// const - para informações que nunca mudam
// var ou let - para informações que podem mudar


// informações de um dog que não mudam

const nome = 'Loki'
const raca = 'SRD / vira lara'
const sexo = 'Macho'
const cor = 'Caramelo'
const dataDeNasciemento = '01/01/2020'
const porte ='M'

// Missing initializer in const declaration = constante não atribuida com valo ex: const porte

// informações que mudam

let idade = 5
let peso = 10.5
let vacinado = true
let castrado = false
let tamanho = 'M'



/**
 * Tipos de Dados em Portugol - cadeia, inteiro, real,logico,vetor,matriz
 * funcoes -leia e escreva
 * 
 * em JavaScript
 * cadeia- String
 * iteiro/real - Number
 * logico - Boolean
 * vetor/matriz - Array
 * 
 * undefined - declara a variavel sem atribuir valor
 * null - valor q atribui propositalmente o valor é nulo
 * 
 * Bigint = Number para números extremamente grandes
 * Symbol = identificador único
 * 
 * 
 * Strings
 * 
 * declarar com: aspas simples, aspas duplas e com crase.
 * 'Turma' - single quote
 * "Turma" - double quote
 * `Turma`- Templates strings.
 * 
 * 
 * necessário o espaço para concatenar
 * \n => para quebrar linha
 * 
 * 
 * 
 */
const turma ="02"
let data = "05 de Abril"

// exemplo de concatenação de Strings
console.log("Aula 03 da Turma" + turma) 
console.log("Aula 03 da Turma "+ turma+ " No sabádo dia 05")

// exemplo de interpolação de Strings
console.log ( `Aula 03 turma ${turma} no Sabádo ${data}`)  

// exemplo de tamanho de caracteres
console.log(turma.length)


const nomesDeAlunos = "andré fabian luis amanda"
const nomesDeAlunosSplit = nomesDeAlunos.split(" ")
console.log (nomesDeAlunosSplit)
// split funciona como  um vetor sempre com separação por vigula


console.log(nomesDeAlunos.toLowerCase())// minuscula
console.log(nomesDeAlunos.toUpperCase())// maiuscula

console.log(nomesDeAlunos.includes("Dennys"))
// procura exatamente a string que esta procurando.

// Chai - biblioteca de asserções
console.log(nomesDeAlunos.replaceAll('a','i'))
// substituir o a pelo i
const conceitosLogica= "       espaço        "
console.log(conceitosLogica.trim())
// o trim serve para remover os espaços do início ou fim da frase
let dataParaContar = "05 de Abril"
console.log(dataParaContar.substring(0,2))
const cpf = "30170561801"
console.log(cpf.slice(0,3))

//slice e substrings são iguais servem para exibir apenas as posições citadas.
