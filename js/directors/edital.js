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

d_edital = {
  execute: function(){
    var params = getUrlVars();
    var url = _serv.url+_route.edital.replace("{idEdital}",params['idEdital']).replace("{idInstituicao}",params['idInstituicao']);
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
    //make lateral menu
    document.getElementById('actionbar').innerHTML = c_menu_drawer.makeMenu();
    //make general
    document.getElementById('container-geral').innerHTML = c_edital.makeGeneral(json.geral);

    //make vacancy
    document.getElementById('container-vagas').innerHTML = c_edital.makeVacancy(json.vagas);

    //make calendary
    document.getElementById('container-calendario').innerHTML = c_edital.makeCalendar(json.calendario);
  }
};
