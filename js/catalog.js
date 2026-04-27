// БАННЕР-слайдер
const imageNames = [
    "cat_banner_01.png", "cat_banner_02.png", "cat_banner_03.png", "cat_banner_04.png",
    "cat_banner_05.png", "cat_banner_06.png","cat_banner_07.png",
    ];
    
    const wrapper = document.querySelector('.cat-b-slider .swiper-wrapper');
    
    if (wrapper) {
        // Добавим картинки
        imageNames.forEach(name => {
          const slide = document.createElement('div');
          slide.className = 'swiper-slide';
          slide.innerHTML = `<img class="cat-b-photo" src="photo/catalog/${name}" alt="">`;
          wrapper.appendChild(slide);
        });
      
        // Инициализация Swiper
        new Swiper('.cat-b-slider', {
          loop: true,
          speed: 4000,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          slidesPerView: 'auto',
        });
      } else {
        // Если слайдер отсутствует — ничего не делаем (или можно лог в консоль)
        // console.log('[cat-b-slider] — не найден, пропускаем инициализацию.');
      }



let currentIndex = 0;
let filteredProducts = [...products]; 
// Расчёт количества карточек на «одну страницу»
function getItemsPerPage() {
    if (window.innerWidth >= 2180) return 12; // десктоп
    if (window.innerWidth >= 1300) return 9; // десктоп
    if (window.innerWidth >= 850) return 8;  // планшет
    if (window.innerWidth >= 450) return 4;  // планшет
    return 4; // мобилка
  }

  // ЗАГРУЗКА КАТАЛОГА
function renderCatalogChunk() {
const catalogGrid = document.getElementById('catalog-grid');
const itemsPerPage = getItemsPerPage();
const nextProducts = filteredProducts.slice(currentIndex, currentIndex + itemsPerPage);

   // СОЗДАНИЕ КАРТОЧЕК
nextProducts.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('c-product-card');
    card.setAttribute('data-id', product.id);
    card.innerHTML = `
    <div class="product-card-img">
        <img src="${product.images[0]}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 15px;">
    </div>
    <div class="product-card-text">
        <p class="product-card-h">${product.name}</p>
        <p class="product-card-sub">${product.subtitle}</p>
    </div>
    `;
    card.addEventListener('click', () => openModal(product.id));
    card.style.opacity = '0';
    catalogGrid.appendChild(card);
    setTimeout(() => { card.style.opacity = '1'; }, 10);
});

currentIndex += itemsPerPage;

// КНОПКА "ЗАГРУЗИТЬ ЕЩЁ"
const loadMoreBtn = document.getElementById('load-more-btn');
if (currentIndex >= filteredProducts.length) {
    loadMoreBtn.style.display = 'none';
} else {
    loadMoreBtn.style.display = 'block';
}

// === Открытие/закрытие выпадающих фильтров ===
document.querySelectorAll('.filter-dropdown').forEach(dropdown => {
const trigger = dropdown.querySelector('.filter-trigger');
const options = dropdown.querySelector('.filter-options');

trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdown.classList.contains('active');

    // Закрыть все
    document.querySelectorAll('.filter-dropdown').forEach(d => {
    d.classList.remove('active');
    d.querySelector('.filter-options').classList.add('hidden');
    });

    if (!isOpen) {
    dropdown.classList.add('active');
    options.classList.remove('hidden');
    }
});
});

// === Закрытие фильтров при клике вне ===
document.addEventListener('click', (e) => {
if (!e.target.closest('.filter-dropdown')) {
    document.querySelectorAll('.filter-dropdown').forEach(d => {
    d.classList.remove('active');
    d.querySelector('.filter-options').classList.add('hidden');
    });
}
});

// === Обработка фильтров и поиск ===
document.querySelectorAll('.filter-options input[type=radio]').forEach(radio => {
radio.addEventListener('change', applyFilters);
});

document.getElementById('search-input').addEventListener('input', applyFilters);
  

// Показать "ничего не найдено"
const notFound = document.getElementById('not-found-msg');
if (filteredProducts.length === 0) {
    notFound.style.display = 'block';
    loadMoreBtn.style.display = 'none';
} else {
    notFound.style.display = 'none';
}
}

