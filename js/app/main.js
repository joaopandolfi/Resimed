/*
* Arquivo principal do aplicativo
*/

/*
* Funcao para incluir um js de dentro do js
* @params url {String} [File URL]
*/
function include(url){
  window.document.write('<script src="'+url+'" language="JavaScript" type="text/javascript"></script>');
}
