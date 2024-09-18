const fs = require('fs');
const path = require('path');

// Define o caminho para o arquivo JSON
const filePath = path.join(__dirname, 'faturamento.json');

// Lê o arquivo JSON
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }

    const faturamentoData = JSON.parse(data);
    const faturamentoDiario = faturamentoData.faturamento;

    function calcularFaturamento(faturamento) {
        const valoresValidos = faturamento
            .map(entry => entry.valor)
            .filter(valor => valor > 0); // Ignora dias sem faturamento

        if (valoresValidos.length === 0) {
            console.log('Não há dias com faturamento válido.');
            return;
        }

        const menorValor = Math.min(...valoresValidos);
        const maiorValor = Math.max(...valoresValidos);
        const mediaMensal = valoresValidos.reduce((acc, val) => acc + val, 0) / valoresValidos.length;
        
        const diasAcimaDaMedia = valoresValidos.filter(valor => valor > mediaMensal).length;

        return {
            menorValor,
            maiorValor,
            diasAcimaDaMedia
        };
    }

    const resultado = calcularFaturamento(faturamentoDiario);

    console.log(`Menor valor de faturamento: ${resultado.menorValor}`);
    console.log(`Maior valor de faturamento: ${resultado.maiorValor}`);
    console.log(`Número de dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);
});
