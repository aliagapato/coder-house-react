import { Routes, Route } from 'react-router-dom'
import ErrorPath from '../Utils/ErrorPath/ErrorPath'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetail from '../ItemDetail/ItemDetail'
import Checkout from '../Checkout/Checkout'
import Order from '../Order/Order'

const Content = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/search/:searchValue' element={<ItemListContainer />} />
        <Route path='/product/:productId' element={<ItemDetail />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/order/:orderId' element={<Order />} />
        <Route path='*' element={<ErrorPath />} />
      </Routes>
    </>
  )
}

export default Content