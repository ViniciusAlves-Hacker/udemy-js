// 1- alert, confirm, prompt (navegador)--------------------------------------
let num1 = prompt('Digite um numero:');
let num2 = prompt('Digite outro numero:');

console.log(num1);
console.log(num2);

num1 = Number(num1);
num2 = Number(num2);

alert(`O resultado da sua soma foi: ${num1 + num2}`);
