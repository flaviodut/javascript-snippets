// Função Construtoras vs Funções Fábrica
// based on examples from Rodrigo Branas

// Função Fábrica

var criarPessoa = function(nome, idade) {
    return {
        nome: nome,
        idade: idade
    };
};

var ben = criarPessoa("Ben", 34);
var john = criarPessoa("John", 45);
console.log(ben, john);


// Função Construtora

var Pessoa = function(nome, idade) {
    this.nome = nome;
    this.idade = idade;
};

var ben = new Pessoa("Ben", 34);
var john = new Pessoa("John", 45);
console.log(ben, john);