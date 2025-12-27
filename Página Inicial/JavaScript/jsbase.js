const botao = document.getElementById('botao-tema');
const body = document.body;

// Detecta o modo escuro do navegador
const ModoEscuroDoNavegadorAtivado = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
// Persistência do tema
const temasalvo = localStorage.getItem('tema');
temaEscuro(temasalvo === 'escuro');

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
}
// Função para alternar entre tema claro e escuro
function temaEscuro(tipo) {
  let MudarGitCentral = document.getElementById("Gif_central");
  let DivMudarGitCentral = document.getElementById("gif-que-fica-embaixo");
  if (tipo == true) {
    body.classList.add('escuro');
    botao.innerHTML = '<abbr title="Modo Claro"><i class="fa-solid fa-sun botoes-menu" style="color: black;"  onmouseenter="this.style.color=\'yellow\'" onmouseleave="this.style.color=\'black\'"></i></abbr>';
    temaEscuroAtivo();
    Mudarfaviocne(2);
    MudarGitCentral.src = "https://media1.tenor.com/m/lW_90lvxQ3IAAAAC/lum-urusei-yatsura.gif";
    //Esperar para carregar o Gif  500ms (0.5 segundos) , não precisa, mas achei legal.
    DivMudarGitCentral.style.opacity = 0 ;
    setTimeout(() => {
      DivMudarGitCentral.style.opacity = 1 ;
    },500);
  } else {
    body.classList.remove('escuro');
    botao.innerHTML = '<abbr title="Modo Escuro"><i class="fa-solid fa-moon botoes-menu" style="color: black;"  onmouseenter="this.style.color=\'black\'" onmouseleave="this.style.color=\'white\'"></i></abbr>';
    temaClaroAtivo();
    Mudarfaviocne(1);
    MudarGitCentral.src = "https://i.pinimg.com/originals/ce/7a/f8/ce7af890d23444939a9ed0b019dc46c6.gif";
    //Esperar para carregar o Gif  500ms (0.5 segundos) , não precisa, mas achei legal.
    DivMudarGitCentral.style.opacity = 0 ;
    setTimeout(() => {
      DivMudarGitCentral.style.opacity = 1 ;
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
if (window.innerWidth <= 739){
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
    ];
    let musicaSorteada = listaDaMusica[Math.floor(Math.random() * listaDaMusica.length)];
    player.innerHTML =musicaSorteada;
}
iniciarMusicaQueEuGosto();
