import { Routes, Route } from 'react-router-dom'
import Landing from '../Pages/Landing/Landing'
import Spells from '../Pages/Spells/Spells'
import Books from '../Pages/Books/Books'
import Movies from '../Pages/Movies/Movies'
import Characters from '../Pages/Characters/Characters'
import Potions from '../Pages/Potions/Potions'
import ErrorPath from '../Utils/ErrorPath/ErrorPath'

const Content = () => {
  return (
    <>
      <Routes>
        <Route path='/coder-house-react/' element={<Landing msg="Lumos !== Nox" />} />
        <Route path='/coder-house-react/Hechizos' element={<Spells />} />
        <Route path='/coder-house-react/Libros' element={<Books />} />
        <Route path='/coder-house-react/Peliculas' element={<Movies />} />
        <Route path='/coder-house-react/Personajes' element={<Characters />} />
        <Route path='/coder-house-react/Pociones' element={<Potions />} />
        <Route path='*' element={<ErrorPath />} />
      </Routes>
    </>
  )
}

export default Content