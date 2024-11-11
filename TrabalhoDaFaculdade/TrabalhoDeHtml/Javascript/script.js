function calculateTotal() {
    let total = 0;
    let selectedImages = [];
    document.querySelectorAll('input[type="radio"]:checked').forEach(input => {
        total += parseInt(input.value);
        selectedImages.push(input.getAttribute('data-img'));
    });
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<h3>Total: R$${total}</h3>`;
    selectedImages.forEach(img => {
        resultDiv.innerHTML += `<img src="${img}" alt="Selected Piece">`;
    });
}
function ocultaitem(x){
    let listarComItem = ["frame","wheels","seat","handlebar","brake","pedal","chain"]
    let TamanhoDalista = listarComItem.length
    for (let i = 0;i<=TamanhoDalista;i++){
        if (i == x){
            let ItemAMostra = document.getElementById(listarComItem[i])
            ItemAMostra.style.display = "block"
        }else{
             let ItemANaoMostra = document.getElementById(listarComItem[i])
             ItemANaoMostra.style.display = "none"
        }
    }
}