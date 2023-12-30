
import { useEffect, useState } from 'react'
// import Constans from "../../utils/Constants"
import getCategories from './../../../assets/mocks/AsyncCategories'
import CategoryList from './CategoryList/CategoryList'
import CategoryListPlaceHolder from './CategoryPlaceHolder'

const CategoryContainer = () => {
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [categories, setCategories] = useState([])

  useEffect(() => {

    const fetchData = async () => {

      setIsLoading(true)

      try {

        let dummyCategories = []
        // let res = null

        // res = await fetch(Constans.API_HP_SPELLS).then(res => res.json())
        // dummyCategories.push({ id: 0, name: 'Hechizos', quantity: res.meta.pagination.records, link: res.links.current })

        // res = await fetch(Constans.API_HP_BOOKS).then(res => res.json())
        // dummyCategories.push({ id: 1, name: 'Libros', quantity: res.meta.pagination.records, link: res.links.current })

        // res = await fetch(Constans.API_HP_MOVIES).then(res => res.json())
        // dummyCategories.push({ id: 2, name: 'Peliculas', quantity: res.meta.pagination.records, link: res.links.current })

        // res = await fetch(Constans.API_HP_CHARACTERS).then(res => res.json())
        // dummyCategories.push({ id: 3, name: 'Personajes', quantity: res.meta.pagination.records, link: res.links.current })

        // res = await fetch(Constans.API_HP_POTIONS).then(res => res.json())
        // dummyCategories.push({ id: 4, name: 'Pociones', quantity: res.meta.pagination.records, link: res.links.current })

        dummyCategories = await getCategories()

        if (dummyCategories.length === 0) {
          setIsError(true)
          throw new Error("Sin categorias que mostrar")
        }

        setCategories(dummyCategories)

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
      <CategoryListPlaceHolder />
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
    <CategoryList categories={categories} />
  )
}

export default CategoryContainer