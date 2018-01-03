var edital_emescam = new Object();

edital_emescam.numero = "Nº 01/2016";
edital_emescam.sigla = "EMESCAM";
edital_emescam.instituicao = "EMESCAM - Escola da Santa Casa de Misericórdia de Vitória";
edital_emescam.endereco = "Av. N. S. da Penha, 2190, Santa Luiza - Vitória - ES - 29045-402";
edital_emescam.cel2 = "(27) 99205 - 0358";
edital_emescam.categorias = "Crossfit, Musculação, Ginástica, Laboral, Emagrecimento";
edital_emescam.valor = "a partir de R$ 80/aula";
edital_emescam.periodo = "madrugada, manhã, tarde, noite";
edital_emescam.regiao = "Jardim da Penha, Praia do Canto, Jardim Camburi, Mata da Praia, Bairro República, Goiabeiras";
edital_emescam.local = "academias, condomínios, locais ao ar livre";

//Acesso Direto
edital_emescam.acesso_direto = new Array();

edital_emescam.acesso_direto[0] = new Array();
edital_emescam.acesso_direto[0][0] = "Anestesiologia";
edital_emescam.acesso_direto[0][1] = "01";
edital_emescam.acesso_direto[0][2] = "03 anos";
edital_emescam.acesso_direto[0][3] = "01";

edital_emescam.acesso_direto[1] = new Array();
edital_emescam.acesso_direto[1][0] = "Cirurgia Geral";
edital_emescam.acesso_direto[1][1] = "02";
edital_emescam.acesso_direto[1][2] = "2 anos";
edital_emescam.acesso_direto[1][3] = "02";

edital_emescam.acesso_direto[2] = new Array();
edital_emescam.acesso_direto[2][0] = "Clínica Médica";
edital_emescam.acesso_direto[2][1] = "03";
edital_emescam.acesso_direto[2][2] = "02 anos";
edital_emescam.acesso_direto[2][3] = "08";

edital_emescam.acesso_direto[3] = new Array();
edital_emescam.acesso_direto[3][0] = "Ginecologia e Obstetrícia";
edital_emescam.acesso_direto[3][1] = "04";
edital_emescam.acesso_direto[3][2] = "03 anos";
edital_emescam.acesso_direto[3][3] = "02";

//Pré-requisito
edital_emescam.requisito = new Array();

edital_emescam.requisito[0] = new Array();
edital_emescam.requisito[0][0] = "Cardiologia";
edital_emescam.requisito[0][1] = "05";
edital_emescam.requisito[0][2] = "02 anos";
edital_emescam.requisito[0][3] = "01";
edital_emescam.requisito[0][4] = "Cliníca Médica";

edital_emescam.requisito[1] = new Array();
edital_emescam.requisito[1][0] = "Cancerologia Clínica";
edital_emescam.requisito[1][1] = "06";
edital_emescam.requisito[1][2] = "03 anos";
edital_emescam.requisito[1][3] = "01";
edital_emescam.requisito[1][4] = "Cliníca Médica";

edital_emescam.requisito[2] = new Array();
edital_emescam.requisito[2][0] = "Cancerologia Clínica";
edital_emescam.requisito[2][1] = "07";
edital_emescam.requisito[2][2] = "03 anos";
edital_emescam.requisito[2][3] = "01";
edital_emescam.requisito[2][4] = "Cirurgia Geral";

//3º ano opcional
edital_emescam.opcional = new Array();

edital_emescam.opcional[0] = new Array();
edital_emescam.opcional[0][0] = "Neonatologia";
edital_emescam.opcional[0][1] = "08";
edital_emescam.opcional[0][2] = "02 anos";
edital_emescam.opcional[0][3] = "02";
edital_emescam.opcional[0][4] = "Pediatria";

edital_emescam.inscricaoes = "03/11/2015 a 20/11/2015";
edital_emescam.primeira_etapa = "1ª etapa: 29/11/2015";
edital_emescam.segunda_etapa = "2ª etapa: 29/11/2015";

localStorage.editalEmescam = JSON.stringify(edital_emescam);

if(localStorage.getItem('editalEmescam') != null) {

    var editalDados = JSON.parse(localStorage.editalEmescam);

    console.log(editalDados.requisito.length);

    //if(editalDados.requsito.length)

    //alert("porra");

}