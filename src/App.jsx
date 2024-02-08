import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import { ToastContextProvider } from './context/ToastContext'
import NavBar from './components/NavBar/NavBar'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <ToastContextProvider>
      <BrowserRouter>
        <CartContextProvider>
          <NavBar />
          <Main />
          <Footer />
        </CartContextProvider>
      </BrowserRouter>
    </ToastContextProvider>
  )
}

export default App
