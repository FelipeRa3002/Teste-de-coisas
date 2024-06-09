let totalGeral
limpar()
function adicionar(){
    let Produto = document.getElementById("produto").value
    let nomeProduto = Produto.split("-")[0]
    let valorUnitario = Produto.split("R$")[1]
    let quantidade = document.getElementById("quantidade").value
    let preco = quantidade*valorUnitario
    let listaProdutos = document.getElementById("lista-produtos")
    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`
    totalGeral = totalGeral + preco
    let campoTotal = document.getElementById("valor-total")
    campoTotal.textContent =  `R$ ${totalGeral}`
    document.getElementById("quantidade").value = 1
}
function limpar(){
    totalGeral = 0
    document.getElementById("lista-produtos").innerHTML = ""
    document.getElementById("valor-total").innerHTML = "R$ 0,00"
}