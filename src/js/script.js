let currentSlide = 0;
const slides = document.querySelectorAll('.carousel img');

// Mostrar a imagem inicial
slides[currentSlide].classList.add('active');

// Função para ir para o próximo slide
function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Função para ir para o slide anterior
function prevSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Troca automática de slides a cada 4 segundos
setInterval(nextSlide, 3200);

function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}

