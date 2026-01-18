function calcularIdade(data_nascimento){
 const hoje = new Date();
 const nascimento = new Date(data_nascimento);
 let idade = hoje.getFullYear() - nascimento.getFullYear();
 const mesatual = hoje.getMonth(); //Janeiro é o 0
 const meu_mes = nascimento.getMonth();
 const diaatual = hoje.getDate();
 const meu_dia = nascimento.getDate();
 if (mesatual<meu_mes || (mesatual === meu_mes && diaatual < meu_dia)){
    idade= idade - 1;
 }
 return idade;
}
const minha_idade = calcularIdade("2003-08-02"); //Agosto deve ser convertido para mês 7 automaticamente ;
document.querySelector(".minhaIdade").textContent = minha_idade;


