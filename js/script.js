// Variável que inicia o controle do slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Controle Manual para avançar ou retroceder
function plusSlides(n) {
    showSlides(slideIndex += n); // Avança ou retrocede a quantidade 'n'
}

// Função para ir diretamente ao slide especificado
function currentSlide(n) {
    showSlides(slideIndex = n); // Vai diretamente ao slide 'n'
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
        slides[i].style.display = "none";  // Esconde o slide
        slides[i].style.opacity = "0";     // Apaga o slide de forma suave
    }

    // Exibe o slide atual com opacidade 1 (visível)
    slides[slideIndex - 1].style.display = "block"; 
    slides[slideIndex - 1].style.opacity = "1"; 

    // Avança automaticamente para o próximo slide após 4 segundos
    setTimeout(function() {
        showSlides(slideIndex += 1); // Avança para o próximo slide
    }, 4000); // 4000 milissegundos = 4 segundos
}

// Código das Tabs
// Função que gerencia a troca de abas
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
  
    // Pega todos os elementos com a classe "tabs" e os esconde
    tabcontent = document.getElementsByClassName("tabs");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none"; // Esconde todas as abas
    }
  
    // Pega todos os elementos com a classe "tabButton" e remove a classe "active"
    tablinks = document.getElementsByClassName("tabButton");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", ""); // Remove a classe "active" dos botões
    }
  
    // Exibe a aba correspondente ao nome da aba clicada (tabName)
    document.getElementById(tabName).style.display = "block"; // Mostra a aba ativa
  
    // Adiciona a classe "active" ao botão que foi clicado, fazendo ele se destacar
    evt.currentTarget.className += " active"; // Marca o botão como "ativo"
  }
  
  // Inicializa a primeira aba (Reservas) como ativa
  document.querySelector(".tabButton").click(); // Simula o clique no primeiro botão de tab
  