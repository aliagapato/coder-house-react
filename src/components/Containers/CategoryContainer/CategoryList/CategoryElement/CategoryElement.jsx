import classes from './CategoryElement.module.css'
import { Link } from 'react-router-dom'

const CategoryElement = ({ id, name, quantity, link, evento, activeItem }) => {

  return (
    <Link to={`/coder-house-react/${name}`} className={`${classes.resetLink} text-decoration-none text-white fs-5 mb-5`} >
      <li onClick={evento} data-id={id} data-link={link} className={`d-flex justify-content-between border rounded mb-4 p-2 fs-5 border-3 ${((activeItem === id) ? "border-warning" : "")}`}>
        <div onClick={evento} data-id={id} data-link={link}>{name}</div>
        <div onClick={evento} data-id={id} data-link={link} className={`badge fs-6 border ${(activeItem === id) ? "bg-warning text-black" : "border-warning text-warning"}`}>{quantity}</div>
      </li>
    </Link >
  )

}

export default CategoryElement