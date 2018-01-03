include("js/utils/date_processor.js");
include("js/model/index_models.js");

/*
* Classe de controle da tela principal
* @method makeActionBarSearch() {HTML} [Constroi a action bar da busca]
* @method makeActionBarActivityes() {HTML} [Constroi a actionbar das atividades]
* @method makeSearch() {HTML} [Constroi a tela de busca]
* @method makeActivityes(json) {HTML} [Constroi as atividades]
* \--> {atividades:[{sigla:(String),nome:(String),idinstituicao:(int),idedital:(int),data_inicio:(String),data_fim:(String)}]}
*/
var c_index ={
  makeActionBarSearch: function (){return ACTIONBAR_BUSCA},
  makeActionBarActivityes: function(){return ACTIONBAR_ATIVIDADES},

  makeSearch: function(){
      return CONTENT_BUSCA_EDITAL;
  },
  makeActivityes: function(json){
      var body = HEADER_CONTAINER_ATIVIDADE;
      json.atividades.forEach(
        function(atividade){
          body += HEADER_MODEL_ATIVIDADES;
          var aux = BODY_MODEL_ATIVIDADES;
          aux = aux.replace("%idEdital%", atividade.idedital);
          aux = aux.replace("%idinstituicao%", atividade.idinstituicao);
          aux = aux.replace("%instituicao%", atividade.instituicao);
          aux = aux.replace("%atividade%", atividade.sigla);
          aux = aux.replace("%data%", formatDateToBrString(atividade.data_inicio)+isDateEmpty(atividade.data_fim)?"":" as "+formatDateToBrString(atividade.data_fim));
          body += aux;
          body += END_MODEL_ATIVIDADES;
        });

      body+= END_CONTAINER_ATIVIDADE;
      return body;
  }
};
