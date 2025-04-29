class Heroi{
	constructor (nome, idade, tipo){
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    }
    
    atacar(){
    	let ataque;
        
    if (this.tipo === "Mago") {
      ataque = "Magia";
    }
    
    else if (this.tipo === "Guerreiro"){
    ataque = "Espada";
    }
    
    else if (this.tipo === "Monge"){
    ataque = "Artes Marciais";
    }
    
    else if (this.tipo === "Ninja"){
    ataque = "Shuriken";
    }
    
    else {
      ataque = 'ataque desconhecido';
    }
    
console.log (`O ${this.tipo} tem ${this.idade} anos e atacou usando ${ataque}`);

	}
}

let heroi1 = new Heroi("Merlin", 360, "Mago");
heroi1.atacar();

let heroi2 = new Heroi("Arthur", 320, "Guerreiro");
heroi2.atacar();

let heroi3 = new Heroi("Shiho", 233, "Ninja");
heroi3.atacar();

let heroi4 = new Heroi("Li", 245, "Monge");
heroi4.atacar();

