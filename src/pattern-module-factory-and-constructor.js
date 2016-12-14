// encapsular com Function
// é possível fazer uso de uma IIFE (immediately-invoked function expression) e assim nao é necessário "ativar a função"
// var fn = (function(params){})(); // o ultimo (), chama a própria função anônima

// MODULE PATTERN - Função Fabrica
// var counter = (function() {
//     var value = 0;
//     return {
//         add: function() {
//             return value++;
//         },
//         subtract: function() {
//             return value--;
//         }
//     };
// })();

// MODULE PATTERN - Função Construtora
var CreateCounter = (function() {
    var value = 0;
    this.add = function() {
        return value++;
    };
    this.subtract = function() {
        return value--;
    };
})();
var counter = new Counter();

//console.log(counter.value); // undefinied
console.log(counter.add()); // 1
console.log(counter.add()); // 2
console.log(counter.subtract()); // 1
console.log(counter.add()); // 2