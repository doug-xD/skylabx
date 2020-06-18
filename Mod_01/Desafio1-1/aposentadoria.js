const          nomeF = "Silvana"
const          sexoF = "F"
const         idadeF = 48
const  contribuicaoF = 30

const          nomeM = "Joseph"
const          sexoM = "M"
const         idadeM = 65
const  contribuicaoM = 35

homemApto = ((idadeM + contribuicaoM) >= 95) && (contribuicaoM >= 35)
mulherApta = ((idadeF + contribuicaoF) >= 85) && (contribuicaoF >= 30)

 function checkAptidao(paramNome, paramApto){
     return paramApto ? `Olá ${paramNome}, você pode se aposentar!` :  `Olá ${paramNome}, você ainda não pode se aposentar!`
 }

 console.log(checkAptidao(nomeF, mulherApta))
 console.log(checkAptidao(nomeM, homemApto)) 