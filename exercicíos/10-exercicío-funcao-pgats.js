import { DOGS,CATS} from './10-exercicío-dados-pgats.js'

const exibirMensagem = (nome) => {
  nome.forEach(nome => {
    console.log(`Entregando petisco para: ${nome}`)
  })
}

exibirMensagem (DOGS)
exibirMensagem (CATS)