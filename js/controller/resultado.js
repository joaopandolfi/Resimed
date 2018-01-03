include("../model/card_edital.js");

/*
* Classe de controle dos resultados
*/
var c_resultado = {
    makeUrl: function(){return "url"} ,
    makeScreen : function(json){
      var json = dinamicUpdate();
      var aux = HEADER_CARD_EDITAL_VAGA;
      var body = aux.replace("%title%",json.titulo);

      var cards = json.cards; //Recebe uma lista
      aux = BODY_CARD_EDITAL_VAGA;
      cards.forEach(
        function (card){
          let a = aux.replace("%item_title%", card.titulo);
          body += a.replace("%item_value%", card.value);
        }
      );

      body += END_CARD_EDITAL_VAGA;
      //Imprime body
      return body;
    }
}
