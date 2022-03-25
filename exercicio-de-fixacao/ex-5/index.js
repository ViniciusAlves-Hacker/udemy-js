//----------------------------------TREINANDO----------------------------
// function saudacao(nome){
//     console.log(`Bom dia, ${nome}`)
// }
// saudacao('Vinicius')

// const nome = prompt('Qual seu nome: ')
// console.log(`Bom dia, ${nome}`);


// function saudacao (){
//     const nome = prompt('Qual seu nome? ')
//     console.log(`Bom dia, ${nome}`);
// }

// function soma (x, y){
//     let resultado = x +y;
//     console.log(resultado);
//     return resultado;    
// }

// soma(10, 55)

// const raiz = function(n){
//     return n ** 0.5;
// };

// console.log(raiz(9));

// const raiz = n => n ** 0.5;

// console.log(raiz(25));




// 5- Exercicios para função, array e objetos
function meuEscopo (){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')

    const pessoas = [];

    function recebeEventoForm (evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        
        console.log(pessoas);
        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}  </p>`
    }

    form.addEventListener('submit', recebeEventoForm);


    // console.log(pessoas);
}

meuEscopo();
