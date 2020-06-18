const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ];

  for (const user of usuarios) {
      console.log(`${user.nome} trabalha com ${user.tecnologias}`)
  }

function checaSeUsuarioUsaCss(paramTech){
    for (const tech of paramTech) {
        if (tech === "CSS"){
            return true
        }
    }
}

for (const user of usuarios) {
    checaSeUsuarioUsaCss(user.tecnologias) ? console.log(`O Usuário ${user.nome} trabalha com CSS.`): ""
}