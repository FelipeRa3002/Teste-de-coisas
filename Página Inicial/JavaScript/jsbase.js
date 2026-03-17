const botao = document.getElementById('botao-tema');
const body = document.body;

// Detecta o modo escuro do navegador
const ModoEscuroDoNavegadorAtivado = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
// Persistência do tema
const temasalvo = localStorage.getItem('tema');
temaEscuro(temasalvo === 'escuro');
//Mudar coisas como nome da faculdade, curso e periodo atual
//Selector vai pegar apenas o primeiro item dessa tag mas como é uma tag única não vejo problema, no momento.
document.querySelector('periodoqueestou').textContent = "5º (quinto)" ;
//Mudar a imagem dos projetos se necessário
function MudarImagemdosProjetosseNecessario(x){
  let ImagemProjetoPortfolio = document.getElementById("imagem-projeto-portfolio");
  let imagemImersaoDevcomGoogleGemini = document.querySelectorAll("#image-ImersaoDevcomGoogleGemini");
  let linkProjetoImersaoDevcomGoogleGemini = document.querySelectorAll("#link-projeto-ImersaoDevcomGoogleGemini"); 
  if (x == 1){
      /* O .forEach() percorre CADA item de uma lista (NodeList/Array).
        'parâmetro' é um nome temporário que você escolhe para representar
        o item atual dentro do loop. As chaves {} contêm o código que será
        executado para CADA item individual da lista.

        .forEach(parâmetro => {
          parâmetro.src = seila;
        });
      */
      imagemImersaoDevcomGoogleGemini.forEach(imagem => {
        imagem.src = "./Imagens/Imagens-dos-projetos/Alura/projeto-07-projeto_escuro.jpeg";
      });
      linkProjetoImersaoDevcomGoogleGemini.forEach(link => {  
        link.href= "https://felipera3002.github.io/Teste-de-coisas/Alura/ImersaoDevcomGoogleGemini/index.html";
      });
      ImagemProjetoPortfolio.src= "./Imagens/Imagens-dos-projetos/cursoemvideo/projeto-06-projeto_portfolio_escuro.jpeg";
      //Para o Claro
  } else if (x == 2){
      ImagemProjetoPortfolio.src= "./Imagens/Imagens-dos-projetos/cursoemvideo/projeto-06-projeto_portfolio_claro.jpeg";
      imagemImersaoDevcomGoogleGemini.forEach(imagem => {
        imagem.src= "./Imagens/Imagens-dos-projetos/Alura/projeto-07-projeto_claro.jpeg";
      });
      linkProjetoImersaoDevcomGoogleGemini.forEach(link => {  
        link.href= "https://felipera3002.github.io/Teste-de-coisas/Alura/ImersaoDevcomGoogleGemini/Paginasextras/Jujutsu.html";
      });
      //Para Escuro
  }
}

//Mudar o icone da página
function Mudarfaviocne(x){
  let NovoIcone = document.getElementById("icone_da_pagina");
  if (x == 1){
      NovoIcone.href= "https://www.publicdomainpictures.net/pictures/540000/nahled/anime-girl-in-autumn-1695903616uYM.jpg";
      //Para o Claro
  } else if (x == 2){
      NovoIcone.href= "https://media.easy-peasy.ai/27feb2bb-aeb4-4a83-9fb6-8f3f2a15885e/ed0dd180-7dce-4b26-9d5e-cef3364be2a7.png";
      //Para Escuro
  }

}

// Função para ativar o tema claro
function temaClaroAtivo() {
  // Implemente a lógica para ativar o tema claro
  let MudarCordosBotoes = document.querySelectorAll(".botoes-menu");
    MudarCordosBotoes.forEach(botoes => {
      botoes.style.color = 'white';
    });
}

