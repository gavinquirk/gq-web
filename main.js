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
      image: 'https://via.placeholder.com/640x360',
    },
    {
      id: 2,
      name: 'Idyllwild',
      description:
        'A website for the band Idyllwild, created using React and Firebase',
      image: 'https://via.placeholder.com/640x360',
    },
    {
      id: 3,
      name: 'Movie App',
      description:
        'Find information about your favorite movies. Created by web scraping the data from IMDB and Rottentomatoes',
      image: 'https://via.placeholder.com/640x360',
    },
    {
      id: 4,
      name: 'Devcamper API',
      description:
        'API providing accounts, uploads and information related to programming bootcamps',
      image: 'https://via.placeholder.com/640x360',
    },
  ];

  // For each project, insert into grid
  // TODO: Hoverable images show description and links
  const portfolioGrid = document.getElementById('portfolio-grid');

  projects.forEach((project) => {
    portfolioGrid.innerHTML += `
        <div>
          <img src=${project.image} alt=${project.name} />
        </div>
      `;
  });
};
