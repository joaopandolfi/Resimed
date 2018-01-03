/*
* Rotas de acesso ao servidor
* @model /path/{var}/
*/
var _route = {
  busca: "institutions/find/{estado}/{especialidade}",
  descricao: "",
  edital: "editals/findById/{idEdital}/{idInstituicao}/",
  resultado: "",
  index: "activityes/findByUser/{idUser}/{api_key}",
  unsecure_index: "activityes/unsecure/findByUser/{idUser}"
};
