import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import HechizosContainer from "../../Containers/HechizosContainer/HechizosContainer";
import LibrosContainer from "../../Containers/LibrosContainer/LibrosContainer";
import PeliculasContainer from "../../Containers/PeliculasContainer/PeliculasContainer";
import PersonajesContainer from "../../Containers/PersonajesContainer/PersonajesContainer";
import PocionesContainer from "../../Containers/PocionesContainer/PocionesContainer";

const HandlerDataLink = () => {
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const location = useLocation()
  const STATE_API_LINK = location.state.data.apiLink
  const STATE_NAME = location.state.data.name
  let data = useRef()

  useEffect(() => {

    const fetchData = async () => {

      setIsLoading(true)
      console.log(STATE_API_LINK)

      try {

        let res = await fetch(STATE_API_LINK)

        if (!res.ok) {
          setIsError(true)
          throw new Error(`Ocurrio un error al cargar HandlerDataLink(${STATE_API_LINK})`)
        }

        data.current = await res.json()

      } catch (error) {

        setIsError(true)
        throw new Error(error.message)

      } finally {

        setIsLoading(false)

      }
    }
    fetchData()
  }, [])


  if (isLoading) {
    return (
      // <CategoryListPlaceHolder />
      <>
        <span>Cargando elementos</span>
      </>
    )
  }

  if (isError) {
    return (
      <>
        <span>Error cargando categorias</span>
      </>
    )
  }

  return (
    <>
      {(STATE_NAME === 'Hechizos') ? <HechizosContainer data={data.current} /> : ''}
      {(STATE_NAME === 'Libros') ? <LibrosContainer data={data.current} /> : ''}
      {(STATE_NAME === 'Peliculas') ? <PeliculasContainer data={data.current} /> : ''}
      {(STATE_NAME === 'Personajes') ? <PersonajesContainer data={data.current} /> : ''}
      {(STATE_NAME === 'Pociones') ? <PocionesContainer data={data.current} /> : ''}
    </>
  )
}

export default HandlerDataLink