import './App.css'
import NavBar from './components/NavBar/NavBar'
import CategoryContainer from './components/Containers/CategoryContainer/CategoryContainer'
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import MainContainer from './components/Containers/MainContainer/MainContainer'
import ItemCount from './components/Utils/ItemCount/ItemCount'

function App() {
  // Necesito un arreglo de objetos para controlar el carrito de compras
  const [itemCount, setItemCount] = useState(0)
  const onAdd = (quantity) => console.log('quantity', quantity)

  return (
    <BrowserRouter>
      <NavBar itemCount={itemCount} />
      <div className="container mt-4 p-0">
        <div className="row m-0 p-0">
          <div className="col col-12 col-lg-2 m-0 p-0">
            <CategoryContainer />
          </div>
          <div className="col col-12 col-lg-10 m-0 p-0 ps-0 ps-lg-4">
            <MainContainer />
            <ItemCount stock={10} initialVulue={0} onAdd={onAdd} />
          </div>
        </div>
        <div className="row m-0 mt-4 mt-lg-0 p-0">
          <div className="col m-0 p-0 border border-3 rounded text-center">
            Footer: Aun debo construir este componente
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
