function confirmation(){
    var radio = document.getElementsByName("option")

    for (var i=0; i<radio.length; i++){
        var opcao = radio[i]

        if(opcao.checked){
            var valor = opcao.value
            
            break
        }

    }
    
    if(valor == null){
        window.alert("Erro: Marque uma opção")
    }

    else{
        switch (guardarValor){
            case 1:
                if(valor == "number2"){
                    acertos++
                }
                else{
                    erros++
                }
            break
            case 2:
                if(valor == "number4"){
                    acertos++
                   
                }
                else{
                    erros++
                }
            break
            case 3:
                if(valor == "number3"){
                    acertos++
                }
                else{
                    erros++
                }
            break
        }
        quantidadePerguntas++
        opcao.checked = false
        section2()
    }
}

var guardarValor = 0

function random() {
    var numberRandom = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    guardarValor = numberRandom
    var pergunta = document.querySelector('.pergunta')
    var option1 = document.getElementById('option1')
    var option2 = document.getElementById('option2')
    var option3 = document.getElementById('option3')
    var option4 = document.getElementById('option4')

    switch (numberRandom){
        case 1:
            pergunta.innerHTML = "Quem escreveu o pentateuco?"
            option1.innerHTML = "Abraão"
            option2.innerHTML = "Moisés"
            option3.innerHTML = "Elias"
            option4.innerHTML = "Adão"
        break
        case 2:
            pergunta.innerHTML = "Quem abriu o mar vermelho?"
            option1.innerHTML = "Pedro"
            option2.innerHTML = "Arão"
            option3.innerHTML = "Jacó"
            option4.innerHTML = "Moisés"
        break
        case 3:
            pergunta.innerHTML = "Qual nome do gigante que Davi matou?"
            option1.innerHTML = "Sansão"
            option2.innerHTML = "Caim"
            option3.innerHTML = "Golias"
            option4.innerHTML = "Josafá"
        break
        


    }
    

}

