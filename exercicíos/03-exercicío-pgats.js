const nomeDog = 'Pipoca'
const idadeDog = 1
const porte = 'M'
const idadeMinima=2






function verificarAdocao (idadeDog,porte){
    const podeSerAdotado = idadeDog >= idadeMinima || porte === 'P' ? 'SIM':'NÃO'
    console.log (podeSerAdotado)
}

verificarAdocao (1,'M')
verificarAdocao (2,'M')
verificarAdocao (2,'P')
verificarAdocao (1,'P')



/**
 * const nome = 'Ada'

const idade = 0

const porte = 'P'

 

const idadeMinima = 2

 

const adocao = idade >= idadeMinima 

                ? 'sim'

                : porte === 'P' 

                ? 'sim'

                : 'não'

 

const adocaov2 = idade >= idadeMinima || porte === 'P'

 

console.log(adocao)

console.log(adocaov2)

 

function verificarSePodeSerAdotado(idade, porte) {

  const adocao = idade >= idadeMinima 

                ? 'sim'

                : porte === 'P' 

                ? 'sim'

                : 'não'

 

  // return adocao

  console.log(adocao)

}

 

// idade 1 + porte M = nao

// idade 2 + porte M = sim, pela idade

// idade 2 + porte P = sim, pela idade

// idade 1 + porte P = sim, pelo porte

 

verificarSePodeSerAdotado(1, 'M')

verificarSePodeSerAdotado(2, 'M')

verificarSePodeSerAdotado(2, 'P')

verificarSePodeSerAdotado(1, 'P')
 */