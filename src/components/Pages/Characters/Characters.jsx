import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import LoadingBar from "../../Utils/LoadingBar/LoadingBar";
import ItemList from "../../Utils/ItemList/ItemList";

const Characters = () => {
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const location = useLocation()
  const STATE_API_LINK = location.state.data.apiLink
  let data = useRef()

  useEffect(() => {

    const fetchData = async () => {

      setIsLoading(true)

      try {

        let res = await fetch(STATE_API_LINK)

        if (!res.ok) {
          setIsError(true)
          throw new Error(`Ocurrio un error al cargar (${STATE_API_LINK})`)
        }

        res = await res.json()
        data.current = res.data

      } catch (error) {

        setIsError(true)
        throw new Error(error.message)

      } finally {

        // solo para efecto de cargando
        setTimeout(() => setIsLoading(false), 250)

      }
    }
    fetchData()
  }, [])


  if ((isLoading) | (data.current === undefined)) {
    return (
      <LoadingBar />
    )
  }

  if (isError) {
    return (
      // Crear un placeholder para error 
      <>
        <span>Error cargando elementos</span>
      </>
    )
  }

  return (
    <>
      <ItemList data={data.current} showExampleData={true} />
    </>
  )

}

export default Characters