console.log('JavaScript loaded...');

const wrapper = document.getElementById('hamburger-wrapper');
const hamburgerButton = document.getElementsByClassName('hamburger-button');
const navOverlay = document.getElementsByClassName('nav-overlay');

// When menu button is clicked
wrapper.onclick = () => {
  // Toggle closed class on hamburger
  hamburgerButton[0].classList.toggle('hamburger-closed');
  // Toggle open overlay
  navOverlay[0].classList.toggle('nav-open');
};
