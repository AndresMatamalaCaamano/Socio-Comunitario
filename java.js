  const elementos = document.querySelectorAll('.fade-in');

  const mostrarElemento = (entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visible');
      } else {
        entrada.target.classList.remove('visible'); // Esto permite que reaparezca si vuelve a entrar
      }
    });
  };

  const observer = new IntersectionObserver(mostrarElemento, {
    threshold: 0.2 // qué tanto debe verse del elemento (20% en este caso)
  });

  elementos.forEach(el => observer.observe(el));


  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalPrice = document.getElementById("modalPrice");
  const mainImg = document.getElementById("mainImg");
  const thumb1 = document.getElementById("thumb1");
  const thumb2 = document.getElementById("thumb2");
  const thumb3 = document.getElementById("thumb3");
  const closeModal = document.getElementById("closeModal");

  const buttons = document.querySelectorAll(".open-modal");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      modalTitle.textContent = button.getAttribute("data-title");
      modalDesc.textContent = button.getAttribute("data-desc");
      modalPrice.textContent = button.getAttribute("data-price");
      mainImg.src = button.getAttribute("data-img");
      thumb1.src = button.getAttribute("data-thumb1");
      thumb2.src = button.getAttribute("data-thumb2");
      thumb3.src = button.getAttribute("data-thumb3");
      modal.style.display = "flex";
    });
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
  });

  function changeMainImg(el) {
    mainImg.src = el.src;

    
  }

document.querySelectorAll('.carousel-section').forEach(section => {
  const carousel = section.querySelector('.carousel');
  const track = carousel.querySelector('.carousel-track');
  const slides = carousel.querySelectorAll('.slide');
  const prevBtn = carousel.querySelector('.prev');
  const nextBtn = carousel.querySelector('.next');
  const indicatorsContainer = section.querySelector('.carousel-indicators');

  let currentIndex = 0;
  const dots = [];

  // Crear los dots solo como indicadores visuales (no interactivos)
  slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    indicatorsContainer.appendChild(dot);
    dots.push(dot);
  });

  const updateCarousel = () => {
    const slideWidth = slides[0].offsetWidth;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    // Actualizar indicador visual
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  };

  // Botones de navegación
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  });
});


document.getElementById('filtroCategorias').addEventListener('change', function () {
  const categoriaSeleccionada = this.value;
  const secciones = document.querySelectorAll('section');

  secciones.forEach(seccion => {
    const tarjetas = seccion.querySelectorAll('.tarjeta');
    let tieneTarjetasVisibles = false;

    tarjetas.forEach(tarjeta => {
      const categoria = tarjeta.getAttribute('data-categoria');
      const debeMostrar = categoriaSeleccionada === 'todas' || categoria === categoriaSeleccionada;

      if (debeMostrar) {
        tarjeta.classList.remove('oculta');
        setTimeout(() => tarjeta.classList.remove('ocultando'), 10);
        tieneTarjetasVisibles = true;
      } else {
        tarjeta.classList.add('ocultando');
        setTimeout(() => tarjeta.classList.add('oculta'), 400);
      }
    });

    // Oculta o muestra la sección completa
    if (tieneTarjetasVisibles) {
      seccion.style.display = '';
    } else {
      seccion.style.display = 'none';
    }
  });
});