function applyFilters() {
    const search = document.getElementById('search-input').value.toLowerCase();
    const notFoundMsg = document.getElementById('not-found-msg');
    filteredProducts = [...products];
  
    const activeFilters = [];
  
    document.querySelectorAll('.filter-dropdown').forEach(dropdown => {
      const checked = dropdown.querySelectorAll('input[type=checkbox]:checked');
      const hasAll = Array.from(checked).some(cb => cb.value === 'all');
  
      if (hasAll) {
        dropdown.querySelectorAll('input[type=checkbox]').forEach(cb => {
          if (cb.value !== 'all') {
            activeFilters.push(cb.value.toLowerCase());
          }
        });
      } else {
        checked.forEach(cb => {
          if (cb.value !== 'all') {
            activeFilters.push(cb.value.toLowerCase());
          }
        });
      }
    });
  
    // Фильтрация по тегам
    if (activeFilters.length > 0) {
      filteredProducts = filteredProducts.filter(p =>
        Array.isArray(p.tags) &&
        activeFilters.some(f => p.tags.includes(f))
      );
    }
  
    // Фильтрация по поиску: name + subtitle
    if (search.trim() !== '') {
      filteredProducts = filteredProducts.filter(p =>
        (p.name.toLowerCase().includes(search) ||
         p.subtitle.toLowerCase().includes(search))
      );
    }
  
    // Показ сообщения если ничего не найдено
    if (filteredProducts.length === 0) {
      if (search.trim() !== '') {
        notFoundMsg.textContent = "Ничего не найдено :(";
      } else {
        notFoundMsg.textContent = "Скоро здесь появятся новые товары ❤";
      }
      notFoundMsg.style.display = 'block';
      document.getElementById('load-more-btn').style.display = 'none';
    } else {
      notFoundMsg.style.display = 'none';
    }
  
    const catalogGrid = document.getElementById('catalog-grid');
    catalogGrid.innerHTML = '';
    currentIndex = 0;
    renderCatalogChunk();


    document.querySelectorAll('.filter-dropdown').forEach(dropdown => {
        const checked = dropdown.querySelectorAll('input[type=checkbox]:checked');
      
        if (checked.length > 0) {
          dropdown.classList.add('filled');
        } else {
          dropdown.classList.remove('filled');
        }
      });
  }


  
  
  
  

document.getElementById('search-input').addEventListener('input', applyFilters);

document.querySelectorAll('.filter-options input[type=radio]').forEach(radio => {
radio.addEventListener('change', applyFilters);
});

document.querySelectorAll('.reset-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const filterOptions = btn.closest('.filter-options');
      filterOptions.querySelectorAll('input[type=checkbox]').forEach(checkbox => {
        checkbox.checked = false;
      });
  
      applyFilters();
    });
  });

document.querySelectorAll('.filter-options input[type=checkbox]').forEach(checkbox => {
checkbox.addEventListener('change', () => {
    const wrapper = checkbox.closest('.filter-options');
    const checkboxes = wrapper.querySelectorAll('input[type=checkbox]');
    const isAll = checkbox.value === 'all';

    if (isAll && checkbox.checked) {
    // Если выбрано "всё" — снимаем все остальные
    checkboxes.forEach(cb => {
        if (cb !== checkbox) cb.checked = false;
    });
    } else if (!isAll && checkbox.checked) {
    // Если выбрана не "всё", убираем "всё"
    checkboxes.forEach(cb => {
        if (cb.value === 'all') cb.checked = false;
    });
    }

    applyFilters();
});
});

document.getElementById('load-more-btn').addEventListener('click', renderCatalogChunk);
  



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
        if (e.button !== 0) return; // только левая кнопка мыши
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
          e.preventDefault(); 
          scrollInner.scrollLeft += e.deltaY; 
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

        wrapper.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'nearest'
        });
    };

    wrapper.appendChild(img);
    thumbnailGallery.appendChild(wrapper);
    });


    const customSelect = document.querySelector('#custom-color-select');
    const colorselecth2 = document.querySelector('#color-select-h2');
    const trigger = customSelect.querySelector('.select-trigger');
    const selectedText = trigger.querySelector('.selected-text');
    const optionsBox = customSelect.querySelector('.options');


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
        renderCatalogChunk();
        const loadMoreBtn = document.getElementById('load-more-btn');
        loadMoreBtn.addEventListener('click', renderCatalogChunk);
    }
    
    document.querySelectorAll('.filter-options input[type=checkbox]').forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
      });

  });
