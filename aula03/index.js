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


//Desafio 4.1 - criar uma validação para certficar se realemnte estamos recebendo um objeto para cadastrar
// o pet, caso tenha sido informado como parametro um objeto então iremos adicioná-lo, caso contrário,
//iremos exibir uma mensagem de erro "Informe um objeto válido para cadastrar um novo pet"

//Desafio 4.2 - Criar uma função de título valiDados que ira validar se o objeto passando como parametrp
//possui todas as propriedaades necessárias, que são: nome, tipo, raca, idade, genero e cacinado
//(lembrando que devemos validar a propriedade vacinado para receber apenas valores booleanos - true or false)

function validaDados(objetoPet){
return (
    typeof objetoPet.nome === 'string' &&
    typeof objetoPet.tipo === 'string' &&
    typeof objetoPet.raca === 'string' &&
    typeof objetoPet.idade === 'number' &&
    typeof objetoPet.genero === 'string' && 
    typeof objetoPet.vacinado === 'boolean'
  )
}

function cadastrarPet(objetoPet){
 if(typeof objetoPet == "object"){
     if(validaDados(objetoPet)){
    pets.push(objetoPet)
    console.log(pets)
 } else {
    console.log("O objeto informado não possui todas as propriedades necessárias")
     }
    } else {
    console.log("Informe um objeto válido para cadastrar um novo pet")
    }
}

let novoPet ={
    nome: 'Novo Pet',
    tipo: 'cachorro',
    raca: 'Akita inu',
    idade: 6,
    genero: 'Masculino',
    vacinado: true
}

//novoPet = "Vamos de NodeJS"

//cadastrarPet(novoPet)


function calcular(numero1, numero2, operacao) {
operacao (numero1,numero2)
console.log("A operação foi realizada com sucesso")
}

function soma(numero1,numero2){
    console.log(numero1 + numero2)
}

calcular(10, 20, soma)