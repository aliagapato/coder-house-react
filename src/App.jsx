import './App.css'
import NavBar from './components/NavBar/NavBar'
import CategoryContainer from './components/Containers/CategoryContainer/CategoryContainer'
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import ItemListContainer from './components/Containers/ItemListContainer/ItemListContainer'
import MainContainer from './components/Main/Main'

function App() {
  const [itemCount, setItemCount] = useState(0)
  return (
    <BrowserRouter>
      <NavBar itemCount={itemCount} />
      <div className="container mt-4 p-0">
        <div className="row m-0 p-0">
          <div className="col col-12 col-lg-2 m-0 p-0">
            <CategoryContainer />
          </div>
          <div className="col col-12 col-lg-10 m-0 p-0 ps-0 ps-lg-4">
            {/* <ItemListContainer msg="Lumos, es lo contrario de Nox" /> */}
            <MainContainer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
