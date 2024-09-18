const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Função para calcular o percentual de representação de cada estado
function calcularPercentuais(faturamento) {
    const totalFaturamento = Object.values(faturamento).reduce((acc, val) => acc + val, 0);
    const percentuais = {};

    for (const estado in faturamento) {
        percentuais[estado] = ((faturamento[estado] / totalFaturamento) * 100).toFixed(2);
    }

    return { totalFaturamento, percentuais };
}

// Calcula os percentuais
const { totalFaturamento, percentuais } = calcularPercentuais(faturamentoPorEstado);

// Exibe os resultados
console.log(`Total de faturamento: R$ ${totalFaturamento.toFixed(2)}`);
console.log('Percentual de representação por estado:');
for (const estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado]}%`);
}
