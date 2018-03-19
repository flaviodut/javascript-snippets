class Pilha {
	private topo: number;
  private pilha: number[];
  private ultimo: number;

  private comunicacao: HTMLElement;
  private btnAdicionar: HTMLElement;
  private btnRemover: HTMLElement;
  private btnImprimir: HTMLElement;
  private btnImprimirInverso: HTMLElement;
  private btnTamanho: HTMLElement;
  private btnLimpar: HTMLElement;
	
  constructor(el: any) {
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
    this.btnTamanho.addEventListener('click', () => {
      this.comunicacao.innerHTML = this.tamanho().toString();
    });
    
    this.btnLimpar = el.querySelector('#btn_limpar');
    this.btnLimpar.addEventListener('click', this.limpar.bind(this));
  }
  
  public empilhar(n: number): void {
  	if (this.cheio()) {
      throw new Error('A pilha está cheia.');
    }
  	
    this.topo++;
  	this.pilha[this.topo] = n;
  }
  
  public desempilhar(): number {
  	if (this.vazio()) {
      throw new Error('A pilha está vazia.');
    }
    
  	const aux = this.pilha[this.topo];
  	this.topo--;
    return aux;
  }
  
  public aleatorio(): void {
  	const n: number = Math.floor(Math.random() * 100);
    
    if (n === this.ultimo) {
    	this.aleatorio();
    } else {
    	this.ultimo = n;
    	this.empilhar(n);
    }
  }
  
  public imprimir(): void {
  	if (this.vazio()) {
      throw new Error('Não há o que imprimir, a pilha está vazia.');
    }
    
    const aux: number[] = [];

  	for (let i: number = 0; i <= this.topo; i++) {
    	aux[i] = this.pilha[i];
    }
    
    this.comunicacao.innerHTML = aux.join(', ');
  }
  
  public imprimirAoContrario(): void {
  	if (this.vazio()) {
      throw new Error('Não há o que imprimir, a pilha está vazia.');
    }

  	const aux: number[] = [];
    
    for (let i: number = this.topo, j: number = 0; i >= 0; i--, j++) {
    	aux[j] = this.pilha[i];
    }
    
    this.comunicacao.innerHTML = aux.join(', ');
  }
  
  public limpar(): void {
  	if (this.vazio())
    	throw new Error('Não há o que limpar, a pilha está vazia.');

  	for (let i = 0; i < this.pilha.length; i++) {
    	this.pilha[i] = undefined;
    }
    
    this.topo = -1;
  }

  public tamanho(): number {
    return this.topo + 1;
  }
  
  private vazio(): boolean {
    if (this.topo === -1) {
      return true;
    }
    
    return false;
  }
  
  private cheio(): boolean {
    if (this.topo === this.pilha.length) {
      return true;
    }

    return false;
  }
}