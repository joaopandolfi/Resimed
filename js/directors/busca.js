/*
* Director responsavel por montar a tela do edital
* Acessa servidor e monta a tela
* @requires io/ajax.js
* @requires controller/edital.js
* @requires controller/menu_drawer.js
* @requires contants/routes_constants.js
* @requires contants/server_constants.js
* @requires utils/urlHelper.js

* @requires @url @params idEdital, idInstituicao
* @public @method execute() {null} [Executa a tela]
* @method getData(url) {JSON} [Acessa o servidor e busca o JSON]
* @method onResult(json) {null} [Chamado apos a tarefa assincrona do AJAX]
* @method buildScreen(json) {null} [Monta interface]
*/

d_busca = {
  execute: function(){
    var params = getUrlVars();
    var url = _serv.url+_route.busca.replace("{estado}",params['estado']).replace("{especialidade}",params['especialidade']);
    this.getData(url);
  },
  getData: function(url){
    /*Exibe load
    {} */
    ajax.asyncTask(this.onResult,url);
  },
  onResult: function(json){
    /*Remove Load
    {} */
    this.buildScreen(JSON.parse(json));
  },
  buildScreen: function(json){
    //make search result
    document.getElementById('resultado').innerHTML = c_busca.makeResult(json);
  }
};
