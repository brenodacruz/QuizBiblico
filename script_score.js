var acertos = 0
var erros = 0
var quantidadePerguntas = 0

function score(){
    var quantidadeTela = document.getElementById("quantidadePerguntas")
    var acertosTela = document.getElementById("acertos")
    var errosTela = document.getElementById("erros")

    quantidadeTela.textContent = quantidadePerguntas
    acertosTela.textContent = acertos
    errosTela.textContent = erros
}