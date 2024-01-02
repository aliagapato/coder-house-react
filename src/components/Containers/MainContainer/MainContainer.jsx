import { Routes, Route } from 'react-router-dom'
import LandingContainer from '../LandingContainer/LandingContainer'
import ErrorPath from '../../Utils/ErrorPath/ErrorPath'
import Spells from '../../Pages/Spells/Spells'

const MainContainer = () => {
  return (
    <>
      <Routes>
        <Route path='/coder-house-react/' element={<LandingContainer msg="Lumos !== Nox" />} />
        <Route path='/coder-house-react/Hechizos' element={<Spells />} />
        {/* <Route path='/coder-house-react/Libros' element={<Books />} />
        <Route path='/coder-house-react/Peliculas' element={<Movies />} />
        <Route path='/coder-house-react/Personajes' element={<Characters />} />
        <Route path='/coder-house-react/Pociones' element={<Potions />} /> */}
        <Route path='*' element={<ErrorPath />} />
      </Routes>
    </>
  )
}

export default MainContainer