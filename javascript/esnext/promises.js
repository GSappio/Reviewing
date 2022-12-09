// function falarDepoisDe(segundos, frase) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(frase) // O resolve aceita apenas um unico parametro
//         }, segundos * 1000)
//     })
// }
// // O 'then' é chamado quando é resolvido o 'resolve'
// // Para tratar erros, é usado o 'catch'


// falarDepoisDe(3, 'Que legal!')
//     .then(frase => frase.concat('?!?'))
//     .then(outraFrase => console.log(outraFrase))
//    // .catch(e => console.log(e)) // O 'e' recebe a 'frase'


//      TENTANDO SOZINHO

function falarDepois(tempo, umaFrase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(umaFrase)
        }, tempo * 1000)
    })
}

falarDepois(4, 'Boa ai sim!')
    .then(umaFrase => umaFrase.concat(' SHOOOW!!'))
    .then(qualquerCoisa => console.log(qualquerCoisa))
