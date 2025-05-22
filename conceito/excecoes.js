/**
 * 
 * 
 
tentar {
 //conexao com banco (exemplo)
 } pegar (erro/excecao){
   // salvar a execução em algum lugar ou somente exibir
 }
 

 catch
 */

try {
console.log (`Tentando alimentar o pet...`)
throw new Error(`Pet não quis ser alimentado`)

// tentar conectar no banco
//executar uma query
} catch (excecao) {
    console.log(excecao.name)
    console.log(excecao.message)
    console.log(excecao)

    // capturar a exceção, tratar o erro- exibir, salvar, melhorar descrição
} finally {
    // sempre executa, como see fosse uma ação final
    console.log (`SEMPRE SEREI EXECUTADO`)
    
    //fechar a conexeção com o banco ( ao menos para garantir que foi fechado)
}