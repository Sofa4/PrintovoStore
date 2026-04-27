
// ФОРМИРОВАНИЕ СЛАЙДЕРА
function renderMainSlider(products) {
  const wrapper = document.getElementById('main-slider-wrapper');
  wrapper.innerHTML = '';

  const topFive = products.slice(0, 5); 

  topFive.forEach(product => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    // ФОРМИРОВАНИЕ КАРТОЧЕК СЛАЙДЕРА
    slide.innerHTML = `
      <div class="product-card" data-id="${product.id}">
        <img src="${product.images[0]}" alt="${product.name}" class="product-card-img">
        <div class="product-card-text">
          <p class="product-card-h">${product.name}</p>
          <p class="product-card-p">${product.subtitle}</p>
        </div>
      </div>
    `;

    // ОТКРЫТИЕ МОДАЛЬНОГО ОКНА 
    slide.querySelector('.product-card').addEventListener('click', () => {
      openModal(product.id);
    });

    wrapper.appendChild(slide);
  });

  // Swiper-СЛАЙДЕР
  new Swiper('.nprdct-content', {
    slidesPerView: 'auto',
    freeMode: true,           
    grabCursor: true,
    slidesOffsetBefore: 40, 
    slidesOffsetAfter: 40,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
        delay: 10000,
    },
  });
}

// Функция открытия модального окна и заполнения его информацией
function openModal(productId) {
  const product = products.find(item => item.id === productId);
  if (!product) return;

  document.querySelector('.product-name').textContent = product.name;
  document.querySelector('.subtitle').textContent = product.subtitle;
  document.querySelector('.description').textContent = product.description;
  document.querySelector('.note').textContent = product.note;

  const mainImage = document.querySelector('#main-img');
  mainImage.src = product.images[0];

  const thumbnailGallery = document.querySelector('.scroll-inner');
  thumbnailGallery.innerHTML = '';
  
  const scrollInner = document.querySelector('.scroll-inner');
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  scrollInner.addEventListener('mousedown', (e) => {
      if (e.button !== 0) return; 
      isDragging = true;
      scrollInner.classList.add('dragging');
      startX = e.clientX;
      scrollLeft = scrollInner.scrollLeft;
  });

  scrollInner.addEventListener('mouseup', () => {
  isDragging = false;
  scrollInner.classList.remove('dragging');
  });

  scrollInner.addEventListener('mouseleave', () => {
  isDragging = false;
  scrollInner.classList.remove('dragging');
  });

  scrollInner.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const deltaX = e.clientX - startX;
      scrollInner.scrollLeft = scrollLeft - deltaX;
    });

  scrollInner.addEventListener('wheel', (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault(); // отключаем вертикальный скролл
        scrollInner.scrollLeft += e.deltaY; // крутим вбок
      }
    });



  product.images.forEach((imgSrc, index) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('thumbnail-wrapper');

  const img = document.createElement('img');
  img.src = imgSrc;
  img.alt = `Фото ${index + 1}`;
  img.classList.add('thumbnail');

  img.onclick = () => {
      mainImage.src = imgSrc;
      document.querySelectorAll('.thumbnail-wrapper').forEach(w => w.classList.remove('active'));
      wrapper.classList.add('active');
  };

  wrapper.appendChild(img);
  thumbnailGallery.appendChild(wrapper);
  });

      // --- КАСТОМНЫЙ СЕЛЕКТОР ЦВЕТОВ ---
  const customSelect = document.querySelector('#custom-color-select');
  const colorselecth2 = document.querySelector('#color-select-h2');
  const trigger = customSelect.querySelector('.select-trigger');
  const selectedText = trigger.querySelector('.selected-text');
  const optionsBox = customSelect.querySelector('.options');

  // СБРОС перед вставкой новых данных
  customSelect.style.display = 'none';
  colorselecth2.style.display = 'none';
  selectedText.textContent = 'Выберите цвет';
  trigger.classList.remove('open', 'active');
  optionsBox.classList.add('hidden');
  optionsBox.innerHTML = '';

  // ЕСЛИ есть цвета — отрисовываем
  if (product.colors && product.colors.length > 0) {
  customSelect.style.display = 'block';
  colorselecth2.style.display = 'block';

  product.colors.forEach(color => {
      const optionDiv = document.createElement('div');
      optionDiv.classList.add('option');
      optionDiv.textContent = color;

      optionDiv.addEventListener('click', () => {
      selectedText.textContent = color;
      trigger.classList.add('active');
      trigger.classList.remove('open');
      optionsBox.classList.add('hidden');
      });

      optionsBox.appendChild(optionDiv);
  });

  // Обработчик клика по триггеру (удаляем старые и назначаем новый)
  trigger.onclick = () => {
      trigger.classList.toggle('open');
      optionsBox.classList.toggle('hidden');
  };
  }


  // Маркетплейсы
  const marketplacesContainer = document.querySelector('.marketplaces');
  marketplacesContainer.innerHTML = '';
  product.marketplaces.forEach(marketplace => {
  const link = document.createElement('a');
  link.href = marketplace.url;
  link.classList.add('marketplace-link');
  const icon = document.createElement('img');
  icon.src = marketplace.icon;
  icon.alt = marketplace.name;
  link.appendChild(icon);
  marketplacesContainer.appendChild(link);
  });

  // Характеристики
  const specsContainer = document.querySelector('.specs');
  specsContainer.innerHTML = '';
  for (let key in product.specs) {
  const p = document.createElement('p');
  p.innerHTML = `${key}: ${product.specs[key]}`;
  specsContainer.appendChild(p);
  }

  // Показать модалку
  document.querySelector('.modal-overlay').style.display = 'block';
}

// Закрытие модального окна
document.querySelector('.close-btn').addEventListener('click', function () {
  document.querySelector('.modal-overlay').style.display = 'none';


  // Сброс селектора при закрытии (ищем заново!)
  const customSelect = document.querySelector('#custom-color-select');
  const trigger = customSelect.querySelector('.select-trigger');
  const selectedText = trigger.querySelector('.selected-text');
  const optionsBox = customSelect.querySelector('.options');    
  selectedText.textContent = 'Выберите цвет';
  trigger.classList.remove('open', 'active');
  optionsBox.innerHTML = '';
  optionsBox.classList.add('hidden');
});

// Генерация каталога при загрузке
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('catalog-grid')) {
    renderCatalog(products);
  }

  if (document.getElementById('main-slider-wrapper')) {
    renderMainSlider(products);
  }
});


function checkHorizontalScroll(scrollElement, visualTarget) {
  const scrollWidth = Math.floor(scrollElement.scrollWidth);
  const clientWidth = Math.floor(scrollElement.clientWidth);
  const scrollDiff = scrollWidth - clientWidth;

  console.log('scrollWidth:', scrollWidth);
  console.log('clientWidth:', clientWidth);
  console.log('разница:', scrollDiff);

  if (scrollDiff > 4) {
    visualTarget.classList.add('has-scroll');
  } else {
    visualTarget.classList.remove('has-scroll');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const scrollElement = document.querySelector('.abt-itm-photo-04-scroll-inner');
  const visualTarget = document.querySelector('.abt-itm-photo-04');

  checkHorizontalScroll(scrollElement, visualTarget);

  window.addEventListener('resize', () => {
    checkHorizontalScroll(scrollElement, visualTarget);
  });
});


