const json = require("./json");

let pets = [
    {
      nome: 'Yoshi',
      tipo: 'cachorro',
      raca: 'Akita inu',
      idade: 6,
      genero: 'Masculino',
      vacinado: true,
      servicos: []
    },
    {
      nome: 'Pituco',
      tipo: 'pássaro',
      raca: 'calopsita',
      idade: 3,
      genero: 'Fêmea',
      vacinado: false,
      servicos: []
    }
  ];
  
  // Desafio - criar uma funcao callback chamada servicosPrestados que tenha como dois servicos: 
  // dar banho no pet e tosar o pet
  // sendo assim teremos sempre que passar um pet da nossa lista de pets e tambem um servico que aquele pet ira utilzar
  // servicosPrestados(pets[0].nome, darBanhoNoPet)
  // servicosPrestados(pets[0].nome, tosarPet)
  
  // Deveremos executar um aviso dentro das funcoes callback darBanhoNoPet e tosarPet, como o exemplo abaixo:
  //   console.log(O servico de tomar banho foi realizado com sucesso no pet + yoshi)
  //   console.log(O servico de tosa foi realizado com sucesso no pet  + yoshi)
  
  // Terá que ser criada uma nova propriedade dentro de cada pet chamada servicos que armazene todos servicos realizados
  function servicosPrestados(pet, servicoRealizado){
    servicoRealizado(pet)
  }
  
  // Desafio 1 - identificar qual a data que os servicos foram realizados
  function darBanhoNoPet(pet){
    let data = new Date();
    data = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
    pet.servicos.push("banho na data " + data);
    console.log("O pet " + pet.nome + " tomou banho");
  }
  
  function tosarPet(pet){
    let data = new Date();
    data = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
    pet.servicos.push("tosa na data " + data);
    console.log("O pet " + pet.nome + " foi tosado");
  }
  
  // servicosPrestados(pets[0], darBanhoNoPet)
  // servicosPrestados(pets[0], tosarPet)

//Desafio - criar uma função que adicione todos esses pets da lista que esta contida na constante json
//dentro da nossa lista de pets qye é a variável pets. Lembrando que: não precisa ter validação de dados,
//por qual motivo ? No json não temos as propriedades vacinado, serviços.
//dica: utilizar JSON.parse na sua string json para transformá-lo em um array de objetos válidos.

function cadastrarPetsSpreadOperator(pets, json){
 let arrayPetsJson = JSON.parse(json);
pets.push(...arrayPetsJson)

return pets
}

// outra forma de fazer

function cadastrarPetsFor(pets,json){
    let arrayPetsJson = JSON.parse(json)

    for (let index = 0; index < arrayPetsJson.length; index ++){
        pets.push(arrayPetsJson[index])
    }

    return pets
}

//console.log(cadastrarPetsSpreadOperator(pets, json))
//console.log(cadastrarPetsFor(pets, json))

//Desafio - Crie uma função filtrarPetPorNome, que quando receber um parâmetro que será uma string
//irá filtrar um pet por nome e retorná-lo e se não, irá retornar que não existe o pet na lista.

function filtrarPetPorNome(lista, nomePet){
    let petsFiltrado = lista.filter((pet) => {
return pet.nome == nomePet
});

if(petsFiltrado.length > 0){
    return petsFiltrado
} else {
return "Nenhum pet foi encontrado com o nome " + nomePet

 }
}
console.log(filtrarPetPorNome(pets, 'Yoshi'))