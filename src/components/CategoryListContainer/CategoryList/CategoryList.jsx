import { useState } from "react"
import CategoryElement from "./CategoryElement/CategoryElement"

const CategoryList = ({ categories }) => {
  const [activeItem, setActiveItem] = useState(0)
  const handlerClick = (el) => setActiveItem(parseInt(el.target.dataset.id))

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

export default CategoryList