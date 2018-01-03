include("js/model/card_busca.js");
include("js/model/action_bar.js");
include("js/variables/search_variables.js");

/*
* Classe de controle da busca
* @method makeResult(json) {HTML} [Cria o resultado da busca]
* \--> @receives {instituicoes:[nome:(String),sigla:(String),estado:(String),idinstituicao:(int),idedital:(int)]}
*/
var c_busca = {
    makeResult: function(json){
      var body = "";
      json.instituicoes.forEach(
        function(instituicao){
          var aux = CARD_RESULTADO.replace("%idEdital%",instituicao.idedital);
          aux = aux.replace("%idInstituicao%",instituicao.idinstituicao);
          aux = aux.replace("%sigla%",instituicao.siglla);
          aux = aux.replace("%nome%",instituicao.nome);
          body += aux;
        }
      );
      return body;
    }
};
