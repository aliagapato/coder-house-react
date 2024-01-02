import { useEffect, useState } from "react"
import SideBarElement from "./SideBarElement/SideBarElement"
import { Link } from "react-router-dom"
import classes from './SideBarElement/SideBarElement.module.css'

const SideBarList = ({ categories }) => {
  const [activeItem, setActiveItem] = useState(0)

  const getActiveItemOnRefresh = () => {
    const category = categories.find(c => c.localLink === window.location.pathname)
    return (category) ? category.id : 0
  }
  const handlerClick = (el) => setActiveItem(parseInt(el.target.dataset.id))

  useEffect(() => {
    setActiveItem(getActiveItemOnRefresh())
  }, [])


  return (
    <ul className="list-group">
      <Link to={'/coder-house-react/'} className={`${classes.resetLink} text-decoration-none text-white fs-5 mb-4`} >
        <li onClick={handlerClick} data-id={0} data-link={'/coder-house-react/'} className={`d-flex justify-content-between border rounded mb-4 p-2 fs-5 border-3 ${((activeItem === 0) ? "border-warning" : "")}`}>
          <div onClick={handlerClick} data-id={0} data-link={'/coderhouse-react/'}>Inicio</div>
        </li>
      </Link >
      {
        categories.map(category => {
          return (
            <SideBarElement key={category.id} id={category.id} name={category.name} quantity={category.quantity} localLink={category.localLink} apiLink={category.apiLink} evento={handlerClick} activeItem={activeItem} />
          )
        })
      }
    </ul >
  )
}

export default SideBarList