// METODOS DE ARRAY

const array = [1,2,3,4,5];

// Percorrer arrays
for (const i of array){
  console.log('for', i)
}

const novoArray = [];

array.forEach(item =>{
  console.log('forEach',item)
  novoArray.push(item * 2)
})

// MAP também percorre o array
// Diferença de usar o MAP é que consigo fazer o retorno de dentro do map, coisa que o forEach não proposiona
// Ex, não consigo retornar uma multiplicação para cada array usando o forEach, já o map eu consigo
const conta = array.map(item =>{
  if(item % 2 === 0){             // irá percorrer meu array e multiplicar somente os pares
    return item * 10
  }
  return item;
})

conta.forEach((item)=>{             // mostra o resultando do map em numbers separadamente
  console.log(item)
})

console.log('multiplicação ForEach', JSON.stringify(novoArray))
console.log('multiplicação MAP', conta)

// IMPORTANTE!
// Só utilizo o map() quando preciso transformar o meu array em uma outra informação, porém em outro array

let cachorro1;
let cachorro2;

const animais = [
  cachorro1 = {
    raca: 'puddol',
    preco: 120
  },
  cachorro2 = {
    raca: 'Pastor Alemão',
    preco: 300
  },
];

const animaisPrice = animais.map((animais, indice)=>{
  const index = `${indice + 1}, ${animais.preco}`
  return index
  })

animaisPrice.forEach((animais)=>console.log(animais))




// FILTER
// busca uma seleção de campos desse array (ele não altera os valores desse array, ele pega só pedaços desse array)
// só retornará parte de um array dado se essa condição que foi passado retornar true ou false
// se for true ele irá rodar

const novoArrayFilter = array.filter(item => item % 2 === 0)   // só vai me retornar isso que eu peço
console.log(novoArrayFilter)                                   // posso concatenar depois que filtrar com filter, usando o .map para multiplicar, por exemplo

const empresas = [
  {
    nome:'Samsung',
    valorDeMercado: 50,
    CEO: 'Kim Hyun Suk',
    anoDeCriacao: 1938,
  },
  { nome: 'Microsoft',
    valorDeMercado: 415,
    CEO: 'Satya Nadella',
    anoDeCriacao: 1975,
  },
  { nome: 'Intel',
    valorDeMercado: 117,
    CEO:'Brian Krzanich',
    anoDeCriacao: 1968,
  },
  { nome: 'Facebook',
    valorDeMercado: 383,
    CEO:'Mark Zuckerberg',
    anoDeCriacao: 2004,
  },
  { nome: 'Spotify',
    valorDeMercado: 30,
    CEO:'Daniel Ek',
    anoDeCriacao: 2006,
  },
  { nome: 'Apple',
    valorDeMercado: 845,
    CEO: 'Tim Cook',
    anoDeCriacao: 1976,
  }
];

const empresas2000 = empresas
.filter(empresas => empresas.anoDeCriacao >= 2000)
.map(empresas => `Nome da empresa: ${empresas.nome}, CEO: ${empresas.CEO}, Capital das duas: ${empresas.valorDeMercado}`)


console.log(empresas2000)



// EVERY
// retorna um booleano
// retorna true caso todos os itens satisfazem uma condição
// retorna false caso um dos itens no array não satisfaz uma condição

const every = array.every((array) => array >= 0);   // se todos forem maiores que 0, ele retornará true
console.log('se existe numero >= 0' ,every)


// SOME
// como se fosse o Every mas ele não verifica se todos satisfazem
// verifica se pelo menos um item satisfaz, nisso ele retorna true

const some = array.some((array) => array >= 5);     // se pelo menos existir um 5 ou maior que 5, ele retornará true
console.log('Se existe o numero 5 ou maior no vetor',  some)



// FIND e FINDINDEX
// fine serve para encontrar um item desse array
// caso não satisfaça a condição, ele retornará undefined

const par = array.find((array) => array %2 === 0)         // retonará o primeiro numero par
console.log('find (valor do primeiro par)', par)

// findindex é a mesma coisa que o find, mas a diferença é que
// ele retornará o indece do valor encontrado, diferente do find que retornará o valor

const findIndex = array.findIndex((array) => array %2 === 0);
console.log('findIndex (index do primeiro par)',  findIndex)




// REDUCE


