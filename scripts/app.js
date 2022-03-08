const backdrop = document.querySelector('.backdrop');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

function openSideMenu() {
  backdrop.classList.add('open');
  mobileNav.classList.add('open');
}

function closeSideMenu() {
  backdrop.classList.remove('open');
  mobileNav.classList.remove('open');
}

toggleButton.addEventListener('click', openSideMenu);

backdrop.addEventListener('click', closeSideMenu);
