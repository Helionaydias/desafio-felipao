function verSaldoVitorias(vitorias, derrotas) {
  // 1. Calcular o saldo de vitórias e derrotas
  let saldoRankeados = vitorias - derrotas;

  // Variável para armazenar o nível
  let nivel;

  // 2. Determinar o nível baseado no número de vitórias
  if (vitorias <= 10) {
    nivel = 'Ferro';
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = 'Bronze';
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = 'Prata';
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = 'Ouro';
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = 'Diamante';
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = 'Lendário';
  } else {
    nivel = 'Imortal';
  }

  // 3. Retornar a mensagem formatada
  return `O Herói tem de saldo de ${saldoRankeados} e está no nível de ${nivel}`;
}

// Chamar a função com exemplo de vitórias e derrotas
let resultado = verSaldoVitorias(100, 5);
console.log(resultado); // Exibe o resultado no console
