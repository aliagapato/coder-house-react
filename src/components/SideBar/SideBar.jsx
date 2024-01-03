
import { useEffect, useState } from 'react'
import SideBarList from './SideBarList/SideBarList'
import SideBarPlaceHolder from './SideBarPlaceHolder'
import API from '../../configuration/config'

const SideBar = () => {
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [categories, setCategories] = useState(undefined)

  useEffect(() => {

    const fetchData = async () => {

      setIsLoading(true)
      let url = API.ML.URL.CATEGORIES

      try {

        let res = await fetch(url)

        if (!res.ok) {
          setIsError(true)
          throw new Error(`Ocurrio un error al cargar (${url})`)
        }

        res = await res.json()
        setCategories(res)

      } catch (error) {

        setIsError(true)
        throw new Error(error.message)

      } finally {

        setTimeout(() => { setIsLoading(false) }, 250)

      }
    }

    fetchData()

  }, [])

  if ((isLoading) | (categories === undefined)) {
    return (
      <SideBarPlaceHolder />
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
    <SideBarList categories={categories} />
  )
}

export default SideBar