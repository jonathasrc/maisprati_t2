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
// let count = 0
// let randomNumber = NaN
// let guess = null
// let hit = false

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// console.log("Seja bem-vindo ao jogo de adivinhação")
// randomNumber = getRandomInt(100

// )
// console.log(randomNumber);

// function guessingGame() {
//     count++

//     guess = parseInt(prompt("Infome seu palpite: "))
//     // console.log(guess)
//     // console.log(typeof guess)

//     if (isNaN(guess)) {
//         console.log("Entrada errada. Digite um numero")
//     }

//     if (guess === randomNumber) {
//         hit = true
//         console.log(`Voce Acertou em ${count} tentativas!`)
//     }else if (guess > randomNumber){
//         console.log("Palpite é mais alto")
//     }else{
//         console.log("Palpite é mais baixo")
//     }
// }

// while (hit === false) {
//     guessingGame()
// }



/* 3. Palavras Únicas
 Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
 todas as palavras únicas e exibi-las em um array.*/

// Posso perder a questão por não utilizar if/else :(

// let message = "olá olá mundo mundo"

// function uniqueWords(str) {
//     let arr_strings = str.split(" ")
//     set_strings = new Set(arr_strings)

//     for (let item of set_strings) console.log(item);
// }

// uniqueWords(message)
//refs: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set

/* Seção 2: Funções e Recursão
4. Fatorial Recursivo
Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
um Error, e n === 0 retornando 1. */

// function factorial(n){
//     if(n < 0){
//         throw new Error("fatorial não funciona para números negativos")
//     }

//     if(n === 0){
//         return 1
//     }

//     return n * factorial(n-1)
// }

// try {
//   console.log(`O fatorial de 5 é: ${factorial(5)}`);
// } catch(err){
//     console.error(`Erro: ${err.message}`)
// }

// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.
// refs: https://medium.com/@vemlavaralouca/debounce-javascript-b4c99ec4b13f
// const logFactorial = () => {
//     console.log(factorial(5))
//     console.log("Isso foi executado apos 500ms")
// }

// function debounce(func, delay) {
//   let timeoutId;

//   return function (...args) {
//     clearTimeout(timeoutId);

//     timeoutId = setTimeout(() => {
//       func.apply(this, args);
//     }, delay);
//   };
// }

// const debounceLogFactorial = debounce(logFactorial, 5000)
// debounceLogFactorial()



/* 6. Memoization
Implemente function memoize(fn) que armazene em cache chamadas
anteriores de fn (por argumentos), retornando resultados instantâneos em
repetidas invocações. */

// refs: https://medium.com/trainingcenter/memoization-com-javascript-direto-ao-ponto-82044cf100c7

// const memoize = fn => {
//     const cache = new Map();

//     return (...args) => {
//         const key = `key-${args.join('-')}`;

//         if (!!cache[key]) {
//             console.log('retornando do cache')
//             console.log(cache[key])
//             return cache[key]
//         }

//         const result = fn && fn(...args);
//         console.log('executando funcao')
//         cache[key] = result;
//         console.log(key, result)
//         return result;
//     }
// }

// const sumNumber = (a, b) => {
//     return a + b;
// }

// const memoizer = memoize(sumNumber); //criando a instancia do memoizer configurado para a função somarNumeros

// memoizer(2, 2); 
// memoizer(2, 2);

// Seção 3: Arrays e Objetos Complexos
/* 7. Mapeamento e Ordenação
Dado um array produtos = [{ nome, preco }, ...], crie uma função que
retorne um novo array apenas com os no, ordenados por preço
crescente, usando map, sort. */
// refs:// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// const products = [
//     { nome: 'Teclado', preco: 120.50 },
//     { nome: 'Mouse', preco: 50.00 },
//     { nome: 'Monitor', preco: 750.99 },
//     { nome: 'Computador', preco: 1500.00 },
//     { nome: 'Cadeira', preco: 450.00 }
// ]

// const productsCopy = [...products]
// const productsOrdered = productsCopy.sort((a,b) => a.preco - b.preco)
// const namesOrdered = productsOrdered.map(products => products.nome)
// console.log(namesOrdered)


/* 8. Agrupamento por Propriedade
Em vendas = [{ client, amount }, ...], use reduce para gerar um objeto onde
cada chave é um client e o valor é a soma de todos os seus amount. */
// const sales = [
//   { client: 'Ana', amount: 100 },
//   { client: 'Bruno', amount: 250 },
//   { client: 'Ana', amount: 50 },
//   { client: 'Carlos', amount: 120 },
//   { client: 'Bruno', amount: 150 },
//   { client: 'Ana', amount: 75 }
// ];

// function groupSalesByCustomer (sales){
//     return sales.reduce((accumulator,sale) => {
//         const {client, amount} = sale

//         if (accumulator[client]){
//             accumulator[client] += amount
//         } else{
//             accumulator[client] = amount
//         }

//         return accumulator
//     }, {});
// }

// const amountByClient = groupSalesByCustomer(sales)
// console.log(amountByClient)


// 9. Conversão Entre Formatos
// Escreva duas funções:

// ○ paresParaObjeto(produtospares) recebe um array de pares [ [chave,
// valor], ... ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de
// pares.

//refs: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
function pairForObject(obj){
    return Object.entries(obj)
}

function arrForObject(arr){
    return Object.fromEntries(arr)
}


const product = {
  name: 'Notebook ',
  price: 5500.99,
  status: 'new'
};

const productsPair = pairForObject(product)
console.log(productsPair)

const objectPair = arrForObject(productsPair)
console.log(objectPair)

