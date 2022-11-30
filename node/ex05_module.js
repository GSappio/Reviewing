//Gabriel Sappio

console.log(global === this)
console.log(module === this)
console.log(module.exports === this)

this.digaOI = function () {
    console.log('Oi!!!')
}