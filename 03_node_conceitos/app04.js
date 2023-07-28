let colecoes = require('./listas/listaDados'); // importando o módulo listaDados
let fn = require('./funcoes/callbacks');

console.log('Lista Original');
console.log(colecoes.nomes);


// aplicando na função buscar
// exemplo 1 - sublista de nomes que iniciam com a letra 'A'
console.log("lista de nomes iniciando com 'a': ");
let res1 =  fn.buscar(colecoes.nomes, item => item.startsWith('A'));
console.log(res1);


// exemplo 2 - sublista de nomes que contenham com a letra 'm'
console.log("lista de nomes contenham a letra 'm': ");
let res2 =  fn.buscar(colecoes.nomes, item => item.toUpperCase().includes('M'));
console.log(res2);