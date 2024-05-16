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
            case 4:
                if(valor == "number1"){
                    acertos++
                }
                else{
                    erros++
                }
            break
            case 5:
                if(valor == "number4"){
                    acertos++
                }
                else{
                    erros++
                }
            break
            case 6:
                if(valor == "number1"){
                    acertos++
                }
                else{
                    erros++
                }
            break
            case 7:
                if(valor == "number1"){
                    acertos++
                }
                else{
                    erros++
                }
            break
            case 8:
                if(valor == "number3"){
                    acertos++
                }
                else{
                    erros++
                }
            break
            case 9:
                if(valor == "number2"){
                    acertos++
                }
                else{
                    erros++
                }
            break
            case 10:
                if(valor == "number3"){
                    acertos++
                }
                else{
                    erros++
                }
            break
            case 11:
                if(valor == "number1"){
                    acertos++
                }
                else{
                    erros++
                }
            break
            case 12:
                if(valor == "number1"){
                    acertos++
                }
                else{
                    erros++
                }
            break
            case 13:
                if(valor == "number1"){
                    acertos++
                }
                else{
                    erros++
                }
            break
            case 14:
                if(valor == "number1"){
                    acertos++
                }
                else{
                    erros++
                }
            break
            case 15:
                if(valor == "number1"){
                    acertos++
                }
                else{
                    erros++
                }
            break
            case 16:
                if(valor == "number3"){
                    acertos++
                }
                else{
                    erros++
                }
            break
            case 17:
                if(valor == "number1"){
                    acertos++
                }
                else{
                    erros++
                }
            break
            case 18:
                if(valor == "number1"){
                    acertos++
                }
                else{
                    erros++
                }
            break
            case 19:
                if(valor == "number1"){
                    acertos++
                }
                else{
                    erros++
                }
            break
            case 20:
                if(valor == "number4"){
                    acertos++
                }
                else{
                    erros++
                }
            break
            case 21:
                if(valor == "number3"){
                    acertos++
                }
                else{
                    erros++
                }
            break
            case 22:
                if(valor == "number3"){
                    acertos++
                }
                else{
                    erros++
                }
            break
            case 23:
                if(valor == "number1"){
                    acertos++
                }
                else{
                    erros++
                }
            break
            case 24:
                if(valor == "number4"){
                    acertos++
                }
                else{
                    erros++
                }
            break
            case 25:
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
var array = []

