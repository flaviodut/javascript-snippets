// encapsular com Function
// é possível fazer uso de uma IIFE (immediately invoked function expression) e assim nao é necessário "ativar a função"
// var fn = (function(params){})(); // o ultimo (), chama a própria função anônima

// Adicionado "_" na frente das variáveis pra indicar que são privadas

// REVEALING MODULE PATTERN - Função Fabrica
var counter = (function() {
    var _value = 0;

    var add = function() {
        return ++_value;
    };

    var subtract = function() {
        return --_value;
    };

    var reset = function() {
        _value = 0;
    };

    return {
        add: add,
        subtract: subtract,
        reset: reset
    };
})();

console.log(counter._value); // undefinied
console.log(counter.add()); // 1
console.log(counter.add()); // 2
console.log(counter.subtract()); // 1
console.log(counter.add()); // 2
console.log(counter.add()); // 3
counter.reset();
console.log(counter.add()); // 1
console.log(counter.add()); // 2