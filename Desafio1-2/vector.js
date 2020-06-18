const coder = {
    nome: "Ode Jhon",
    idade: 35,
    skill: [
        {nome: 'C++', espec: 'Desktop'},
        {nome: 'Java', espec: 'Mobile'}
    ]
}

console.log(`O usuário ${coder.nome} tem ${coder.idade} anos, e usa a tecnologia ${coder.skill[0].nome} com especialidade em ${coder.skill[1].espec}.`)