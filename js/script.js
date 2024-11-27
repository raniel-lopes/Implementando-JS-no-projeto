// Variável que inicia o controle do slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Controle Manual para avançar ou retroceder
function plusSlides(n) {
  showSlides((slideIndex += n)); // Avança ou retrocede a quantidade 'n'
}

// Função para ir diretamente ao slide especificado
function currentSlide(n) {
  showSlides((slideIndex = n)); // Vai diretamente ao slide 'n'
}

// Função para mostrar os slides
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides"); // Puxa todas as imagens com a class 'mySlides'

  // Se ultrapassar o número de slides, volta ao primeiro
  if (n > slides.length) {
    slideIndex = 1;
  }

  // Se for menor que o primeiro slide, vai para o último
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Esconde todos os slides e define a opacidade para 0
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Esconde o slide
    slides[i].style.opacity = "0"; // Apaga o slide de forma suave
  }

  // Exibe o slide atual com opacidade 1 (visível)
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].style.opacity = "1";

  // Avança automaticamente para o próximo slide após 4 segundos
  setTimeout(function () {
    showSlides((slideIndex += 1)); // Avança para o próximo slide
  }, 4000); // 4000 milissegundos = 4 segundos
}

//////////////////////////////////////
/////////////////////////////////////

//Tabs
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  // Obtenha todos os elementos com a classe "tabs" e oculte-os
  tabcontent = document.getElementsByClassName("tabs");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Obtenha todos os elementos com a classe "tabButton" e remova a classe "active"
  tablinks = document.getElementsByClassName("tabButton");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Mostre a aba correspondente ao botão clicado
  document.getElementById(tabName).style.display = "block";

  // Adicione a classe "active" ao botão clicado
  evt.currentTarget.className += " active";
}

// Configuração inicial - Associa os botões às abas
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tabButton"); // Seleciona todos os botões
  const tabNames = ["Reservas", "Viagens", "Passeios"]; // Nomes das abas correspondentes

  tabButtons.forEach((button, index) => {
    button.addEventListener("click", function (evt) {
      openTab(evt, tabNames[index]); // Associa o botão à aba correspondente
    });
  });

  // Inicializa a primeira aba como ativa
  if (tabButtons.length > 0) {
    tabButtons[0].click();
  }
});

/*
    Menu Hamburger
*/
// Seleciona o ícone do hambúrguer e o menu de navegação
const menuIcon = document.querySelector(".topnav .icon"); // O ícone do menu hambúrguer
const menuLinks = document.getElementById("myTopnav"); // O menu de navegação

// Adiciona um evento de clique no ícone de hambúrguer
menuIcon.addEventListener("click", function (event) {
  event.preventDefault(); // Previne o comportamento padrão do link
  // Alterna a classe 'responsive' para mostrar ou esconder o menu
  menuLinks.classList.toggle("responsive");
});
