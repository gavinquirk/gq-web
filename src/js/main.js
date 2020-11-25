import { projects } from './projects.js';

// --- Navigation ---
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

// For each project, insert into grid
const portfolioGrid = document.getElementById('portfolio-grid');

projects.forEach((project) => {
  portfolioGrid.innerHTML += `
      <div class="flip-card" id=${project.name}>
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src=${project.image} alt=${project.name}>
          </div>
          <div class="flip-card-back">
            <h4>${project.name}</h4>
            <p>${project.description}</p>
            <div class="flip-card-links">
              <a href=${project.deployment}><i class="far fa-window-restore"></i></a>
              <a href=${project.github}><i class="fab fa-github"></i></a>
            </div>
          </div>
        </div>
      </div>
      `;
});
