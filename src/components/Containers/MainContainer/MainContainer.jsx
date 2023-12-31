import { Routes, Route } from 'react-router-dom'
import LandingContainer from '../LandingContainer/LandingContainer'
import ErrorPath from '../../Utils/ErrorPath/ErrorPath'
import HandlerDataLink from '../../Utils/HandlerDataLink/HandlerDataLink'

const MainContainer = () => {
  return (
    <>
      <Routes>
        <Route path='/coder-house-react/' element={<LandingContainer msg="Lumos !== Nox" />} />
        <Route path='/coder-house-react/Hechizos' element={<HandlerDataLink />} />
        <Route path='/coder-house-react/Libros' element={<HandlerDataLink />} />
        <Route path='/coder-house-react/Peliculas' element={<HandlerDataLink />} />
        <Route path='/coder-house-react/Personajes' element={<HandlerDataLink />} />
        <Route path='/coder-house-react/Pociones' element={<HandlerDataLink />} />
        <Route path='*' element={<ErrorPath />} />
      </Routes>
    </>
  )
}

export default MainContainer