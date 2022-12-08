const alunos = [
    { nome: 'João', nota: 5, bolsista: false },
    { nome: 'Maria', nota: 2, bolsista: true },
    { nome: 'Pedro', nota: 3, bolsista: true },
    { nome: 'Gabriel', nota: 10, bolsista: false },
    { nome: 'Diogo', nota: 8, bolsista: false },
    { nome: 'Rogerio', nota: 2, bolsista: true }
]

//      PRIMEIRO TESTE
// const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {  
//     console.log(acumulador, atual)
//     return acumulador + atual  
// })
 
// console.log(resultado)

//      SEGUNDO TESTE
// const resultado = alunos.map(alun => alun.nota).reduce(function(primeiroTermo, segundoTermo) {
//     console.log(primeiroTermo, segundoTermo)
//     return primeiroTermo + segundoTermo
// })

// console.log(resultado)

//          TERCEIRO TESTE
// const resultado = alunos.map(qualquercoisa => qualquercoisa.nota).reduce(function(antes, depois) {
//     console.log(antes, depois)
//     return antes + depois
// })

// console.log(resultado)

//         QUARTO TESTE

const resultado = alunos.map(al => al.nota).reduce(function(um, dois) {
    console.log(um, dois)
    return (um + dois)
})

console.log(resultado)