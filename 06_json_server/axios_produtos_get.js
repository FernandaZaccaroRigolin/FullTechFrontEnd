let axios = require('axios');

let lista = [];
//console.log('antes da execução');
axios.get('http://localhost:3000/produtos')
    .then(resposta => {
        lista = resposta.data;
        console.log(lista);
        //console.log('durante a execução');

    });
//console.log('depois da execução');