// Função para ativar o tema escuro
function temaEscuroAtivo() {
  // Implemente a lógica para ativar o tema escuro
  let MudarCordosBotoes = document.querySelectorAll(".botoes-menu");
  MudarCordosBotoes.forEach(botoes => {
    botoes.style.color = 'black';
  });
}
// Aplica o tema escuro se o modo escuro do navegador estiver ativado ao carregar a página
if (ModoEscuroDoNavegadorAtivado) {
  body.classList.add('escuro');
  botao.innerHTML = '<abbr title="Modo Claro"><i class="fa-solid fa-sun botoes-menu" style="color: black;"  onmouseenter="this.style.color=\'yellow\'" onmouseleave="this.style.color=\'black\'"></i></abbr>';
  temaEscuroAtivo();
  Mudarfaviocne(2);

}
// Função para alternar entre tema claro e escuro
function temaEscuro(tipo) {
  let MudarGitCentral = document.getElementById("Gif_central");
  let DivMudarGitCentral = document.getElementById("gif-que-fica-embaixo");
  let GifMexendoDoPC = document.getElementById("imagem-do-mexendo-no-pc")
  if (tipo == true) {
    body.classList.add('escuro');
    botao.innerHTML = '<abbr title="Modo Claro"><i class="fa-solid fa-sun botoes-menu" style="color: black;"  onmouseenter="this.style.color=\'yellow\'" onmouseleave="this.style.color=\'black\'"></i></abbr>';
    temaEscuroAtivo();
    Mudarfaviocne(2);
    MudarImagemdosProjetosseNecessario(2);
    MudarGitCentral.src = "https://media1.tenor.com/m/lW_90lvxQ3IAAAAC/lum-urusei-yatsura.gif";
    GifMexendoDoPC.src  = "https://i.pinimg.com/originals/39/82/8c/39828c7dab661d0a305b43744dd9745e.gif";
    //Esperar para carregar o Gif  500ms (0.5 segundos) , não precisa, mas achei legal.
    DivMudarGitCentral.style.opacity = 0 ;
    GifMexendoDoPC.style.opacity = 0 ;
    setTimeout(() => {
      DivMudarGitCentral.style.opacity = 1 ;
      GifMexendoDoPC.style.opacity = 1 ;
    },500);
  } else {
    body.classList.remove('escuro');
    botao.innerHTML = '<abbr title="Modo Escuro"><i class="fa-solid fa-moon botoes-menu" style="color: black;"  onmouseenter="this.style.color=\'black\'" onmouseleave="this.style.color=\'white\'"></i></abbr>';
    temaClaroAtivo();
    Mudarfaviocne(1);
    MudarImagemdosProjetosseNecessario(1);
    MudarGitCentral.src = "https://i.pinimg.com/originals/ce/7a/f8/ce7af890d23444939a9ed0b019dc46c6.gif";
    GifMexendoDoPC.src = "https://i.pinimg.com/originals/ab/1a/fe/ab1afebb2fe63ede8210d53253269e52.gif";
    //Esperar para carregar o Gif  500ms (0.5 segundos) , não precisa, mas achei legal.
    DivMudarGitCentral.style.opacity = 0 ;
    GifMexendoDoPC.style.opacity = 0 ;
    setTimeout(() => {
      DivMudarGitCentral.style.opacity = 1 ;
      GifMexendoDoPC.style.opacity = 1 ;
     },500);
   }
}


botao.addEventListener('click', () => {
  const isescuro = body.classList.toggle('escuro');
  temaEscuro(isescuro);
  localStorage.setItem('tema', isescuro ? 'escuro' : 'claro');
});

