//pega variaveis no metodo get -> result['var1']
function getUrlVars(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++){
        hash = hashes[i].split('=');
		hash[1] = unescape(hash[1]);
		vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

//Pegar hash do titulo
function getHashData(){
    var hash = location.hash;
    return hash.substr(1);
}
