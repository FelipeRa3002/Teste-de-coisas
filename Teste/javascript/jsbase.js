const arquivos = ['../../../Python/Python%20coisas%20simples/Trabalho%20de%20Python/Body.py', '../../../Python/Python%20coisas%20simples/Trabalho%20de%20Python/Mind.py', '../../../Python/Python%20coisas%20simples/Trabalho%20de%20Python/Imagemum.jpg', '../../../Python/Python%20coisas%20simples/Trabalho%20de%20Python/Imagemdois.jpg'];
function baixarArquivosLocais(x) {
  if (x == 1){
      arquivos.forEach((caminho, index) => {
        setTimeout(() => {
          const link = document.createElement('a');
          link.href = caminho;
          link.download = caminho.split('/').pop(); // Extrai o nome do arquivo
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }, index * 400); // Intervalo de 400ms para evitar bloqueio do navegador
      });
    }
}
