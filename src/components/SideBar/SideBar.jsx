
import { useEffect, useState } from 'react'
import { getCategories } from './../../assets/mocks/AsyncCategories'
import SideBarList from './SideBarList/SideBarList'
import SideBarPlaceHolder from './SideBarPlaceHolder'
// import API from '../../configuration/config'

const SideBar = () => {
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [categories, setCategories] = useState(undefined)

  useEffect(() => {

    const fetchData = async () => {

      setIsLoading(true)
      // let url = API.ML.URL.CATEGORIES

      try {

        // let res = await fetch(url)
        let res = await getCategories()

        // if (!res.ok) {
        if (!res) {
          setIsError(true)
          // throw new Error(`Ocurrio un error al cargar (${url})`)
          throw new Error('Ocurrio un error al cargar las categorias')
        }

        // res = await res.json()
        setCategories(res)

      } catch (error) {

        setIsError(true)
        throw new Error(error)

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