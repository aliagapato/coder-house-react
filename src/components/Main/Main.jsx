import { Routes, Route } from 'react-router-dom'
import LandingContainer from './../Containers/LandingContainer/LandingContainer'
import HechizosContainer from './../Containers/HechizosContainer/HechizosContainer'
import LibrosContainer from './../Containers/LibrosContainer/LibrosContainer'
import PeliculasContainer from './../Containers/PeliculasContainer/PeliculasContainer'
import PersonajesContainer from './../Containers/PersonajesContainer/PersonajesContainer'
import PocionesContainer from './../Containers/PocionesContainer/PocionesContainer'

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
      </Routes>
    </>
  )
}

export default MainContainer