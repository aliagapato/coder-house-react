import { Routes, Route } from 'react-router-dom'
// import Landing from '../Pages/Landing/Landing'
import ErrorPath from '../Utils/ErrorPath/ErrorPath'
import ItemListContainer from '../Utils/ItemListContainer/ItemListContainer'
import ItemDetail from '../Utils/ItemDetail/ItemDetail'

const Content = () => {
  return (
    <>
      <Routes>
        <Route path='/coder-house-react/' element={<ItemListContainer />} />
        <Route path='/coder-house-react/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/coder-house-react/product/:productId' element={<ItemDetail />} />
        <Route path='*' element={<ErrorPath />} />
      </Routes>
    </>
  )
}

export default Content