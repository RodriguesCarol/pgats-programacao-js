
function listaSemStrings(lista) {
  return lista.filter(item => typeof item === 'number');
}

const lista = [45, 'Carol', 12, 'abc', 3, 'teste', 4.5, 'a', 'ç', false, true]
const resultado = listaSemStrings(lista)

console.log("Lista de inteiros e strings:", lista);
console.log("Nova lista sem as strings:", resultado);


