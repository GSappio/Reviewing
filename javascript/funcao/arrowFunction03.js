let comparaComThis = function (param) {
    console.log(this === param)
}
// aqui foi mexido no escopo global

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)

/*  this em uma função arrow sempre será lido apenas nestá
    função arrow e não no escopo global
*/