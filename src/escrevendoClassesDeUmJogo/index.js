class heroiDeUmaAventura {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    // Verifica se o tipo está definido antes de chamar toLowerCase
    if (this.tipo) {
      // Define o ataque com base no tipo
      if (this.tipo.toLowerCase() === 'mago') {
        ataque = 'magia';
      } else if (this.tipo.toLowerCase() === 'guerreiro') {
        ataque = 'espada';
      } else if (this.tipo.toLowerCase() === 'monge') {
        ataque = 'artes marciais';
      } else if (this.tipo.toLowerCase() === 'ninja') {
        ataque = 'shuriken';
      } else {
        ataque = 'ataque desconhecido'; // Para tipos não especificados
      }
      // Exibe a mensagem de ataque
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    } else {
      console.log('Tipo de herói não definido.');
    }
  }
}

// Criando instâncias da classe e testando o método atacar
let heroi1 = new heroiDeUmaAventura('Artur', 28, 'Guerreiro');
heroi1.atacar();

let heroi2 = new heroiDeUmaAventura('Merlin', 34, 'Mago');
heroi2.atacar();

let heroi3 = new heroiDeUmaAventura('Li', 25, 'Monge');
heroi3.atacar();
let heroi4 = new heroiDeUmaAventura('Shin', 22, 'Ninja');
heroi4.atacar();

// Teste com tipo indefinido
let heroi5 = new heroiDeUmaAventura('Sem Tipo', 30, undefined);
heroi5.atacar();
