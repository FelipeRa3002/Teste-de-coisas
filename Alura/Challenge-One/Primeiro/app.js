//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let todosOsAmigos = []
function adicionarAmigo(){
    let adicionarAmigo = document.getElementById("amigo")
    let listaDosNomesDosAmigos = document.getElementById("listaAmigos")
    if (todosOsAmigos.includes(adicionarAmigo.value)){
        alert("Esse nome já foi usado desse jeito, tente de outro jeito ou coloca o seu sobrenome")
    }else{
        if(adicionarAmigo.value==""){
            alert("Por Favor, insira um nome válido")
        }else{
            todosOsAmigos.push(adicionarAmigo.value)
            if(listaDosNomesDosAmigos.textContent == ""){
              listaDosNomesDosAmigos.textContent = adicionarAmigo.value
            }else{
             listaDosNomesDosAmigos.textContent =listaDosNomesDosAmigos.textContent +", " + adicionarAmigo.value
            }
         adicionarAmigo.value = ""
        }
    }
}
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}
function sortearAmigo(){
    if(todosOsAmigos.length == 0){
        alert("A lista de amigos está vazia")
    }else{
        embaralha(todosOsAmigos)
        let sorteio = document.getElementById("resultado")
        let tamanho = todosOsAmigos.length
        let amigo = todosOsAmigos[Math.floor(Math.random()*tamanho)]
        sorteio.innerHTML = "O amigo secreto sorteado é: " + amigo
        todosOsAmigos = []
        document.getElementById("listaAmigos").innerHTML = ""
    }
    
    
}
