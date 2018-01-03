include("js/model/index_models.js");

/*
* Classe de controle do drawer menu principal
* @method makeMenu() {HTML} [Constroi o menu lateral]
* @method @private makeMyEditals() {HTML} [Constroi a lista dos meus editais]
* @method makeSearch() {HTML} [Constroi a tela de busca]
* @method makeActivityes(json) {HTML} [Constroi as atividades]
* \--> {atividades:[{sigla:(String),nome:(String),idinstituicao:(int),idedital:(int),data_inicio:(String),data_fim:(String)}]}
*/
var c_menu_drawer = {
  makeMenu: function(){
    var body = HEADER_MENU_DRAWER_MODEL.replace("%img%",_user.ft_perfil);
    body += body.replace("%name%",_user.nome);
    body += this.makeMyEditals();
    body += END_MENU_DRAWER_MODEL;
    return body;
  },

  makeMyEditals: function(){
      var body = ""
      _localStorage.loadDataUser();
      _user.meus_editais.forEach(
        function(edital){
          var aux = SUBMENU_EDITAIS.replace("%idEdital%",edital.idedital);
          aux = aux.replace("%idInstiuticao%",edital.idinstiuticao);
          aux = aux.replace("%titleEdital%",edital.sigla);
          body += aux;
        }
      );
      return body;
  }
};

//Troca cor quando clica
//document.querySelector("#link-atividades").style.color = "#054c29";

//Controle do menu lateral
var screenHeight = verge.viewportH();
var screenWidth = verge.viewportW();

$(document).ready(function(){

    $(".button-collapse").sideNav({
        menuWidth: screenWidth - 56, // Default is 240
        edge: 'left', // Choose the horizontal origin
        closeOnClick: false // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });

    (function ($) {
        $("#slide-out").on('click', '#meus-editais', function (e) {
            $(this).next('.container-menu-editais').toggle(200);
            if($(this).children('i').hasClass('icon-expand-less')){
                $(this).children('i').removeClass('icon-expand-less').addClass('icon-expand-more');
            }else{
                $(this).children('i').removeClass('icon-expand-more').addClass('icon-expand-less');
            }
        });
    })(jQuery);
});
