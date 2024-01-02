import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const Books = () => {
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
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

        setIsLoading(false)

      }
    }
    fetchData()
  }, [])


  if (isLoading) {
    return (
      // Crear un placeholder mientras carga
      <>
        <span>Cargando elementos</span>
      </>
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
      <div className="container p-0">
        <div className="row">
          {data.current.map(h => {
            return (
              <div key={h.id} className="col-12 col-lg-4 mb-4">
                <div className="card border border-3 rounded">
                  <div className="card-body">
                    <h5 className="card-title">id: {h.id}</h5>
                    <p className="card-text">type: {h.type}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )

}

export default Books