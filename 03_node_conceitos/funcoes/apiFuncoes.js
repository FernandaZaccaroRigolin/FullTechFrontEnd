// função que recebe dois parametros numericos e retorna sua soma
function calcularSoma(valor1, valor2) {
    if(typeof(valor1) != 'number' || typeof(valor2) != 'number'){
        throw new Error('Os parâmetros devem ser numéricos');
    }
    return valor1 + valor2;
}

exports.somar = calcularSoma;