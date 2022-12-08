Array.prototype.map2 = function(callback) {
    const newArray = []                 // criação de um array sozinho
    for (let i = 0; i < this.length; i++) {    // percorri o array original usando This   
        newArray.push(callback(this[i], i, this))   // Dentro de cada operação chamei 
                                                    // chamei a callback passando o 
                                                    // elemento atual, indice e o array original
                                                    // o resultado colocou dentro de newArray e 
                                                    // por fim mostrou o newArray
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retonar um array apenas com os preços

// transformando para objeto com o json

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)