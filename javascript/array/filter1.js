// const produtos = [
//     { nome: 'Notebook', preco: 2499, fragil: true },
//     { nome: 'iPad Pro', preco: 4199, fragil: true },
//     { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
//     { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
//     { nome: 'Moto G60', preco: 1700, fragil: true},
//     { nome: 'Capacete', preco: 250.99, fragil: false}
// ]

// console.log(produtos.filter(function(p) {
//     return false
// }))

// const caro = produto => produto.preco >=500
// const fragil = produto => produto.fragil

// console.log(produtos.filter(caro).filter(fragil))


const funcionario = [
    { id: '1', nome: 'Gabriel S', cargo: 'estagiario', salario: '1200' },
    { id: '2', nome: 'Diogo', cargo: 'estagiario', salario: '1200' },
    { id: '3', nome: 'Mateus', cargo: 'estagiario', salario: '1200' },
    { id: '4', nome: 'Pedro', cargo: 'analista', salario: '3000' },
    { id: '5', nome: 'Thiago', cargo: 'estagiario', salario: '1200' },
    { id: '6', nome: 'Vinicius', cargo: 'analista', salario: '2500' }
]

// console.log(funcionario.filter(function(f) {
//     return true
// }))

const maiorSalario = patamar => patamar.salario >=2500
const menorCargo = pobre => pobre.cargo === 'estagiario'
const umIdEspecifico = esseCara => esseCara.id === '1'

// console.log(funcionario.filter(maiorSalario))
// console.log(funcionario.filter(menorCargo))
console.log(funcionario.filter(umIdEspecifico))


