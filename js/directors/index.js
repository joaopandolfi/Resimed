/*
* Director responsavel por montar a tela principal
* Acessa servidor e monta a tela

* @requires io/ajax.js
* @requires controller/index.js
* @requires controller/menu_drawer.js
* @requires contants/routes_constants.js
* @requires contants/server_constants.js
* @requires variables/user_variables.js

* @public @method execute() {null} [Executa a tela]
* @method getData(url) {JSON} [Acessa o servidor e busca o JSON]
* @method onResult(json) {null} [Chamado apos a tarefa assincrona do AJAX]
* @method buildScreen(json) {null} [Monta interface]
*/
var d_index ={
  execute: function(){
    var url = _serv.url+_route.index.replace("{idUser}",_user.id).replace("{api_key}",_user.api_key);
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
    if(json.result == undefined || json.result == 0)
      d_index.buildScreen({atividades:[]});
    else
      d_index.buildScreen(JSON.parse(json));
  },
  buildScreen: function(json){
    if(json.atividades.length >= 0){
      document.getElementById('container-action-bar').innerHTML = c_index.makeActionBarActivityes();
      document.getElementById('content').innerHTML = c_index.makeActivityes(json);
    }else{
        document.getElementById('container-action-bar').innerHTML = c_index.makeActionBarSearch();
        document.getElementById('content-pad').innerHTML = c_index.makeSearch();
    }
  }
};
