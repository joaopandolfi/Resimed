/* Modelo dos cards da busca
* (c) João Carlos Pandolfi Santana - 17/08/2016
*/

/*
* Modelo do card de resultado da busca
* @param %idEdital% {Id do edital}
* @param %idInstituicao% {Id da instituicao}
* @param %sigla% {Sigla da instituicao}
* @param %nome% {Nome da instituicao}
* @inside id='resultado'
*/
CARD_RESULTADO =   "<li>"+
      "<a href='edital.html?idEdital=%idEdital%&idInstituicao=%idInstituicao%' class='item-busca'>"+
          "<div class=''>%sigla%</div>"+
          "<p>%nome%</p>"+
      "</a>"+
  "</li>";
