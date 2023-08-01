let moment = require('moment');

//definindo localizações
//moment.locale('pt-BR');
//moment.locale('ja-JP');
moment.locale('es-ES');

const now = moment();
console.log(now);
console.log(now.format("DD/MM/YYYY"));
console.log(now.format("DD/MM/YYYY' - dddd - (MMMM)"));