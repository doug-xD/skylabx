const   nome = "Carlos"
const   peso = 84
const altura = 1.88

function calculaIMC(paramPeso, paramAltura){
    return paramPeso / (paramAltura * paramAltura)
}

function resolveIMC(paramImc){
    return paramImc < 30 ? `Atenção ${nome}, você esta acima do peso!` :  `Por enquanto ${nome}, você esta com o peso ideal!`
}

console.log(resolveIMC(calculaIMC(peso, altura)))




