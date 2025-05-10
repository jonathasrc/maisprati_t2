# maisprati_t2

### 📄 Como executar a atividade do diretorio modulo_1?
Este arquivo contém diversos algoritmos separados por comentários (`/* ... */`). Para testar qualquer um deles, siga estas instruções:

#### **1️⃣ Configuração**
1. **Instale o Node.js** (caso ainda não tenha).  
   - Baixe a versão [Node.js LTS](https://nodejs.org) e instale.
   - Verifique a instalação no terminal:
     ```bash
     node -v
     ```

2. **Instale o pacote `prompt-sync`** (necessário para entrada do usuário no terminal).  
   ```bash
   npm install prompt-sync
   ```

3. **Escolha um editor de código**, como **Visual Studio Code (VSCode)**.

---

#### **2️⃣ Como testar um algoritmo?**
1. **Abra o arquivo** onde o código está salvo (`exercicios.js` ou outro nome que desejar).
2. **Descomente** o algoritmo que deseja testar.  
   - Para isso, **remova** as `/* */` antes e depois do bloco de código correspondente.
3. **Execute o script no terminal:**  
   ```bash
   node exercicios.js
   ```

---

#### **3️⃣ Exemplo**
Se quiser rodar o algoritmo que verifica se um número é **par ou ímpar**, basta:
1. **Descomentar** este trecho:
   ```javascript
   const prompt = require("prompt-sync")();
   const evenOrOdd = number => number % 2 === 0 ? "Par" : "Ímpar";
   let number = Number(prompt("Informe um número inteiro: "));
   console.log(evenOrOdd(number));
   ```

2. **Rodar no terminal:**  
   ```bash
   node exercicios.js
   ```

Agora, basta escolher os exercícios que deseja testar!  Se precisar de mais detalhes, me avise. 

