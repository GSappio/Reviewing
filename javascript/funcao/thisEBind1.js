/*  Quando coloca o this nesse caso ele ira entender que quer pegar o
    bom dia de saudacao e se não colocar o this ele não vai entender. 

    "falar" é uma função e ele não vai conseguir pegar os atributos de um objeto
    nesse caso do objeto "saudacao". E com o this ele consegue.
*/
const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

/*  com o uso do bind ele vai entender que apartir
    desta função o this será resolvido para "pessoa"

    Houve um 'amarro' com o objeto para que ele torne-se
    'dono' da execução deste método. 
*/

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()