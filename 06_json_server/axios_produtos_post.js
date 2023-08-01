let axios = require('axios');

// obtendo os dados do produto com descrição
let descricao = process.argv[2];
let preco = parseFloat(process.argv[3]);

// definindo o objeto a ser incluído
let produto = {"descricao":descricao, "preco": preco}

axios.post('http://localhost:3000/produtos', produto)
    .then(resposta =>{
        console.log(resposta.data);
        console.log('Produto incluído com sucesso')
    });