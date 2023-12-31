import { Routes, Route } from 'react-router-dom'
import LandingContainer from '../LandingContainer/LandingContainer'
import HechizosContainer from '../HechizosContainer/HechizosContainer'
import LibrosContainer from '../LibrosContainer/LibrosContainer'
import PeliculasContainer from '../PeliculasContainer/PeliculasContainer'
import PersonajesContainer from '../PersonajesContainer/PersonajesContainer'
import PocionesContainer from '../PocionesContainer/PocionesContainer'
import ErrorPath from '../../Utils/ErrorPath/ErrorPath'

const MainContainer = () => {
  return (
    <>
      <Routes>
        <Route path='/coder-house-react/' element={<LandingContainer msg="Lumos !== Nox" />} />
        <Route path='/coder-house-react/Hechizos' element={<HechizosContainer />} />
        <Route path='/coder-house-react/Libros' element={<LibrosContainer />} />
        <Route path='/coder-house-react/Peliculas' element={<PeliculasContainer />} />
        <Route path='/coder-house-react/Personajes' element={<PersonajesContainer />} />
        <Route path='/coder-house-react/Pociones' element={<PocionesContainer />} />
        <Route path='*' element={<ErrorPath />} />
      </Routes>
    </>
  )
}

export default MainContainer