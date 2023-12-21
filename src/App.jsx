import './App.css'
import NavBar from './components/NavBar/NavBar'
import SideBar from './components/SideBar/SideBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
// import Button from './components/Button/Button'
// import ItemCount from './components/ItemCount/ItemCount'
// import HorizontalDivider from './components/Utils/Divider/HorizontalDivider'
import { useState } from 'react'
import RandomInt from './Utils/RandomInt'

function App() {
  const [itemCount, setItemCount] = useState(RandomInt())
  
  // const decrement = () => {
  //   if(itemCount == 0) return 
  //   setItemCount(itemCount - 1)
  // }
  // const increment = () => setItemCount(itemCount + 1)

  return (
    <>
      <NavBar itemCount={itemCount} />
      <div className="container mt-4 p-0">
        <div className="row m-0 p-0">
          <div className="col col-12 col-lg-2 m-0 p-0">
            <SideBar />
          </div>
          <div className="col col-12 col-lg-10 m-0 p-0 ps-0 ps-lg-4">
            <ItemListContainer msg="Lumos, es lo contrario de Nox"/>
            {/* Por que cuando uso el codigo comentado, se re renderiza la sidebar? */}
            {/* <div className="container-fluid text-center my-3">
              <div className="row">
                <div className="col">
                  <button onClick={decrement} className="btn btn-outline-danger">Decrementar carrito</button>
                </div>
                <div className="col">
                  <h1>{itemCount}</h1>
                </div>
                <div className="col">
                  <button onClick={increment} className="btn btn-outline-success">incrementar carrito</button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
