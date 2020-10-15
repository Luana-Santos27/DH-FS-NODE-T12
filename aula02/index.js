let nome = "Pet Shop NodeJS DH"

console.log(nome)

let animais = ['Leão', 'Cavalo', 'Cachorro'];

let pessoa = {
    nome: 'Victor',
    idade: 99,
    professor: true
}

//Desafio 1 - Percorrer o array de animais da variável array e listá-los no terminal

for (let i = 0; i < animais.length; i++){ 
    console.log(animais[i]);
}

// Desafio 2 - percorrer o objeto da variável pessoa

for (let item in pessoa){
    console.log("Propriedade: "+ item + " valor da propriedade " + pessoa[item])
}
let pets = [
    {
      nome: 'Yoshi',
      tipo: 'cachorro',
      raca: 'Akita inu',
      idade: 6,
      genero: 'Masculino',
      vacinado: true
    },
    {
      nome: 'Pituco',
      tipo: 'pássaro',
      raca: 'calopsita',
      idade: 3,
      genero: 'Fêmea',
      vacinado: false
    }
  ];
  
  //Desafio 3 - Criar uma função que percorra a lista de pets e listar a seguinte mensagem para cada 
  //pet "Nome: nome DO Pet" e também uma mensagem para o tipo par cada pet "Tipo: tipo Do Pet"
// e por fim, retornar uma mensagem contendo a quantidade total de pets cadastrados no nosso sistema

function listarPets() {
 for(let i = 0; i < pets.length; i++){
   console.log("Nome:" + pets[i].nome + "\n" + "Tipo: " + pets[i].tipo);
  }
  console.log("Temos o total de " + pets.length + " pet(s) registrado(s) no sistema");
} 

listarPets()

//Desafio 4 - Criar uma função que adicione na nossa lista de pets,
// (adicionar elementos no arrya de objeto), lembrando, que teremos que fazder isso testando no terminal