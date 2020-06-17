const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "css"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ];

function checaSeUsuarioUsaCSS (usuario) {
    for (let i = 0; i < usuario.tecnologias.length; i++) {
        // Checagem considerando todos os tipos de escrita de CSS!
        if (usuario.tecnologias[i].toUpperCase() === "CSS") {
            return true
        }
    }
    return false
}

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);
  
    if (usuarioTrabalhaComCSS) {
      console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    }
  }