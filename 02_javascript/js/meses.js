// determinando o ano atual
let data = new Date();
let ano = data.getFullYear();

// definir uma lista de objetos contendo o mês e o número de dias deste mês.
let meses = [
    {mes: "Janeiro",   dias: 31},
    {mes: "Fevereiro", dias: (ano % 4 ==0) ? 29 : 28},
    {mes: "Março",     dias: 31},
    {mes: "Abril",     dias: 30},
    {mes: "Maio",      dias: 31},
    {mes: "Junho",     dias: 30},
    {mes: "Julho",     dias: 31},
    {mes: "Agosto",    dias: 31},
    {mes: "Setembro",  dias: 30},
    {mes: "Outubro",   dias: 31},
    {mes: "Novembro",  dias: 30},
    {mes: "Dezembro",  dias: 31}
];

// referenciando o eemento 'select' pelo id
let elementoMes = document.getElementById('mesPreferido');

// definindo uma função pra criar os elementos 'option' a serem adiocionados ao 'select'
function listarMeses() {
    for (let i = 0; i < meses.length; i++) {
        let option = document.createElement('option');  //elemento 'option' criado
        option.textContent = meses[i].mes;              //text do elemento criado
        option.setAttribute('value', meses[i].dias);    // atributo 'value' do elemento criado
        elementoMes.appendChild(option);
    }
}

listarMeses();


