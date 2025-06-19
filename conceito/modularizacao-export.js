
/**
 Sintace CommonJs
 module.exports = {} / require ('')

ESM - Ecmascript Stadard Modules
 export {} / import
 
 
 
 */





const exibirListaBrinquedos = (brinquedo) => {
    const listaDeBrinquedos =['Bola','Raquete','Skate','Boneca','Carrinho']


    listaDeBrinquedos.forEach(brinquedo=>{
        
        console.log(brinquedo)
    })
    console.log ('Brinquedo entregue')




    }

    exibirListaBrinquedos()


    export{
        exibirListaBrinquedos
    }