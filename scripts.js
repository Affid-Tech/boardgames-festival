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
    const section = document.querySelector('.section');
    const generateTournament = (t) => `
      <div class="col">
        <div class="card game-card border-secondary">
          <img src="${t.image}" class="card-img-top" alt="${t.name}">
          <div class="card-body text-center">
            <h5 class="card-title">${t.name}</h5>
          </div>
        </div>
      </div>`;

    let cards = tournaments.map(generateTournament);

    if (tournaments.length < 3) {
      const placeholders = ["Твоя любимая игра", "Твоя вторая любимая игра", "Твоя третья любимая игра"];
      for (let i = tournaments.length; i < 3; i++) {
        cards.push(`
          <div class="col">
            <div class="card game-card border-secondary">
              <img src="assets/tournament-placeholder.png" class="card-img-top" alt="placeholder" style="object-fit: cover;">
              <div class="card-body text-center">
                <h5 class="card-title">${placeholders[i - tournaments.length]}</h5>
              </div>
            </div>
          </div>`);
      }
    }
    cards.push(`
        <div class="col-12 col-md-12 col-lg-12 text-center">
        <a href="https://t.me/Affid_fedorov" class="btn btn-primary btn-lg px-5 mt-3">Хочу провести игру!</a>
          <a href="https://forms.gle/Qhr4FQAvPULJRdo99" target="_blank" class="btn btn-outline-primary btn-lg mt-3">
            Выбери игры для дня настольных игр!
          </a>
        </div>`);

    container.innerHTML = cards.join('');
  });
