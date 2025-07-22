import { Link } from "react-router-dom";
import "../styles/Hero.css";
import imgAmerica from "/icons/america.png";
import hideWordIcon from "/icons/hide-word.png";
import bookIcon from "/icons/book.png";

const Hero = () => {
  return (
    <section>
        <div className="section-hero">
            <div className="neon-box-section-hero">
                <h1 className="title-hero">Welcome Room Game!</h1>
                <h2 className="subtitle-hero">Challenge yourself in games and explore your limits.</h2>
            </div>
        </div>
        <div className="slider">
            <div className="list-items-carousel">
            <div className="item one">
                
                <Link to="/game">
                <img src={hideWordIcon} alt="icon-game" width={80} height={80} className="icon-hide-word"></img>
                    Hide Word
                </Link>
            </div>
            <div className="item two">
                
                <Link to={"#"}>
                <img className="icon-world-war-game" src={imgAmerica} alt="icon game" width={80} height={80}/>
                    World War Game (Spain)
                </Link>
            </div>
            <div className="item three">
                
                <Link to={"#"}>
                <img src={bookIcon} className="icon-word-definition" alt="icon-game" width={80} height={80}></img>
                    Definition Word Game 
                </Link>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Hero