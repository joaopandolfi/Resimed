/* Modelo dos cards do edital
* (c) João Carlos Pandolfi Santana - 16/05/2016
*/

/*
* Modelo do card informacoes gerais do edital
* @param %title% {Titulo do dado}
* @param %data% {Dado do edital}
* @inside id='container-geral'
*/
const CARD_EDITAL_GERAL = '<div class="item-edital"> <h6>%title%</h6> <p>%data%</p> </div>';

/*
* Modelo do card vaga de edital
* @param %title% {nome da especialidade}
* @param %item_title% {titulo do tipo de descricao}
* @param %item_value% {valor do tipo de descricao}
* @inside id='container-vagas'
*/
const HEADER_CARD_EDITAL_VAGA = "<div class='item-vaga'>"+
      "<div class='item-vaga-titulo'>"+
          "<span>%title%</span>"+
          "<i class='icon-expand-more'></i>"+
      "</div>"+
      "<div class='container-vaga-descricao'>";

const BODY_CARD_EDITAL_VAGA = "<div class='item-vaga-descricao'>"+
      "<div>%item_title% <span>%item_value%</span></div>"+
    "</div>";

const END_CARD_EDITAL_VAGA = "</div></div>";

/*
* Modelo do card Calendario
* @param %url% {Arquivo a ser chamado de acordo com o tipo da etapa}
* @param %idAtividade% {id do atividade}
* @param %idtipo_atividade% {id do tipo do atividade}
* @param %titulo% {nome do tipo da atividade}
* @param %dtIni% {Data inicial}
* @param %dtFim% {Data final} [Caso exista colocar um 'a ' antes ]
* @call etapaClicked(idAtividade,idtipo_atividade)
* @inside id='container-calendario'
*/
const CARD_EDITAL_CALENDARIO = '<li>'+
            '<a href="%url%" onclick="etapaClicked(%idAtividade%,%idtipo_atividade%)" class="item-calendario">'+
                '<div>'+
                    '<h6>%titulo%</h6>'+
                    '<p>%dtIni% %dtFim%</p>'+
                '</div>'+
                '<i class="icon-arrow-right"></i>'+
            '</a>'+
        '</li>';
