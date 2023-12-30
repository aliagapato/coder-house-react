
import { useEffect, useState } from 'react'
import CategoryElement from './CategoryElement/CategoryElement'
import Constans from "./../../utils/Constants"

const CategoryContainer = () => {
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [categories, setCategories] = useState([])
  const [activeItem, setActiveItem] = useState(0)

  useEffect(() => {

    const fetchData = async () => {

      setIsLoading(true)

      try {

        let dummyCategories = []
        let res = null

        res = await fetch(Constans.API_HP_SPELLS).then(res => res.json())
        dummyCategories.push({ id: 0, name: 'Hechizos', quantity: res.meta.pagination.records, link: res.links.current })

        // res = await fetch(Constans.API_HP_BOOKS).then(res => res.json())
        // dummyCategories.push({ id: 1, name: 'Libros', quantity: res.meta.pagination.records, link: res.links.current })

        // res = await fetch(Constans.API_HP_MOVIES).then(res => res.json())
        // dummyCategories.push({ id: 2, name: 'Peliculas', quantity: res.meta.pagination.records, link: res.links.current })

        // res = await fetch(Constans.API_HP_CHARACTERS).then(res => res.json())
        // dummyCategories.push({ id: 3, name: 'Personajes', quantity: res.meta.pagination.records, link: res.links.current })

        // res = await fetch(Constans.API_HP_POTIONS).then(res => res.json())
        // dummyCategories.push({ id: 4, name: 'Pociones', quantity: res.meta.pagination.records, link: res.links.current })

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

  const handlerClick = (el) => setActiveItem(parseInt(el.target.dataset.id))

  if (isLoading) {
    return (
      <>
        <button className="btn btn-outline-warning w-100 fs-4" type="button" disabled>
          <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
          <span role="status"> Cargando categorias</span>
        </button>
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
    <ul className="list-group">
      {
        categories.map(category => {
          return (
            <CategoryElement key={category.id} id={category.id} name={category.name} quantity={category.quantity} link={category.link} evento={handlerClick} activeItem={activeItem} />
          )
        })
      }
    </ul>
  )
}

export default CategoryContainer