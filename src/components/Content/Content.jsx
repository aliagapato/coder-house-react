import { Routes, Route } from 'react-router-dom'
import Landing from '../Pages/Landing/Landing'
import ErrorPath from '../Utils/ErrorPath/ErrorPath'
import ItemListContainer from '../Utils/ItemListContainer/ItemListContainer'

const Content = () => {
  return (
    <>
      <Routes>
        <Route path='/coder-house-react/' element={<Landing msg="Lumos !== Nox" />} />
        <Route path='/coder-house-react/Category/:category' element={<ItemListContainer />} />
        <Route path='*' element={<ErrorPath />} />
      </Routes>
    </>
  )
}

export default Content