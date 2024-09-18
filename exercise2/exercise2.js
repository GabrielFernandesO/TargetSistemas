//Função para rodar a sequência de fibonacci até o número que o usuário digitou

function fibonacci(n) {
    const fib = [0, 1]; 
    while (true) {
        const next = fib[fib.length - 1] + fib[fib.length - 2]; 
        if (next > n) break; 
        fib.push(next); 
    }
    return fib; 
}

function verificaFibonacci(num) {
    const fibSequence = fibonacci(num);
    if (fibSequence.includes(num)) {
        console.log(`${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${num} não pertence à sequência de Fibonacci.`);
    }
}


//Numero para verificação

const numero = 3 
verificaFibonacci(numero);
