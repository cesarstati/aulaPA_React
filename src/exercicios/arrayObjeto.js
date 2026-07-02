const usuarios = [
  { id: 1, nome: "Aline", idade: 25 },
  { id: 2, nome: "Bruno", idade: 30 },
  { id: 3, nome: "Carla", idade: 22 }
];

const nome = usuarios.map(item => {
  return item.nome
}
    )

console.log(nome)