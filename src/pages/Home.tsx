import UpcomingGames from "../componets/UpcomingGames"; 
import Footer from "../componets/Footer";
import Hero from "../componets/Hero";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <Hero/>
      <UpcomingGames/>
      <section>
        <Footer/>
      </section>
    </>
  )
}

export default Home