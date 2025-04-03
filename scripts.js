fetch('sources/games.json')
  .then(response => response.json())
  .then(games => {
    const track = document.getElementById('carousel-track');
    const generateCard = (game) => `
      <div class="carousel-card">
        <img src="${game.image}" alt="${game.name}">
        <div class="card-body">
          <h5 class="card-title">${game.name}</h5>
        </div>
      </div>`;
    const cards = games.concat(games).map(generateCard).join('');
    track.innerHTML = cards;
  });
