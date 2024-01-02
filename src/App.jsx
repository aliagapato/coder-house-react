import './App.css'
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
// import ItemCount from './components/Utils/ItemCount/ItemCount'

function App() {
  // Necesito un arreglo de objetos para controlar el carrito de compras
  const [itemCount, setItemCount] = useState(0)
  // const onAdd = (quantity) => console.log('quantity', quantity)
  // <ItemCount stock={10} initialVulue={0} onAdd={onAdd} />

  return (
    <BrowserRouter>
      <NavBar itemCount={itemCount} />
      <Main />
      <Footer />
    </BrowserRouter>
  )
}

export default App
