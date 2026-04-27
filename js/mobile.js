const toggleBtn = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('open');
  mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
});