import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import GameHiddenWord from './pages/GameHiddenWord.tsx'
import { UserContextProvider } from './context/userContex.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SingIn from './pages/SingIn.tsx'
import Score from './pages/Score.tsx'
import Home from './pages/Home.tsx'
import Header from './pages/NavBar.tsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY


if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserContextProvider>
      <BrowserRouter>
        <Header/>
        <div className="content-main">
        <Routes>
          <Route path='/game' element={<GameHiddenWord/>}/>
          <Route path='/sign-in' element={<SingIn/>}/>
          <Route path='/score' element={<Score/>}/>
          <Route index path='/home' element={<Home/>}/>

        </Routes>
        </div>
      </BrowserRouter>
    </UserContextProvider>
  </StrictMode>,
)
