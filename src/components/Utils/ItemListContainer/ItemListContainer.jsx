import { useEffect, useState } from "react";
import API from "./../../../configuration/config"
import LoadingBar from "../../Utils/LoadingBar/LoadingBar";
import ItemList from "../../Utils/ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  let [items, setItems] = useState(undefined)
  let { category } = useParams()

  useEffect(() => {

    const fetchData = async () => {

      setIsLoading(true)
      let url = API.ML.URL.CATEGORY_DETAIL.replace('ID_CATEGORY', category)
      
      try {

        let res = await fetch(url)

        if (!res.ok) {
          setIsError(true)
          throw new Error(`Ocurrio un error al cargar (${url})`)
        }

        res = await res.json()
        setItems(res.results)

      } catch (error) {

        setIsError(true)
        throw new Error(error.message)

      } finally {

        setTimeout(() => { setIsLoading(false) }, 250)

      }
    }

    fetchData()
    
  }, [category])


  if ((isLoading) | (items === undefined)) {
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
      <ItemList items={items} showExampleData={true} />
    </>
  )

}

export default ItemListContainer