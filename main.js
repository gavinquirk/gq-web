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
    },
    {
      id: 2,
      name: 'Idyllwild',
      description:
        'A website for the band Idyllwild, created using React and Firebase',
      image: './img/idyllwild-logo-1.png',
    },
    {
      id: 3,
      name: 'MovieApp',
      description:
        'Find information about your favorite movies. Created by web scraping the data from IMDB and Rottentomatoes',
      image: './img/movieapp-logo-1.png',
    },
    {
      id: 4,
      name: 'Devcamper',
      description:
        'API providing accounts, uploads and information related to programming bootcamps',
      image: './img/devcamper-logo-1.png',
    },
  ];

  // For each project, insert into grid
  // TODO: Create custom images, add github and deployment icons/links
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
          </div>
        </div>
      </div>
      `;
  });
};
