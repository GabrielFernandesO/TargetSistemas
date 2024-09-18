// Função para inverter uma string
function inverterString(str) {
    let stringInvertida = '';
    
    // Itera sobre a string do final para o início
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i]; // Adiciona cada caractere à nova string
    }
    
    return stringInvertida;
}

// Exemplo de uso
const entrada = "Olá, Mundo!"; // Você pode alterar essa string
const resultado = inverterString(entrada);

console.log(`String original: ${entrada}`);
console.log(`String invertida: ${resultado}`);
