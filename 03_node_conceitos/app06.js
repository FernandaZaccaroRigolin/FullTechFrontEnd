let colecoes = require('./listas/listaDados'); // importando o módulo listaDados

// gerar um lista de cursos, a partir da lista original
let novosCursos = colecoes.cursos.map( (elemento, posicao) => {
    return {
        chave: posicao,
        curso: elemento.descricao,
        ativo: elemento.status ? 'Sim' : 'Não' 
    }
});

console.log(novosCursos);


