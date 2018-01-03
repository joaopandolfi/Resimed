/*
* Variaveis globais da API
*/
var _funcToCall;
/*
* Funcao de ajax
* @params url {String}
* @params type {String} [GET or POST]
* @params funcToCall {function} {func(result)}
* @calls processReqChange
* @depends _funcToCall
*/
function dinamicUpdate(funcToCall,url,type) {
//type = GET ou POST
    req = null;
    // Procura por um objeto nativo (Mozilla/Safari)
    if (window.XMLHttpRequest) {
        req = new XMLHttpRequest();
		    _funcToCall = funcToCall;
        req.onreadystatechange = processReqChange;
        req.open(type,url,true);
        req.send(null);
    // Procura por uma versão ActiveX (IE)
    } else if (window.ActiveXObject) {
        req = new ActiveXObject("Microsoft.XMLHTTP");
        if (req) {
            req.onreadystatechange = processReqChange;
			req.open(type,url,true);
            req.send();
        }
    }
}

/*
* Função chamada pelo ajax após a execução
* @calls _funcToCall(result{Json}) {function}
* @depends _funcToCall
*/
function processReqChange() {
    // apenas quando o estado for "completado"
    if (req.readyState == 4) {
        // apenas se o servidor retornar "OK"
        if (req.status ==200){
          _funcToCall(req.responseText);
  		  }else{
          _funcToCall({result:"0",error:req.responseText});
  		}
  }
}
