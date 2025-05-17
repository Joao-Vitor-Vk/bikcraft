// Ativar os links do menu

const links = document.querySelectorAll(".header-menu a");

function linkativo(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(linkativo);

// Ativar items do orçamento

const parametros = new URLSearchParams(location.search);

function Ativarprodutos(parametro) {
  const value = document.getElementById(parametro);
  if (value) {
    value.checked = true;
  }
}

parametros.forEach(Ativarprodutos);

// Funcionalidade perguntas frequentes

const btnperguntas = document.querySelectorAll(".perguntas button");

function Eventoperguntas(event) {
  const perguntas = event.currentTarget;
  const controls = perguntas.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  perguntas.setAttribute("aria-expanded", ativa);
  console.log(resposta);
}

function Ativarperguntas(perguntas) {
  perguntas.addEventListener("click", Eventoperguntas);
}

btnperguntas.forEach(Ativarperguntas);

// Trocar imagem na galeria das bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function Trocarimagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}

galeria.forEach((img) => {
  img.addEventListener("click", Trocarimagem);
});

// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
