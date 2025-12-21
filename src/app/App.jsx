import {BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import AppRoutes from './AppRoutes.jsx'
import Footer from './components/Footer.jsx'
import Navbar2 from './components/Navbar2.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col min-h-screen'>

        <Navbar/>
        <main className='flex-grow'>
          <AppRoutes />
        </main>
        <Footer/>

      </div>
    </BrowserRouter>
  )
}

export default App
