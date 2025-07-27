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
          <h3 className="game-title">World War in Spain</h3>
          <p className="game-description">
            Conquer territories and demonstrate your strategy in a digital version of this classic board game.
          </p>
        </div>

        <div className="game-card">
          <h3 className="game-title">Word Battle</h3>
          <p className="game-description">
            A word challenge where your knowledge of words will be tested.
          </p>
        </div>

        <div className="game-card">
          <h3 className="game-title">Arcade VR Challenge</h3>
          <p className="game-description">
            Experience the arcade like never before with our upcoming virtual reality room.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UpcomingGames;
