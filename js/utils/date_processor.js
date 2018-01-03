/*
* Arquivo de ferramentas de manipulação de datas
*/

/*
* Verifica se a data está "vazia"
* @receives date {DATETIME SQL}
* @returns booelan
*/
function isDateEmpty(date){
  return atividade.data_fim =='0000-00-00 00:00:00';
}

/*
* Formata a data para String no formato BR dd/mm/aaaa
* @receives date {DATETIME SQL}
* @returns dd/mm/aaaa {String}
*/
function formatDateToBrString(date){
  date = date.split(" ");
  date = date[0].split("-");
  return date[2]+"/"+date[1]+"/"+date[0];
}
