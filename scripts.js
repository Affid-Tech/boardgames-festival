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

fetch('sources/tournaments.json')
  .then(response => response.json())
  .then(tournaments => {
    const container = document.querySelector('.section .row');
    const generateTournament = (t) => `
      <div class="col">
        <div class="card game-card border-danger">
          <img src="${t.image}" class="card-img-top" alt="${t.name}">
          <div class="card-body">
            <h5 class="card-title">${t.name}</h5>
          </div>
        </div>
      </div>`;
    const cards = tournaments.map(generateTournament).join('');
    container.innerHTML = cards;
  });
