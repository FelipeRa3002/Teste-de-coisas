function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto , 'Brazilian Portuguese Female'  , {rate:1.2} );
}
function mensagemInicial(){
    exibirTextoNaTela('h1',"Jogo do Número Secreto")
    exibirTextoNaTela('p',"Escolha um número entre 1 e 10")
}
mensagemInicial()
let numeroMaximo = 10
let listaDeNumeroSorteados = []
function geraNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()*numeroMaximo+1)
    let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length
    if (quantidadeDeElementosNaLista == numeroMaximo){listaDeNumeroSorteados = []}
    if(listaDeNumeroSorteados.includes(numeroEscolhido)){
        return geraNumeroAleatorio()
    } else{
        listaDeNumeroSorteados.push(numeroEscolhido)
        return numeroEscolhido
    }
}
let numeroSecreto = geraNumeroAleatorio()
let tentativas = 1
function verificarChute(){
    let chute = document.querySelector('input').value
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1',"Acertou!")
        let palavraTentativas = tentativas>1 ? "tentativas" : "tentativa"
        let mensagemTentativas = `Você descobriu o Número Secreto em ${tentativas} ${palavraTentativas}`
        exibirTextoNaTela('p',mensagemTentativas)
        document.getElementById("reiniciar").removeAttribute("disabled")
    }else{
        tentativas+=1
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p',"O Número Secreto É menor")
        }else{
            exibirTextoNaTela('p',"O Número Secreto É maior")
        }
        limpacampo()
    }
}
function limpacampo(){
    chute = document.querySelector('input')
    chute.value = ""
}
function reiniciarJogo(){
    limpacampo()
    numeroSecreto = geraNumeroAleatorio()
    tentativas = 1
    document.getElementById("reiniciar").setAttribute("disabled",true)
    mensagemInicial()
}