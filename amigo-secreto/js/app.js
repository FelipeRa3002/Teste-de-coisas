let todosOsAmigos = []
function adicionar(){
    let adicionarAmigo = document.getElementById("nome-amigo")
    let listaDosNomesDosAmigos = document.getElementById("lista-amigos")
    if (todosOsAmigos.includes(adicionarAmigo.value) || adicionarAmigo.value==""){
        alert("Esse nome já foi usado desse jeito, tente de outro jeito ou coloca o seu sobrenome")
        return
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
function sortear(){
    embaralha(todosOsAmigos)
    let sorteio = document.getElementById("lista-sorteio")
    for (let i=0;i<todosOsAmigos.length;i++){
        if (i == todosOsAmigos.length -1){
            sorteio.innerHTML = sorteio.innerHTML + todosOsAmigos[i] + " --->" + todosOsAmigos[0] + "<br>"
        }else{
            sorteio.innerHTML = sorteio.innerHTML + todosOsAmigos[i] + " --->" + todosOsAmigos[i+1] + "<br>"
        }
    }
}
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}
function reiniciar(){
    todosOsAmigos = []
    document.getElementById("lista-amigos").innerHTML = ""
    document.getElementById("lista-sorteio").innerHTML = ""
}