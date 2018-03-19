var Pilha = (function () {
    function Pilha(el) {
        var _this = this;
        this.topo = -1;
        this.pilha = [];
        this.ultimo = null;
        this.comunicacao = el.querySelector('#comunicacao');
        this.btnAdicionar = el.querySelector('#btn_adicionar');
        this.btnAdicionar.addEventListener('click', this.aleatorio.bind(this));
        this.btnRemover = el.querySelector('#btn_remover');
        this.btnRemover.addEventListener('click', this.desempilhar.bind(this));
        this.btnImprimir = el.querySelector('#btn_imprimir');
        this.btnImprimir.addEventListener('click', this.imprimir.bind(this));
        this.btnImprimirInverso = el.querySelector('#btn_imprimir_inverso');
        this.btnImprimirInverso.addEventListener('click', this.imprimirAoContrario.bind(this));
        this.btnTamanho = el.querySelector('#btn_tamanho');
        this.btnTamanho.addEventListener('click', function () {
            _this.comunicacao.innerHTML = _this.tamanho().toString();
        });
        this.btnLimpar = el.querySelector('#btn_limpar');
        this.btnLimpar.addEventListener('click', this.limpar.bind(this));
    }
    Pilha.prototype.empilhar = function (n) {
        if (this.cheio()) {
            throw new Error('A pilha está cheia.');
        }
        this.topo++;
        this.pilha[this.topo] = n;
    };
    Pilha.prototype.desempilhar = function () {
        if (this.vazio()) {
            throw new Error('A pilha está vazia.');
        }
        var aux = this.pilha[this.topo];
        this.topo--;
        return aux;
    };
    Pilha.prototype.aleatorio = function () {
        var n = Math.floor(Math.random() * 100);
        if (n === this.ultimo) {
            this.aleatorio();
        }
        else {
            this.ultimo = n;
            this.empilhar(n);
        }
    };
    Pilha.prototype.imprimir = function () {
        if (this.vazio()) {
            throw new Error('Não há o que imprimir, a pilha está vazia.');
        }
        var aux = [];
        for (var i = 0; i <= this.topo; i++) {
            aux[i] = this.pilha[i];
        }
        this.comunicacao.innerHTML = aux.join(', ');
    };
    Pilha.prototype.imprimirAoContrario = function () {
        if (this.vazio()) {
            throw new Error('Não há o que imprimir, a pilha está vazia.');
        }
        var aux = [];
        for (var i = this.topo, j = 0; i >= 0; i--, j++) {
            aux[j] = this.pilha[i];
        }
        this.comunicacao.innerHTML = aux.join(', ');
    };
    Pilha.prototype.limpar = function () {
        if (this.vazio())
            throw new Error('Não há o que limpar, a pilha está vazia.');
        for (var i = 0; i < this.pilha.length; i++) {
            this.pilha[i] = undefined;
        }
        this.topo = -1;
    };
    Pilha.prototype.tamanho = function () {
        return this.topo + 1;
    };
    Pilha.prototype.vazio = function () {
        if (this.topo === -1) {
            return true;
        }
        return false;
    };
    Pilha.prototype.cheio = function () {
        if (this.topo === this.pilha.length) {
            return true;
        }
        return false;
    };
    return Pilha;
}());
//# sourceMappingURL=Pilha.js.map