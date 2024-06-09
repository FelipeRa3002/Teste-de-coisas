function comprar(){
    let quantidadeDeIngressoComprar = parseInt(document.getElementById("qtd").value)
    let tipoDeIngresso = document.getElementById("tipo-ingresso").value
    if(tipoDeIngresso == "inferior"){
      ComprarInferior(quantidadeDeIngressoComprar)
    }else if(tipoDeIngresso == "superior"){
        ComprarSuperior(quantidadeDeIngressoComprar)
    }else if (tipoDeIngresso == "pista"){
        ComprarPista(quantidadeDeIngressoComprar)
    }
}
function ComprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById("qtd-inferior").textContent)
    if (qtd > qtdInferior){
        alert("Quantidade indisponível para tipo Inferior")
    }else{
        qtdInferior = qtdInferior - qtd
        document.getElementById("qtd-inferior").textContent = qtdInferior
        alert("Compra realizada com sucesso!")
    }
}
function ComprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById("qtd-superior").textContent)
    if (qtd > qtdSuperior){
        alert("Quantidade indisponível para tipo Superior")
    }else{
        qtdSuperior = qtdSuperior - qtd
        document.getElementById("qtd-superior").textContent = qtdSuperior
        alert("Compra realizada com sucesso!")
    }
}
function ComprarPista(qtd){
    let qtdPista = parseInt(document.getElementById("qtd-pista").textContent)
    if (qtd > qtdPista){
        alert("Quantidade indisponível para tipo Pista")
    }else{
        qtdPista = qtdPista - qtd
        document.getElementById("qtd-pista").textContent = qtdPista
        alert("Compra realizada com sucesso!")
    }
}