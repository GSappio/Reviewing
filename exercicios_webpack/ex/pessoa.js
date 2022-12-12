// Não existe class em JavaScript, na verdade é apenas uma 
// forma diferente de escrever uma função.

export default class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    toSring() { 
        return `Pessoa: ${this.nome}`
    }
}