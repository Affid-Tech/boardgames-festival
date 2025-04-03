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
        <div class="card game-card border-danger">
          <img src="${t.image}" class="card-img-top" alt="${t.name}">
          <div class="card-body">
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
              <img src="https://via.placeholder.com/400x200?text=Добавь+игру" class="card-img-top" alt="placeholder">
              <div class="card-body text-center">
                <h5 class="card-title">${placeholders[i]}</h5>
              </div>
            </div>
          </div>`);
      }
      cards.push(`
        <div class="col-12 text-center">
          <a href="https://forms.gle/Qhr4FQAvPULJRdo99" target="_blank" class="btn btn-outline-primary btn-lg mt-3">
            Выбери игры для турниров!
          </a>
        </div>`);
    }

    container.innerHTML = cards.join('');
  });
