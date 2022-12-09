// ES8: Object.values/Object.entries
// const obj = { a: 1, b: 2, c: 3 }
// console.log(Object.values(obj)) // Retorna os Valores de cada Chave do array.
// console.log(Object.entries(obj)) // Array de arrays. Cada array tem o Chave e Valor.

// Melhorias na Notação Literal
// const nome = 'Carla'
// const pessoa = {
//     nome, 
//     ola() {
//         return 'Oi gente!'
//     }
// }
// console.log(pessoa.nome, pessoa.ola())

//  PRIMEIRO TESTE SOZINHO
// const nome = 'Gabriel'
// const nomeCompleto = {
//     nome,
//     saudacao() {
//         return '? Que nome dahora!!'
//     }
// }
// console.log(nomeCompleto.nome, nomeCompleto.saudacao())

// SEGUNDO TESTE SOZINHO
// const nome = 'Diogo'
// const nomeCompleto = {
//     nome,
//     complemento() {
//         return '? Nome muito louco!'
//     }
// }
// console.log(nomeCompleto.nome, nomeCompleto.complemento())

// Class - ela internamente vai ser convertida para uma função

// PRIMEIRO EXEMPLO
class Animal {}
class Cachorro extends Animal {
    latir() {
        return 'Au au!'
    }
}

console.log(new Cachorro().latir())

// SEGUNDO EXEMPLO
class Felino {}
class Gato extends Felino {
    miar() {
        return 'Miaaau!'
    }
}

console.log(new Gato().miar())

// TERCEIRO EXEMPLO
class Passaro {}
class Papagaio extends Passaro {
    cantar() {
        return 'ÁÁAaaa ÁÁÁÁa'
    }
}

console.log(new Papagaio().cantar())

// QUARTO EXEMPLO
class Personagem {}
class Rammus extends Personagem {
    fala() {
        return `TA, OK!`
    }
}

console.log(new Rammus().fala())