import { Link } from "react-router-dom"
import MobileNav from "../components/MobileNav"
import "../styles/header.css";
import { navLinks } from "../constants";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

const Header = () => {
  return (
    <header className="container-header">
      <div className="brand-container">
        <div>
          <a
            href="https://joakingc.github.io/"
            target="_blank"
          >
          <img
              alt="menu icon" 
              src="/icons/logo.svg"
              className="logo"
          />
          </a>
        </div>
        <MobileNav/>
      </div>
      <nav className="navbar max-lg:hidden">

        {
          navLinks&&navLinks.map((e,i) =>{
           return (
            <div key={i}>
              <Link to={`${e.route}`}>{e.label}</Link>  
            </div>
           ) 
          })
        }
          
          <div>
            <SignedOut>
              <SignInButton
                
              />
            </SignedOut>
            <SignedIn
            >
              <UserButton />
            </SignedIn>
          </div>

        </nav>
    </header>
  )
}

export default Header