function random() {

    if(array.length == 25){
        stop()
        array = []
    }
    else{
        do{
            var numberRandom = Math.floor(Math.random() * (25 - 1 + 1)) + 1;
            guardarValor = numberRandom

            for (var i = 0; i < array.length; i++){
                if (array[i] == guardarValor){
                    var passar = false
                    break
                }
                else{
                    passar = true
                    
                }
            }
            
        }while(passar == false)

            
        array.push(guardarValor)
        console.log(guardarValor)
        console.log(array)
    
        
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
            case 4:
                pergunta.innerHTML = "Quem construiu a arca?"
                option1.innerHTML = "Noé"
                option2.innerHTML = "Abraão"
                option3.innerHTML = "Isaque"
                option4.innerHTML = "Jacó"
            break
            case 5:
                pergunta.innerHTML = "Quem foi o primeiro rei de Israel?"
                option1.innerHTML = "José"
                option2.innerHTML = "Davi"
                option3.innerHTML = "Moisés"
                option4.innerHTML = "Saul"
            break
            case 6:
                pergunta.innerHTML = "Quem foi o profeta que enfrentou os profetas de Baal no monte Carmelo?"
                option1.innerHTML = "Elias"
                option2.innerHTML = "Isaías"
                option3.innerHTML = "Eliseu"
                option4.innerHTML = "Joel"
            break
            case 7:
                pergunta.innerHTML = "Qual é o último livro do Novo Testamento?"
                option1.innerHTML = "Apocalipse"
                option2.innerHTML = "Gênesis"
                option3.innerHTML = "Esdras"
                option4.innerHTML = "Atos"
            break
            case 8:
                pergunta.innerHTML = "Quem era o amigo de Davi, filho de Saul?"
                option1.innerHTML = "Jonas"
                option2.innerHTML = "Ezequias"
                option3.innerHTML = "Jônatas"
                option4.innerHTML = "Salomão"
            break
            case 9:
                pergunta.innerHTML = "Quem era o irmão de Moisés e também seu porta-voz diante do faraó?"
                option1.innerHTML = "Miriam"
                option2.innerHTML = "Arão"
                option3.innerHTML = "Josué"
                option4.innerHTML = "Calebe"
            break
            case 10:
                pergunta.innerHTML = "Quem foi engolido por um grande peixe?"
                option1.innerHTML = "Daniel"
                option2.innerHTML = "Moisés"
                option3.innerHTML = "Jonas"
                option4.innerHTML = "Isaías"
            break
            case 11:
                pergunta.innerHTML = "Qual era o nome do rei que mandou matar todos os bebês meninos quando Jesus nasceu?"
                option1.innerHTML = "Herodes"
                option2.innerHTML = "Pilatos"
                option3.innerHTML = "César"
                option4.innerHTML = "Nero"
            break
            case 12:
                pergunta.innerHTML = "Quem foi o profeta que clamou 'Eis-me aqui, envia-me a mim' quando Deus procurava alguém para enviar?"
                option1.innerHTML = "Isaías"
                option2.innerHTML = "Jeremias"
                option3.innerHTML = "Ezequiel"
                option4.innerHTML = "Oseias"
            break
            case 13:
                pergunta.innerHTML = "Quem foi o primeiro rei de Israel depois de Saul?"
                option1.innerHTML = "Davi"
                option2.innerHTML = "Salomão"
                option3.innerHTML = "José"
                option4.innerHTML = "Moisés"
            break
            case 14:
                pergunta.innerHTML = "Qual era o nome do profeta que pregou para os ossos secos no vale de visão?"
                option1.innerHTML = "Ezequiel"
                option2.innerHTML = "Daniel"
                option3.innerHTML = "Isaías"
                option4.innerHTML = "Jeremias"
            break
            case 15:
                pergunta.innerHTML = "Quem foi o homem que liderou o povo de Israel após a morte de Moisés?"
                option1.innerHTML = "Josué"
                option2.innerHTML = "Calebe"
                option3.innerHTML = "Gideão"
                option4.innerHTML = "Sansão"
            break
            case 16:
                pergunta.innerHTML = "Qual era o nome do profeta que foi chamado para ungir Davi como rei de Israel?"
                option1.innerHTML = "Isaías"
                option2.innerHTML = "Jeremias"
                option3.innerHTML = "Samuel"
                option4.innerHTML = "Ezequiel"
            break
            case 17:
                pergunta.innerHTML = "Qual era o nome do monte onde Moisés recebeu os Dez Mandamentos?"
                option1.innerHTML = "Monte Sinai" // Resposta correta
                option2.innerHTML = "Monte Horebe"
                option3.innerHTML = "Monte das Oliveiras"
                option4.innerHTML = "Monte Carmelo"
            break
            case 18:
                pergunta.innerHTML = "Quem foi o profeta que ungiu a Saul como rei de Israel?"
                option1.innerHTML = "Samuel" // Resposta correta
                option2.innerHTML = "Davi"
                option3.innerHTML = "Natã"
                option4.innerHTML = "Gade"
            break
            case 19:
                pergunta.innerHTML = "Qual era o nome do rio em que João Batista batizava as pessoas?"
                option1.innerHTML = "Rio Jordão" // Resposta correta
                option2.innerHTML = "Rio Nilo"
                option3.innerHTML = "Rio Eufrates"
                option4.innerHTML = "Rio Tigre"
            break
            case 20:
                pergunta.innerHTML = "Quem foi o profeta que teve visões apocalípticas e escreveu o livro de Apocalipse?"
                option1.innerHTML = "Daniel"
                option2.innerHTML = "Jeremias"
                option3.innerHTML = "Isaías"
                option4.innerHTML = "João" // Resposta correta
            break
            case 21:
                pergunta.innerHTML = "Quem foi que orou a Deus para fazer o sol parar durante uma batalha?"
                option1.innerHTML = "Samuel"
                option2.innerHTML = "Moisés"
                option3.innerHTML = "Josué" // Resposta correta
                option4.innerHTML = "Davi"
            break
            case 22:
                pergunta.innerHTML = "Quem foi jogado na cova dos leões por não deixar de orar a Deus?"
                option1.innerHTML = "Isaías"
                option2.innerHTML = "Jeremias"
                option3.innerHTML = "Daniel" // Resposta correta
                option4.innerHTML = "Oseias"
            break
            case 23:
                pergunta.innerHTML = "Quem foi o fariseu que foi visitar Jesus durante a noite?"
                option1.innerHTML = "Nicodemos" // Resposta correta
                option2.innerHTML = "Jairo"
                option3.innerHTML = "Cefas"
                option4.innerHTML = "Gamaliel"
            break
            case 24:
                pergunta.innerHTML = "Qual foi o apóstolo escolhido para substituir Judas Iscariotes?"
                option1.innerHTML = "Tiago"
                option2.innerHTML = "Mateus"
                option3.innerHTML = "Barnabé"
                option4.innerHTML = "Matias" // Resposta correta
            break
            case 25:
                pergunta.innerHTML = "Qual foi o apóstolo que teve um encontro com Jesus no caminho de Damasco?"
                option1.innerHTML = "Tiago"
                option2.innerHTML = "Filipe"
                option3.innerHTML = "Paulo" // Resposta correta
                option4.innerHTML = "Bartolomeu"
            break
    
        }
    }   
    

}

