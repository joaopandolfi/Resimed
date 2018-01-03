//pega a altura e largura do viewport
var viewportH = verge.viewportH();
var viewportW = verge.viewportW();

//seta uma referência para o stylesheet a ser utilizado no próprio documento
var styleTag = document.getElementById ("dynamicStyle");
var sheet = styleTag.sheet ? styleTag.sheet : styleTag.styleSheet;

//função que adiciona as tags html e seus atributos css dentro do style
function addCSSRule(sheet, selector, rules, index){
    if("insertRule" in sheet) {
        sheet.insertRule(selector + "{" + rules + "}", index);
    }
    else if("addRule" in sheet) {
        sheet.addRule(selector, rules, index);
    }
}

/*-------------- SPLASHSCREEN --------------*/
if(document.querySelector("#logoSplashScreen")){

    if(viewportW <= 360){
        var logoSplashWidth = viewportW - 120;
        addCSSRule(sheet, '#logoSplashScreen', 'width: '+logoSplashWidth+'px; margin-left: 60px;', 0);
        var logoSplashHeight = document.querySelector("#logoSplashScreen").height;
        var logoSplashMarginTop = (viewportH - logoSplashHeight) / 2
        addCSSRule(sheet, '#logoSplashScreen', 'margin-top: '+logoSplashMarginTop+'px;', 0);
    }else{
        //var logoSplashHeight = document.querySelector("#logoSplashScreen").height;
        var logoSplashMarginTop = (viewportH - 150) / 2;
        var logoSplashMarginLeft = (viewportW - 240) / 2;
        addCSSRule(sheet, '#logoSplashScreen', 'width: 240px; margin-left: '+logoSplashMarginLeft+'px; margin-top: '+logoSplashMarginTop+'px', 0);
    }

    window.addEventListener("resize", function() {

        //pega a altura e largura do viewport no momento do rezize
        viewportH = verge.viewportH();
        viewportW = verge.viewportW();
        
        var element = document.querySelector("#logoSplashScreen");

        if(viewportW <= 360){
            var logoSplashWidth = viewportW - 120;
            element.style.width = logoSplashWidth+'px';
            element.style.marginLeft = '60px';

            var logoSplashHeight = document.querySelector("#logoSplashScreen").height;
            var logoSplashMarginTop = (viewportH - logoSplashHeight) / 2;

            element.style.marginTop = logoSplashMarginTop+'px';
        }else{
            var logoSplashMarginTop = (viewportH - 150) / 2;
            var logoSplashMarginLeft = (viewportW - 240) / 2;

            element.style.width = '240px';
            element.style.marginLeft = logoSplashMarginLeft+'px';
            element.style.marginTop = logoSplashMarginTop+'px';
        }

    }, false);
    
}

/*-------------- TELA INICIAL --------------*/
if(document.querySelector("#sem-edital")){

    // posicionamento da div report no meio da tela
    var divSemEdital = document.querySelector("#sem-edital");
    var divReport = document.querySelector(".report");
    var divSemEditalH = divSemEdital.clientHeight;

    //(altura do container - altura do botão - altura da divReport) / 2
    divReport.style.marginTop = (divSemEditalH - 56 - divReport.clientHeight) / 2 + "px";

    // posicionamento do botão no meio da tela
    if(viewportW > 416){
        document.querySelector(".bt-busca-editais").style.marginLeft = (viewportW - 416) / 2 + "px";
        document.querySelector(".bt-busca-editais").style.marginRight = (viewportW - 416) / 2 + "px";
    }

    window.addEventListener("resize", function() {

        // posicionamento da div report no meio da tela
        var divSemEdital = document.querySelector("#sem-edital");
        var divReport = document.querySelector(".report");
        var divSemEditalH = divSemEdital.clientHeight;

        divReport.style.marginTop = (divSemEditalH - 56 - divReport.clientHeight) / 2 + "px";

        //pega a largura do viewport no momento do rezize
        var viewportW = verge.viewportW();

        // posicionamento do botão no meio da tela
        if(viewportW > 416){
            document.querySelector(".bt-busca-editais").style.marginLeft = (viewportW - 416) / 2 + "px";
            document.querySelector(".bt-busca-editais").style.marginRight = (viewportW - 416) / 2 + "px";
        }else{
            document.querySelector(".bt-busca-editais").style.marginLeft = 0 + "px";
            document.querySelector(".bt-busca-editais").style.marginRight = 0 + "px";
        }


    }, false);

}


/*-------------- BUSCA EDITAL --------------*/
if(document.querySelector("#busca-edital")){

    // posicionamento do botão no meio da tela
    if(viewportW > 416){
        document.querySelector("#busca-edital input[type=submit]").style.marginLeft = (viewportW - 416) / 2 + "px";
        document.querySelector("#busca-edital input[type=submit]").style.marginRight = (viewportW - 416) / 2 + "px";
    }

    window.addEventListener("resize", function() {

        //pega a largura do viewport no momento do rezize
        var viewportW = verge.viewportW();

        // posicionamento do botão no meio da tela
        if(viewportW > 416){
            document.querySelector("#busca-edital input[type=submit]").style.marginLeft = (viewportW - 416) / 2 + "px";
            document.querySelector("#busca-edital input[type=submit]").style.marginRight = (viewportW - 416) / 2 + "px";
        }else{
            document.querySelector("#busca-edital input[type=submit]").style.marginLeft = 0 + "px";
            document.querySelector("#busca-edital input[type=submit]").style.marginRight = 0 + "px";
        }


    }, false);

}

/*-------------- EDITAL --------------*/
if(document.querySelector("#calendario")){

    //ajusta a largura para caber o ícone da seta indicando que tem mais coisas
    //conta = tamanho do viewport - pixels de sobra do inline-block - margem do ícone - largura do ícone
    if(document.getElementsByClassName('item-calendario')[0] != null){
        for(var i = 0; i < document.getElementsByClassName('item-calendario').length; i++){
            document.getElementsByClassName('item-calendario')[i].firstElementChild.style.width = viewportW - 16 - 4 - 8 - 14 + "px";
        }
    }

    window.addEventListener("resize", function() {

        //pega a largura do viewport no momento do rezize
        var viewportW = verge.viewportW();

        if(document.getElementsByClassName('item-calendario')[0] != null){
            for(var i = 0; i < document.getElementsByClassName('item-calendario').length; i++){
                document.getElementsByClassName('item-calendario')[i].firstElementChild.style.width = viewportW - 16 - 4 - 8 - 14 + "px";
            }
        }

    }, false);

}


/*-------------- TAREFAS --------------*/
if(document.querySelector(".lista-calendario")){

    //ajusta a largura para caber o ícone da seta indicando que tem mais coisas
    //conta = tamanho do viewport - pixels de sobra do inline-block - margem do ícone - largura do ícone
    if(document.getElementsByClassName('item-tarefas')[0] != null){
        for(var i = 0; i < document.getElementsByClassName('item-tarefas').length; i++){
            document.getElementsByClassName('item-tarefas')[i].firstElementChild.style.width = viewportW - 16 - 4 - 8 - 14 + "px";
        }
    }

    window.addEventListener("resize", function() {

        //pega a largura do viewport no momento do rezize
        var viewportW = verge.viewportW();

        if(document.getElementsByClassName('item-tarefas')[0] != null){
            for(var i = 0; i < document.getElementsByClassName('item-tarefas').length; i++){
                document.getElementsByClassName('item-tarefas')[i].firstElementChild.style.width = viewportW - 16 - 4 - 8 - 14 + "px";
            }
        }

    }, false);

}


