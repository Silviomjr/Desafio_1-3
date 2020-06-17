const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
];

function somaNumeros(numeros) {
    let somaTotal = 0;
    for (var i in numeros) {
        
        somaTotal = somaTotal + numeros[i]
    }
    return somaTotal
}

function calculaSaldo(receitas, despesas) {
    let receitaTotal = somaNumeros(receitas);
    let despesaTotal = somaNumeros(despesas);
    return receitaTotal - despesaTotal
}

for (let i in usuarios) {
    let saldo = calculaSaldo(usuarios[i].receitas, usuarios[i].despesas);
    saldo = saldo.toFixed(2)
    if (saldo > 0) {
        console.log(`${usuarios[i].nome} possui saldo POSITIVO de ${saldo}`);
    } else if(saldo < 0) {
        console.log(`${usuarios[i].nome} possui saldo NEGATIVO de ${saldo}`);
    } else {
        console.log(`${usuarios[i].nome} possui saldo ZERADO)`);
    }
}