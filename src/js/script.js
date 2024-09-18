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

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

document.querySelectorAll('.toggle-content').forEach(function(h2) {
  h2.addEventListener('click', function() {
      this.classList.toggle('active');
      let arrow = this.querySelector('.arrow');
      arrow.textContent = arrow.textContent === '▼' ? '▲' : '▼';
  });
});
