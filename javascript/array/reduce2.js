const alunos = [
    { nome: 'João', nota: 5, bolsista: false },
    { nome: 'Maria', nota: 2, bolsista: true },
    { nome: 'Pedro', nota: 3, bolsista: true },
    { nome: 'Gabriel', nota: 10, bolsista: false },
    { nome: 'Diogo', nota: 8, bolsista: false },
    { nome: 'Rogerio', nota: 2, bolsista: true }
]

// Desafio 1: Todos os   alunos são bolsist?
// const todosBolsistas = (resultado, bolsista) => resultado && bolsista
// console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// // Desafio 2: Algum aluno é bolsista?
// const algumBolsista = (resultado, bolsista) => resultado || bolsista
// console.log(alunos.map(a => a.bolsista.reduce(algumBolsista)))

//          Fazendo solo
const todosBolsistas = (queroSaberResultado, bolsista) => queroSaberResultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))
