import { useState } from "react"
import CategoryElement from "./CategoryElement/CategoryElement"
import { Link } from "react-router-dom"
import classes from './CategoryElement/CategoryElement.module.css'

const CategoryList = ({ categories }) => {
  const [activeItem, setActiveItem] = useState(0)
  const handlerClick = (el) => setActiveItem(parseInt(el.target.dataset.id))

  return (
    <ul className="list-group">
      <Link to={'/coder-house-react/'} className={`${classes.resetLink} text-decoration-none text-white fs-5 mb-5`} >
        <li onClick={handlerClick} data-id={0} data-link={'/coder-house-react/'} className={`d-flex justify-content-between border rounded mb-4 p-2 fs-5 ${((activeItem === 0) ? "border-warning border-5" : "")}`}>
          <div onClick={handlerClick} data-id={0} data-link={'/coderhouse-react/'}>Inicho</div>
        </li>
      </Link >
      {
        categories.map(category => {
          return (
            <CategoryElement key={category.id} id={category.id} name={category.name} quantity={category.quantity} link={category.link} evento={handlerClick} activeItem={activeItem} />
          )
        })
      }
    </ul >
  )
}

export default CategoryList