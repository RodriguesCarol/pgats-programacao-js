const textoFornecido = ('voce esta aprendendo javascriptooooll com Samuel Lucas')
const vogais = ['a', 'e', 'i', 'o', 'u']
let contador = 0;

for (let i = 0; i < textoFornecido.length; i++) {
    if (vogais.includes(textoFornecido[i])) {
      contador++;  // Incrementa o contador quando encontra uma vogal
    }
  }
  
  console.log("Número de vogais:", contador);