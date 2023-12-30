import './App.css'
import NavBar from './components/NavBar/NavBar'
import CategoryListContainer from './components/CategoryListContainer/CategoryListContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { useState } from 'react'

function App() {
  const [itemCount, setItemCount] = useState(0)

  return (
    <>
      <NavBar itemCount={itemCount} />
      <div className="container mt-4 p-0">
        <div className="row m-0 p-0">
          <div className="col col-12 col-lg-2 m-0 p-0">
            <CategoryListContainer />
          </div>
          <div className="col col-12 col-lg-10 m-0 p-0 ps-0 ps-lg-4">
            <ItemListContainer msg="Lumos, es lo contrario de Nox" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
