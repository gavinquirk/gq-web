window.onload = () => {
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

  // Projects
  const projects = [
    {
      id: 1,
      name: 'Proshop',
      description:
        'Custom built online store, with PayPal payment and admin management',
      image: './img/proshop-logo-1.png',
      github: 'https://github.com/gavinquirk/proshop',
      deployment: 'https://gq-proshop.herokuapp.com/',
    },
    {
      id: 2,
      name: 'Idyllwild',
      description:
        'A website for the band Idyllwild, created using React and Firebase',
      image: './img/idyllwild-logo-1.png',
      github: 'https://github.com/gavinquirk/idyllwild',
      deployment: 'https://idyllwild.firebaseapp.com/',
    },
    {
      id: 3,
      name: 'Devcamper',
      description:
        'API providing accounts, uploads and information related to programming bootcamps',
      image: './img/devcamper-logo-1.png',
      github: 'https://github.com/gavinquirk/devcamper_api',
      deployment: 'https://gq-devcamper.herokuapp.com/',
    },
  ];

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
};
