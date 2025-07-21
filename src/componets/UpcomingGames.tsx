import "../styles/UpcomingGames.css";

const UpcomingGames = () => {
  return (
    <section className="upcoming-games">
      <h2 className="upcoming-title">Próximos Juegos</h2>
      <p className="upcoming-subtitle">
        ¡Estamos preparando nuevas experiencias para ti! Muy pronto podrás disfrutar de:
      </p>

      <div className="upcoming-list">
        <div className="game-card">
          <h3 className="game-title">Risk</h3>
          <p className="game-description">
            Conquista territorios y demuestra tu estrategia en una versión digital de este clásico juego de mesa.
          </p>
        </div>

        <div className="game-card">
          <h3 className="game-title">Word Battle</h3>
          <p className="game-description">
            Un reto de palabras al estilo Pasapalabras, pero con giros únicos y desafíos que pondrán a prueba tu rapidez mental.
          </p>
        </div>

        <div className="game-card">
          <h3 className="game-title">Arcade VR Challenge</h3>
          <p className="game-description">
            Vive la experiencia arcade como nunca antes con nuestra próxima sala de realidad virtual.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UpcomingGames;
