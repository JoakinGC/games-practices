import "../styles/Hero.css";

const Hero = () => {
  return (
    <section>
        <div className="section-hero">
            <h1 className="title-hero">Welcome Room Game!</h1>
            <h2 className="subtitle-hero">Challenge yourself in games and explore your limits.</h2>
        </div>
        <div className="slider">
            <div className="list-items-carousel">
            <div className="item one">
                <img src="#" alt="icon-game"></img>
                <a className="a">
                Hide Word
                </a>
            </div>
            <div className="item two">
                <img src="#" alt="icon-game"></img>
                <a className="a">
                World War Game
                </a>
            </div>
            <div className="item three">
                <img src="#" alt="icon-game"></img>
                <a className="a">
                Pass word
                </a>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Hero