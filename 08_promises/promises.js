let promise = new Promise( (resolve, reject) => {
    // gerar um número aleatório (entre 0 e 1)
    let x = Math.random();

    // Regra: consideraremos que valores a partir 0.5 são aceitáveis.
    // Abaixo de 0.5, os valores são considerados inválidos.

    if( x >= 0.5) {
        resolve('Valor calculado: ' + x);
    } else {
        reject('Valor inválido! ' + x);
    }
} );

console.log('ANTES DO PROMISE:');
promise
    .then(s => s.toUpperCase())
    .then(s => s.substring(6))
    .then(s => console.log(s))
    // .then(s => console.log(s))
    .catch(erro => console.log(erro));

console.log('APOS O PROMISE');    
