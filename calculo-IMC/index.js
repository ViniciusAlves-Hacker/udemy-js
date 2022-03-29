const form = document.querySelector('#form');

form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
})

function criaP (){
    const p = document.createElement('p');
    return p
}

function setResultado (mensagem){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
    
}


//     const peso = document.querySelector('#peso');
//     const altura = document.querySelector('#altura');

// function calculoImc (peso, altura){

//     const resultado = peso.value / (altura.value *altura.value)

//     if(resultado <18.5){
//         console.log('Abaixo do peso');
//     } else if (resultado >= 18.5 || resultado<=24.9){
//         console.log('Peso normal');
//     } else if (resultado >= 25 || resultado<=29.9){
//         console.log('Sobrepeso');
//     } else if (resultado >= 30 || resultado<=34.9){
//         console.log('Obesidade grau 1');
//     } else if (resultado >= 35 || resultado<=39.9){
//         console.log('Obesidade grau 2');
//     } else if (resultado >= 40){
//         console.log('Obesidade grau 3');
//     }

//     return resultado.toFixed(2)
// }

// console.log(calculoImc(75, 175));