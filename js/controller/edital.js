include("../utils/date_processor.js");
include("../model/card_edital.js");
include("../model/container_edital.js");
include("../model/action_bar.js");

/*a
* Classe de controle do edital
* @requires idEdital, idInstituicao, from:{"drawer" or "busca"}
* @method makeUrl(server) {URL} [Retorna a url para consulta]

* @method makeMenuDrawerAndActionBar(from,menu,title) {HTML} [O menu drawer e action-bar]
* \--> @param from:{"drawer" or "busca"}
* \--> @param menu:{HTML} (HTML do menu lateral pronto)
* \--> @param title:{String} (nome da instituicao)

* @method makeGeneral(json) {HTML} [Cria o conteudo da aba Geral]
* \--> @receives {numero:(String),ano:(string),sigla:(string),nome:(string),endereco:(string),valor:(string)}

* @method makeVacancy(json) {HTML} [Cria o conteudo da aba Vagas]
* \--> @receives {tipos_programa:[{nome:"String",programas:[{especialidade:"String",info:[{titulo:"String",dado:"String"}]}]}]}

* @method makeCalendar(json) {HTML} [Cria o conteudo da aba Calendario]
* \--> @receives {atividades:[{idedital:(int),idatividade:(int),tipo_atividade:{id:(int),nome:(String)},data_inicio:(String), data_fim:(String)}]}
*/
var c_edital = {
    makeUrl: function(server){return "url"} ,
    makeMenuDrawerAndActionBar: function(from,menu_drawer,title){
      var menu = "";
      if(from == "drawer"){
        menu = menu_drawer;
        menu += ICON_DRAWER;
      }
      else
        menu = ICON_BACK;

      menu += FAVORITE_BUTTON;
      menu += TITLE_ACTIOBAR.replace("%title%", title);
      return menu;
    },

    makeGeneral: function(json){
        var body;
        aux = CARD_EDITAL_GERAL.replace("%title%","Edital");
        body = aux.replace("%data%",json.numero+"/"+json.ano);

        aux = CARD_EDITAL_GERAL.replace("%title%","Instituição");
        body += aux.replace("%data%",json.sigla+" - "+json.nome);

        aux = CARD_EDITAL_GERAL.replace("%title%","Endereço");
        body += aux.replace("%data%",json.endereco);

        aux = CARD_EDITAL_GERAL.replace("%title%","Valor da inscrição");
        body += aux.replace("%data%",json.valor);

        return body;
    },

    makeVacancy: function(json){
      var body = "";
      json.tipos_programa.forEach(
        function(tipo_programa){
          var dataContainer = HEADER_CONTAINER_VAGAS;
          body += dataContainer.replace("%title%",tipo_programa.nome);

          tipo_programa.programas.forEach(
            function(programa){
                var aux = HEADER_CARD_EDITAL_VAGA;
                body += aux.replace("%title%",programa.especialidade);

                var info = programa.info; //Recebe uma lista
                aux = BODY_CARD_EDITAL_VAGA;
                info.forEach(
                  function (card){
                    let a = aux.replace("%item_title%", card.titulo);
                    body += a.replace("%item_value%", card.dado);
                  });

                body += END_CARD_EDITAL_VAGA;
              });
          });
        return body;
      },
    makeCalendar: function(json){
      var body = "";
      json.atividades.forEach(
        function(atividade){
          var aux = CARD_EDITAL_CALENDARIO.replace("%idtipo_atividade%", atividade.tipo_atividade.id);
          aux += aux.replace("%idAtividade%", atividade.idatividade);
          aux += aux.replace("%titulo%", atividade.tipo_atividade.nome);
          aux += aux.replace("%dtIni%",formatDateToBrString(atividade.data_inicio));
          aux += aux.replace("%dtFim%", isDateEmpty(atividade.data_fim)?"":" as "+formatDateToBrString(atividade.data_fim));
          aux += aux.replace("%url%", "edital.html?id="+atividade.idedital);

          body += aux;
        });
        return body;
    },
};
