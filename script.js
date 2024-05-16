var section1 = document.querySelector('.section1')
var section02 = document.querySelector('.section2')
var section3 = document.querySelector('.section3')
function section2(){

    var name = document.getElementById("name").value.trim()
    
    if (name === ""){
        window.alert("Erro: Digite um nome")
    }
    else{
        section1.style.display = "none"
        section02.style.display = "flex"
        
        var people = document.getElementById("people").textContent
        
    
        var newname = people.replace(people, name)
    
        document.getElementById("people").textContent = newname
        
        random()
    }
    
    
}

function stop(){
    section02.style.display = "none"
    section3.style.display = "flex"
    score()
}

function recomecar(){
    section3.style.display = "none"
    section1.style.display = "flex"

    acertos = 0
    erros = 0
    quantidadePerguntas = 0
}
