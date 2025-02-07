// Seleciona os botões e o menu
const hamburgerButton = document.querySelector("#hamburgerButton");
const closeButton = document.querySelector("#closeButton");
const mobileMenu = document.querySelector("#mobileMenu");

// Função para abrir o menu
hamburgerButton.addEventListener("click", function () {
    mobileMenu.classList.add("active");
});

// Função para fechar o menu
closeButton.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
});

// Variável para acompanhar o índice do slide atual
let currentIndex = 0;

// Função para mover o slide, passando um valor de "passo" (1 para avançar, -1 para retroceder)
function moveSlide(step) {
    // Pega todos os slides (elementos com a classe 'slide')
    const slides = document.querySelectorAll('.slide');

    // Atualiza o índice do slide atual, levando em conta o valor do "passo"
    // A operação (% slides.length) garante que o índice volte ao começo ou ao final quando necessário
    currentIndex = (currentIndex + step + slides.length) % slides.length;

    // Muda a posição do carrossel para exibir o slide correto
    // O "translateX" move o carrossel horizontalmente baseado no índice atual
    document.querySelector('.carrossel').style.transform = `translateX(${-currentIndex * 100}%)`;
}
