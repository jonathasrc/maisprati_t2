const prompt = require("prompt-sync")()

// 1. Validação de Datas
/* Crie a função isValidData(dia, mes, ano) que retorne true se os valores
 formarem uma data real (meses de 28–31 dias, ano bissexto para
 fevereiro) e false caso contrário. */

// console.log("Hello World!")

// function isLeapYear(yyyy) {
//     return (yyyy % 4 === 0 && yyyy % 100 !== 0) || (yyyy % 400 === 0);
// }
// function isValidData(dd, mm, yyyy) {
//     if (mm < 1 || mm > 12 || dd < 1 || yyyy < 1) {
//         return false;
//     }

//     const dayInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

//     if (isLeapYear(yyyy)){
//         dayInMonth[2] = 29
//     }

//     return dd <= dayInMonth[mm]

// }


// console.log(`A data 20/13/2023 é real? ${isValidData(20, 13, 2023)}`); // false
// console.log(`A data 29/02/2024 é real? ${isValidData(29, 2, 2024)}`); // true (2024 é bissexto)
// console.log(`A data 29/02/2023 é real? ${isValidData(29, 2, 2023)}`); // false (2023 não é bissexto)

/* 2. Jogo de Adivinhação
Escreva um script que gere um número aleatório de 1 a 100 e peça ao
usuário, para adivinhar. Use while para repetir até acertar, contando
 tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado. */
let count = 0
let randomNumber = NaN
let guess = null
let hit = false

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log("Seja bem-vindo ao jogo de adivinhação")
randomNumber = getRandomInt(100

)
console.log(randomNumber);

function guessingGame() {
    count++
    
    guess = parseInt(prompt("Infome seu palpite: "))
    // console.log(guess)
    // console.log(typeof guess)

    if (isNaN(guess)) {
        console.log("Entrada errada. Digite um numero")
    }

    if (guess === randomNumber) {
        hit = true
        console.log(`Voce Acertou em ${count} tentativas!`)
    }else if (guess > randomNumber){
        console.log("Palpite é mais alto")
    }else{
        console.log("Palpite é mais baixo")
    }
}

while (hit === false) {
    guessingGame()
}



/* 3. Palavras Únicas
 Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
 todas as palavras únicas e exibi-las em um array.*/

// Seção 2: Funções e Recursão
// 4. Fatorial Recursivo
// Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
// um Error, e n === 0 retornando 1.
// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.
// 6. Memoization
// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.

// Seção 3: Arrays e Objetos Complexos
// 7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os no, ordenados por preço
// crescente, usando map, sort.
// 8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.
// 9. Conversão Entre Formatos
// Escreva duas funções:

// ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
// valor], ... ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de
// pares.