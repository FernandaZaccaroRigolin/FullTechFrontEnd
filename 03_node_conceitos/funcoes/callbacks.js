exports.executar = function(callback) {
  
    return callback('Impacta - Capgemini'); 
} 

exports.buscar = function(lista, callback){
    let sublista = [];
    // vamos fazer uma iteração sobre os elementos da lista
    for (let index = 0; index < lista.length; index++) {
        if(callback(lista[index])){
            sublista.push(lista[index]);
        }
        
    }
    return sublista;
}

