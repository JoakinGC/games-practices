import UpcomingGames from "../components/UpcomingGames"; 
import Footer from "../components/Footer";
import Hero from "../components/Hero";
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