// Scroll suave para links de navegação
const navLinks = document.querySelectorAll('#menu ul a.link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});


//Ver minha idade
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

//Aviso para versão de Celular
if (window.innerWidth <= 1200){
      alert("Se você estiver no celular recomendo que vire a tela, veja o site de forma com a tela deitada");
      

    }

//Sobre as músicas que eu gostos
function iniciarMusicaQueEuGosto() {
    const player = document.getElementById('Musica');
    let listaDaMusica = [
     "<div><iframe class=\"player_musica\" data-testid=\"embed-iframe\" style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/track/4lriIG2vNqwDWzOj2I9rtj?utm_source=generator&theme=0\"  frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe></div>" ,
    "<div><iframe class=\"player_musica\" data-testid=\"embed-iframe\" style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/track/2joT0CjcGqc1fr8Fvk7itj?utm_source=generator&theme=0\"  frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe> </div>"
    ,
    "<div><iframe class=\"player_musica\" data-testid=\"embed-iframe\" style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/track/5uraJqtCBvLpwt3VeomZdq?utm_source=generator&theme=0\"  frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe> </div>"
    ,
    "<div><iframe class=\"player_musica\" data-testid=\"embed-iframe\" style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/track/3x4378ztiLvFmm2nuzEI0C?utm_source=generator&theme=0\"  frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe> </div>"
    ,
    "<div><iframe class=\"player_musica\" data-testid=\"embed-iframe\" style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/track/2plbrEY59IikOBgBGLjaoe?utm_source=generator&theme=0\"  frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe> </div>"
    ,
    "<div><iframe class=\"player_musica\" data-testid=\"embed-iframe\" style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/track/0mHNjI1KD9PpqLu5wS8m4s?utm_source=generator&theme=0\"  frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe> </div>"
    ,
    "<div class=\"player_musica\"><div><audio controls=\"controls\" autoplay loop class=\"player_musica\"> <source src=\"../convite/Destinos%20Traçados%20(Animes)%20-%20Part.%20Felícia%20Rock%20-(MP3_160K).mp3\" type=\"audio/mp3\"> </audio><a href=\"https://www.youtube.com/watch?v=N3idL2C0lwk\" class=\"link\">Para ouvir a música orginal.</a></div></div>"
    ];
    let musicaSorteada = listaDaMusica[Math.floor(Math.random() * listaDaMusica.length)];
    player.innerHTML =musicaSorteada;
}
iniciarMusicaQueEuGosto();

//Função para mostrar as abas dos projetos
function MostrarAbaDeProjetos(aba, tipo){
 let AbasParamostrar = document.getElementById(aba);
 let categoriasdeprojetos = tipo;
 let quantidadesdeabas = 0;
 if (categoriasdeprojetos === 'html'){
  quantidadesdeabas = 4;
  for (let i = 1; i <= quantidadesdeabas; i++){
    let abaParaMostrarcertar = document.getElementById("Aba-" + i + "-html");
    if (abaParaMostrarcertar == AbasParamostrar){
      abaParaMostrarcertar.classList.remove("ocultar");
    } else {
      abaParaMostrarcertar.classList.add("ocultar");
    }
  }
}
if (categoriasdeprojetos === 'javascript'){
  quantidadesdeabas = 3 ; 
  for (let i = 1; i <= quantidadesdeabas; i++){
    let abaParaMostrarcertar = document.getElementById("Aba-" + i + "-javascript");
    if (abaParaMostrarcertar == AbasParamostrar){
      abaParaMostrarcertar.classList.remove("ocultar");
    } else {
      abaParaMostrarcertar.classList.add("ocultar");
    }
  }
}
if (categoriasdeprojetos === 'python'){
  quantidadesdeabas = 2 ; 
  for (let i = 1; i <= quantidadesdeabas; i++){
    let abaParaMostrarcertar = document.getElementById("Aba-" + i + "-python");
    if (abaParaMostrarcertar == AbasParamostrar){
      abaParaMostrarcertar.classList.remove("ocultar");
    } else {
      abaParaMostrarcertar.classList.add("ocultar");
    }
  }
}

}
function Mostrar_Projetos(tipo){
  let OQueMostrar= ['html' , 'javascript' , 'python']
  let MostrarProjetosCertos;
  let OcultarProjetosErrados;
  for (let i = 0; i < OQueMostrar.length; i++){
      if (OQueMostrar[i] == tipo){
        MostrarProjetosCertos = document.getElementById(`${OQueMostrar[i]}-projetos`);
        MostrarProjetosCertos.classList.remove("ocultar");
     } else{
        OcultarProjetosErrados = document.getElementById(`${OQueMostrar[i]}-projetos`)
        OcultarProjetosErrados.classList.add("ocultar");
      }
  }
}

//download
 // Lista dos arquivos locais que você quer baixar
      const arquivos = ['../../python/Python%20coisas%20simples/Trabalho%20de%20Python/Body.py', '../../python/Python%20coisas%20simples/Trabalho%20de%20Python/Mind.py', '../../python/Python%20coisas%20simples/Trabalho%20de%20Python/Imagemum.jpg', '../../python/Python%20coisas%20simples/Trabalho%20de%20Python/Imagemdois.jpg'];
      const simplesarquivospython = [
        '../../python/Python%20coisas%20simples/1-11.py',
        '../../python/Python%20coisas%20simples/1-12.py',
        '../../python/Python%20coisas%20simples/1-12.py',
        '../../python/Python%20coisas%20simples/1-13.py',
        '../../python/Python%20coisas%20simples/1-14.py',
        '../../python/Python%20coisas%20simples/1-15.py',
        '../../python/Python%20coisas%20simples/1-16.py',
        '../../python/Python%20coisas%20simples/1-17.py',
        '../../python/Python%20coisas%20simples/1-18_2.0.py',
        '../../python/Python%20coisas%20simples/1exercício.py',
        '../../python/Python%20coisas%20simples/2exercício.py',
        '../../python/Python%20coisas%20simples/3exercício.py',
        '../../python/Python%20coisas%20simples/4exercício.py',
        '../../python/Python%20coisas%20simples/5.exercício.py',
        '../../python/Python%20coisas%20simples/6exercício.py',
        '../../python/Python%20coisas%20simples/7exercício.py',
        '../../python/Python%20coisas%20simples/8exercício.py',
        '../../python/Python%20coisas%20simples/9exercício.py',
        '../../python/Python%20coisas%20simples/10exercício.py'
      ]
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
    }else if (x == 2){
      let PermissaodeBaixar = confirm(`ℙ𝕠𝕤𝕤𝕠 𝕚𝕟𝕚𝕔𝕚𝕒𝕣 𝕠 𝕕𝕠𝕨𝕟𝕝𝕠𝕒𝕕 𝕕𝕖 𝕧𝕒́𝕣𝕚𝕠𝕤 𝕒𝕣𝕢𝕦𝕚𝕧𝕠𝕤 𝕒𝕘𝕠𝕣𝕒?`);
      if (PermissaodeBaixar){
          simplesarquivospython.forEach((caminho, index) => {
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
}
// O X é o id da section que vai mostrar os skills
function OQuemostraremSkillss(x){
  if (window.innerWidth >= 1200){
    let AbaParamostrar = document.querySelectorAll("article#skills>section");
      AbaParamostrar.forEach(aba => {
        if (aba.id === x){
          aba.classList.remove("ocultar");
        } else {
          aba.classList.add("ocultar");
        }
      });
    } else if (window.innerWidth < 1200){
      if (x === 'certificados-meus'){
        let AbrirAbadeCerfiticados = confirm("Você deseja ver os certificados?");
        if (AbrirAbadeCerfiticados){
          window.open("Página-extras/Certificados-index.html", "_blank");
        }
      }
    }
  
}

function VerficadordeTamanhodoElemento(){
let veroTamanhodoWidth = document.getElementById("Coloque o id aqui");
alert(veroTamanhodoWidth.offsetWidth);
}
