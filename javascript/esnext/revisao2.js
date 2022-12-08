// Arrow Function
const soma = (x, y) => x + y
console.log(soma(5, 10))

const multi = (x, y) => x * y
console.log(multi(5, 10))

const divi = (x, y) => x / y
console.log(divi(5, 10))

const sub = (x, y) => x - y
console.log(sub(5, 10))

// Arrow Fuction (this).
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parametro default.
function log(texto = 'Node') {
    console.log(texto)
}

log() // aqui assumiu o valor padrão.
log('Sou mais forte que o valo padrão atribuido ali em cima!')

// Operador 'rest' significa agrupar e o 'spread' significa espalhar. 
// Depende do contexto que você está trabalhando.
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))

function nomeCompleto(...pessoa) {
    let juntar = 'Seu nome completo é: '
    pessoa.forEach(n => juntar += n)
    return juntar
}
console.log(nomeCompleto('Gabriel ', 'Sappio ', 'Silva '))

function nomeLegal(...aleatorio) {
    let juntar = 'Seu nome maluco é: '
    aleatorio.forEach(x => juntar += x)
    return juntar
}

console.log(nomeLegal('Gabriel ', 'Acabaxi ', 'Laranja '))
