// obtendo a referencia ao botao de comandos
let botao = document.getElementById("btnEnviar");

// // definindo o evento click para o botão
// function executarEvento() {
//     alert('Processando evento click');
// }
// botao.addEventListener('click', executarEvento);

botao.addEventListener('click', function () {
    //obtendo as informações do campos de entrada
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = document.getElementById('data').value;
    var arrData = data.split('-');
    var dataFormatada = arrData[2] + '/' + arrData[1] + '/' + arrData[0];    

    // let dias = document.getElementById('mesPreferido').value;
    var select = document.getElementById("mesPreferido");
    var dias = select.value;
    var mes = select.options[select.selectedIndex].text;    

    let mensagem = 
        `Nome: ${nome}<br/>Email: ${email}<br/>Data Nasc.: ${dataFormatada}<br/>Disponível por ${dias} dias no mês de ${mes}.`;

    document.getElementById('resposta').innerHTML = mensagem;
});

