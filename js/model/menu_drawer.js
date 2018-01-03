/*
* Modelo do Menu drawer [HEADER]
* @param %img% {Avatar do usuario}
* @param %name% {Nome do usuario}
* @inside id='actionbar'
*/
const HEADER_MENU_DRAWER_MODEL = '<ul id="slide-out" class="side-nav">'+
    '<div class="container-topo-menu">'+
        '<img src="%img%" class="circle" />'+
        '<div class="nome">%name%</div>'+
    '</div>'+
    '<li><a id="link-atividades" href="index.html#atividades" onclick="reload();">Atividades</a></li>'+
    '<li>'+
        '<a id="meus-editais" href="javascript:void(0)">'+
            '<span>Meus editais</span>'+
            '<i class="icon-expand-more"></i>'+
        '</a>'+
        '<div class="container-menu-editais" style="display: none">';

/*
* Modelo do SubMenu drawer Editais [Loop]
* @param %idEdital% {id do edital}
* @param %idInstiuticao% {id da instituicao}
* @param %titleEdital% {titulo do edital}
* @inside HEADER_MENU_DRAWER_MODEL
*/
const SUBMENU_EDITAIS = '<a href="edital.html?idEdital=%idEdital%&idInstiuticao=%idInstiuticao%">%titleEdital%</a>';

/*
* Modelo do Menu drawer [END]
* @concat HEADER_MENU_DRAWER_MODEL
*/
const END_MENU_DRAWER_MODEL = '</div>'+
  '</li>'+
    '<li><a href="javascript:void(0)">Sobre o Resimed</a></li>'+
    '<li style="border-bottom: 1px solid #d8dbe0"><a href="javascript:void(0)">Fale conosco</a></li>'+
    '<li><a href="javascript:void(0)">Configurações</a></li>'+
'</ul>';
