/*
* Controle dados salvos no local storage
* (C) João Carlos Pandolfi Santana - 09/08/2016

* @requires js/variables/user_variables.js
* @requires js/variables/search_variables.js
* @requires js/variables/navigation_variables.js

* @method saveDataUser() {null} (Salva os dados do usuario)
* @method loadDataUser() {null} (Carrega os dados do usuario)
* @method saveDataNavigation() {null} (Salva os dados da navegacao)
* @method loadDataNavigation() {null} (Carrega os dados da navegacao)
* @method saveDataSearch() {null} (Salva os dados da busca)
* @method loadDataSearch() {null} (Carrega os dados da busca)
* @method saveGenericObject(generic) {null} (Salva dados genericos)
* @method loadGenericObject() {generic} (Carrega o dado salvo na tag Generico)
* @method loadAll() {null} (Carrega todos os dados para as variaveis)
* @method saveAll() {null} (Salva todos os dados das variaveis)
*/

var _localStorage= {
	saveDataUser: function(){
		localStorage.setItem("user",JSON.stringify(_user));
	},

	loadDataUser: function(){
		_user = JSON.parse(localStorage.getItem("user"));
	},

	saveDataNavigation: function(){
		localStorage.setItem("nav",JSON.stringify(_nav));
	},

	loadDataNavigation: function(){
		_nav = JSON.parse(localStorage.getItem("nav"));
	},

	saveDataSearch: function(){
		localStorage.setItem("search",JSON.stringify(_search));
	},

	loadDataSearch: function(){
		_search = JSON.parse(localStorage.getItem("search"));
	},

	saveGenericObject: function(generic){
		localStorage.setItem("generic",JSON.stringify(generic));
	},

	loadGenericObject: function(){
		return JSON.parse(localStorage.getItem("generic"));
	}

	loadAll: function(){
		this.loadDataSearch();
		this.loadDataNavigation();
		this.loadDataUser();
	},

	saveAll: function(){
		this.saveDataSearch();
		this.saveDataNavigation();
		this.saveDataUser();
	}
}
