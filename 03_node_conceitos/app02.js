let fn = require('./funcoes/apiFuncoes'); // importando o módulo listaDados

let soma1 = fn.somar(3, 5);
console.log(`Soma : ${soma1}`);

let maior = fn.buscarMaior(3, 5);
console.log(`Maior valor : ${maior}`);

maior = fn.buscarMaior(3);
console.log(`Maior valor : ${maior}`);

let juros = fn.calcularJuros(1200, 12);
console.log(`Valor com juros calculados: ${juros}`);

let tamanho = fn.calcularTamanho('texto cujo tamanho deve ser calculado');
console.log(`Tamanho do texto : ${tamanho}`);

tamanho = fn.calcularTamanho(['1', '2', '5']);
console.log(`Tamanho do texto : ${tamanho}`);



