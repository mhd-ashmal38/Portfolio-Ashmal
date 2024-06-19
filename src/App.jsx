import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Logo from './components/Logo'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className='flex items-center'>
          <Logo />
          <Navbar />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
