const produto = {
    nome: 'Caneta Bic Preta',
    preco: 1.90,
    desconto: 0.05
}

function clone(objeto) {
    return { ...objeto }
}

const novoProdutoDesconto = clone(produto)
novoProdutoDesconto.nome = 'Caneta Bic Azul'
novoProdutoDesconto.desconto = 0.1

const novoValor = clone(produto)
novoValor.preco = 2.50

const novoDesconto = clone(produto)
novoDesconto.desconto = 0.1


console.log(produto, novoProdutoDesconto)
console.log(produto, novoValor)
console.log(produto, novoDesconto)

