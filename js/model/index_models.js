/* Modelos das telas principais
* (c) João Carlos Pandolfi Santana - 21/07/2016
*/

/*
* Modificacoes no action-bar ao acessar a tela de busca
* @inside id='container-action-bar'
*/
const ACTIONBAR_BUSCA = "<a href='#' data-activates='slide-out' class='button-collapse'><i class='icon-menu-drawer normal'></i></a>"+
"<h2 class='action-bar'>Buscar editais</h2>";

/*
* Modelo da tela de buscas da tela principal
* Informa que não tem edital favorito e coloca botao
* @inside id='content-pad'
*/
const CONTENT_BUSCA_EDITAL = "<div id='sem-edital' class='view-tarefa' style='display: none'>"+
    "<div class='report'>"+
        "<i class='icon-document extra-larger silver'></i>"+
        "<p>Você ainda não tem editais favoritos para acompanhar.</p>"+
    "</div>"+
    "<a href='busca_editais.html' class='bt-standard bt-silver bt-busca-editais'>buscar editais</a>"+
"</div>";

/* ============================ ATIVIDADES ===============================*/

/*
* Modificacoes no action-bar ao acessar a tela de atividades
* @inside id='container-action-bar'
*/
const ACTIONBAR_ATIVIDADES = "<a href='#' data-activates='slide-out' class='button-collapse'><i class='icon-menu-drawer normal'></i></a>"+
"<a href='busca_editais.html' id='icon-search' class='button-action'><i class='icon-search'></i></a>"+
"<h2 class='action-bar'>Atividades</h2>";

/*
* Container das atividades da tela principal
* @inside id='content'
*/
const HEADER_CONTAINER_ATIVIDADE = "<div id='atividades' class='view-tarefa'>";

const END_CONTAINER_ATIVIDADE = "</div>";

/*
* Modelo da atividade da tela principal
* @param %idEdital% {Id do edital correspondente}
* @param %instituicao% {sigla da instituicao}
* @param %atividade% {Nome da atividade}
* @param %data% {data de inicio e fim}
* @param %dataInicialExtenso% {Data inicial escrita por extenso} ex:[Hoje <span>qui 01 out</span>]
* @inside id='atividades'
*/
const HEADER_MODEL_ATIVIDADES = "<ul class='lista-calendario'>"+
"<li>"+
    "<!-- <h3>%dataInicialExtenso%</h3> -->"+
    "<ul class='lista-tarefas'>";

const BODY_MODEL_ATIVIDADES ="<li>"+
    "<a href='edital.html?idEdital=%idEdital%&idInstituicao=%idInstituicao%' class='item-tarefas'>"+
        "<div>"+
            "<h4>%instituicao% - %atividade%</h4>"+
            "<p>%data%</p>"+
        "</div>"+
        "<i class='icon-arrow-right'></i>"+
    "</a>"+
"</li>";

const END_MODEL_ATIVIDADES = "</ul></li></ul>";
