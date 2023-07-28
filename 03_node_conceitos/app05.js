let colecoes = require('./listas/listaDados'); // importando o módulo listaDados

console.log('Lista Original:');
console.log(colecoes.nomes);

// obtendo dados de entrada: partes do nome para a realização do filtro
let input = process.argv[2];

// obtendo a lista filtrada pelo dados fornecido pelo usuário
let lista = colecoes.nomes.filter(item => item.toUpperCase().includes(input.toUpperCase()));

console.log('Lista filtrada:');
console.log(lista);

// obtendo a lista de cursos marcados cursos ativos (status = true)
let cursosAtivos = colecoes.cursos.filter(c => c.status == true );
console.log('Lista de cursos ativos:');
console.log(cursosAtivos);
