import './css/App.css'
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import Navbar from './components/Navbar'
import { MovieProvider } from './contexts/movieContext'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <MovieProvider>
      <Navbar></Navbar>
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App
