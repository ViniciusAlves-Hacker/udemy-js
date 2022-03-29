// Escreva uma funcao que receba 2 numero e retorne o maior valor  
function max (x, y) {
    if(x > y){
        return x;
    }else {
      return y;  
    }
}

console.log(max(10, 7));

//refatorando
function max1 (x, y) {
    return x > y ? x : y;
}

console.log(max(16, 52));

//utilizando arow function
const max2 = (x, y) => x > y ? x : y;

console.log(max(45, 28));

// Escreva uma funcao para demonstrar se a  imagem esta em modo paisagem ou em mode retrato
const paisagem = (largura, altura) => largura > altura;

console.log(paisagem(1800, 1080));


//Escreva uma funcao que receba um numero e retorne o seguinte:
//Numero divisivel por 3 = Fizz
//Numero divisivel por 5 = Buzz
//Numero divisivel por 3 e 5 = FizzBuzz
//Numero nao e divisivel por 3 e 5 = retorna o proprio numero
//Checar se o numero realmente e um numero = retorna o proprio numero
//Use funcao com numeros de 0 a 100


function fizBuzz (numero) {
    if (typeof numero !== "number"){
        return numero;
    }if (numero % 3 === 0 && numero % 5 === 0){
        return "FizzBuzz";
    }if (numero % 3 === 0){
        return "Fizz";
    }if (numero % 5 === 0){
        return "Buzz";
    }return numero
}

console.log(fizBuzz(15));