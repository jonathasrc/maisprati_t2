const prompt = require("prompt-sync")()
/* 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
 utilizando uma estrutura de controle if. */


// function evenOrOdd(number) { return number % 2 == 0? "Par" : "Impar"}
// const evenOrOdd = number => number % 2 === 0 ? "Par" : "Impar";
// let number = prompt("Informe um numero inteiro: ")
// console.log(evenOrOdd(number))

//------------------------------------------------------------------------------

/* 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
 adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
 controle if-else. 
 
 Obs: Comportamento estranho retorna sempre crinça
 
- Se você clicar em "Cancelar" no prompt, ele retorna null → Number(null) vira 0

- Se digitar um valor não numérico (ex: "abc"), Number("abc") retorna NaN

- NaN < 0 → é falso, mas NaN >= 0 && NaN <= 12 também é falso → pode cair no else ou comportamento inesperado
 */

//  function ageGroup(age) {
//     if (age < 0) {
//         return "Inforome uma valor maior 0 ou igual a zero"
//     } else if (age >=0 && age <= 12){
//         return "Criança"
//     } else if (age > 12 && age < 18){
//         return "Adolescente"
//     }else{
//         return "Adulto"
//     }
//  }

// let age = NaN
// age = Number(prompt("Informe uma idade: ").trim())

// if (isNaN(age)) {
//     console.log("Valor invalido. Informe um numero: ")
// }else{
//     console.log(ageGroup(age))  
// }

//----------------------------------------------------------------------------

/* 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
 "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if. *
 
Obs: Comportamento estranho quando não se inclui nenhum valor entra no primeiro if


 */

// function evaluate(grade) {
//     if (grade < 0 | grade > 10) {
//        console.log("Infome uma nota de 0 a 10") 
//     } else if (grade >=0 && grade <= 4){
//         return "Reprovado"
//     } else if (grade > 4 && grade <= 6){
//         return "Recuperação"
//     }else if (grade > 6 && grade <= 10) {
//         return "Aprovado"
//     }
//  }

// let grade = NaN
// grade = prompt("Informe uma nota: ").trim
// if (isNaN(grade)) {
//     console.log("Valor invalido. Informe um numero: ")
// }else{
//     console.log(evaluate(grade))  
// }


//-----------------------------------------------------------------------------
/* 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada. */

// let input = null;
// do{
//     input = parseInt(prompt("Informe uma opção: "), 10)  // (radix) segundo argumento para especificar base matematica
//     switch (input) {
//         case 1:
//             console.log("Opção 1")
//             break;
//         case 2:
//             console.log("Opção 2")
//             break;
//         case 3:
//             console.log("Opção 3")
//             break;
//         default:
//             if (input !== 0) {
//                 console.log("Opção inválida!");
//             }
//             break;
//     }
// }while (input !== 0);

// console.log("fim")


/* 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else. */

// let weight = Number(prompt("Informe seu peso em kg (Exemplo: 80): "))
// let height = Number(prompt("Infome sua altura em metros(Exemplo: 1.8): "))

// let IMC = weight / Math.pow(height,2)
// console.log("IMC: ", IMC)

// -----------------------------------------------------------------------------

/* 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
 Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C) */

// function isTriangle (a, b, c) {
//     return (a < b + c) && (b < a + c) && (c < a + b) 
// }
// function triangleType (a, b, c) {
//     if (!isTriangle(a, b,c )){
//         return "Não é triangulo"
//     }

//     if (a === b && b === c) {
//         return "Triângulo Equilátero"
//     } else if (a !== b && b !== c && c !== a) {
//         return "Triângulo Escaleno"
//     } else {
//         return "Triângulo Isósceles"
//     }
// }
// let a = prompt("Infome o lado a: ")
// let b = prompt("Infome o lado b: ")
// let c = prompt("Infome o lado c: ")

// console.log(triangleType(a,b,c));

// console.log(triangleType(2, 3, 5)); //  "Não é triângulo"
// console.log(triangleType(3, 3, 3)); // "Triângulo Equilátero"
// console.log(triangleType(3, 4, 5)); // "Triângulo Escaleno"
// console.log(triangleType(3, 3, 5)); // "Triângulo Isósceles"


/*7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se 
 forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
 compradas, calcule e escreva o valor total da compra. */

// let valueTotal = 0
// let countApple = Math.abs(prompt("Infome quantidades de maças: "))

// if (countApple < 12) {
//     valueTotal =  countApple * 0.30
// }else {
//     valueTotal = countApple *  0.25
// }

// console.log("O valor da compra: ", valueTotal) // 
// ------------------------------------------------------------------------------

/* 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente. */

// let x = prompt('Infome o primeiro numero: ')
// let y = prompt('Infome o segundo numero: ')
// let arrayNumber = [x, y]
// console.log(arrayNumber.sort())
// if(x > y) {
//     console.log(y, x)
// }else{
//     console.log(x, y)
// }

/* 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
utilizando um loop for. */
// let i = 10;

// const interval = setInterval(() => {
//     console.log(`Contagem regressiva: ${i}`);
//     i--;

//     if (i < 1) {
//         clearInterval(interval); // Para a execução quando `i` chega a 0
//         console.log("Fim da contagem!");
//     }
// }, 1000);

/* 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.*/
// let x = prompt("Informe um numero: ")

// for (let i = 0; i < 10; i++){
//     console.log(`Repetição ${i + 1}, numero ${x}`)
// }
// ------------------------------------------------------------------------------

/* 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
 utilizando um loop for.*/

//  let sum = 0
//  console.log("Informe cinco numeros")
//  for (let i = 0; i < 5; i++){
//     let x = Number(prompt(`Informe o numero ${i + 1} : `).trim())
//     sum += x
//  }
//  console.log(sum)
// -----------------------------------------------------------------------------

/* 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 
10) utilizando um loop for. */

// let x = prompt("Infome um numero para compor a tabuada: ")
// for(let i = 1; i <= 10; i++) console.log(`${x} X ${i} = ${x * i}`)


/* 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números. */

// let sum = 0
// let counter = 0
// let x = null
// do {
//    let x = Number(prompt("Informe um número: "))
//    if (x == 0) break

//    sum += x
//    counter++
// } while (x !== 0);

// console.log(sum/counter)

// -----------------------------------------------------------------------------

/* 14. Crie um programa que calcula o factorial de um número fornecido pelo usuário
 utilizando um loop for ou while. */

// let x = prompt("Infome um numero paro calculo de factorial")
// let factorial = 1

// while (x > 0) { 
//     factorial *= x
//     x--
// }

// console.log(`Fatorial: ${factorial}`);

// -----------------------------------------------------------------------------

 /* 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
 Fibonacci utilizando um loop for */

let fibonacci = 1
let anterior = 0

for (let i = 0; i < 10; i++) {
    console.log(fibonacci)
    let temp = anterior
    anterior = fibonacci
    fibonacci = temp + fibonacci
}

