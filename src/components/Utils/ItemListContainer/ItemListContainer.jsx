import { useEffect, useState } from "react";
// import API from "./../../../configuration/config"
import { getProducts, getProductsByCategoryId } from "../../../assets/mocks/AsyncProducts"
import LoadingBar from "../../Utils/LoadingBar/LoadingBar";
import EmptyState from "../../Utils/EmptyState/EmptyState";
import ItemList from "../../Utils/ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  let [items, setItems] = useState(undefined)
  let { categoryId } = useParams()

  useEffect(() => {

    const fetchData = async () => {

      setIsLoading(true)
      // let url = API.ML.URL.CATEGORY_DETAIL.replace('ID_CATEGORY', category)
      
      try {

        // let res = await fetch(url)
        let getData = (categoryId) ? getProductsByCategoryId : getProducts
        let res = await getData(categoryId)
        
        // if (!res.ok) {
        if (!res) {
          setIsError(true)
          // throw new Error(`Ocurrio un error al cargar (${url})`)
          throw new Error('Ocurrio un error al cargar los productos')
        }

        // res = await res.json()
        // setItems(res.results)
        setItems(res)
        
      } catch (error) {

        setIsError(true)
        throw new Error(error)

      } finally {

        setTimeout(() => { setIsLoading(false) }, 250)

      }
    }

    fetchData()
    
  }, [ categoryId ])


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
      {items.length === 0 ? <EmptyState msg="Categoria sin productos..."/> : <ItemList items={items} />}
    </>
  )

}

export default ItemListContainer