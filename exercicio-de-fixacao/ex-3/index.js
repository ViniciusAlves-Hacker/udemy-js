// 3- Exercicio com string-------------------------------------------------------
const nomeCompleto = prompt('Digite seu nome: ');
        document.body.innerHTML += `O seu nome é ${nomeCompleto} <br/>`;
        document.body.innerHTML += `Seu tome tem ${nomeCompleto.length} letras <br/>`;
        document.body.innerHTML += `A segunda letra do seu nome é: ${nomeCompleto.charAt(1)} <br/>`;
        document.body.innerHTML += `Qual o primeiro indice da letra c do seu nome? ${nomeCompleto.indexOf('c')}<br/>`;
        document.body.innerHTML += `Qual o ultimo indice da letra u do seu nome? ${nomeCompleto.lastIndexOf('u')}<br/>`;
        document.body.innerHTML += `As ultimas 3 letras do seu nome sao: ${nomeCompleto.slice(-3, nomeCompleto.length)}<br/>`;
        document.body.innerHTML += `As palavras do seu nome sao: ${nomeCompleto.split(' ')}<br/>`;
        document.body.innerHTML += `Seu nome com letra maiuscula: ${nomeCompleto.toUpperCase()}<br/>`;
        document.body.innerHTML += `Seu nome com letra minuscula ${nomeCompleto.toLowerCase()}<br/>`;