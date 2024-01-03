import { useEffect, useState } from "react"
import SideBarElement from "./SideBarElement/SideBarElement"
import { Link } from "react-router-dom"
import classes from './SideBarElement/SideBarElement.module.css'

const SideBarList = ({ categories }) => {
  const [activeItem, setActiveItem] = useState('inicio')

  const getActiveItemOnRefresh = () => {
    let pathname = window.location.pathname.split('/')[window.location.pathname.split('/').length-1]
    if(pathname === '') return 'inicio'
    // return categories.find(c => c.id === pathname)[0].id
  }

  const handlerClick = (el) => setActiveItem(el.target.dataset.id)

  useEffect(() => {
    setActiveItem(getActiveItemOnRefresh())
  }, [])


  return (
    <ul className="list-group">
      <Link to={'/coder-house-react/'} className={`${classes.resetLink} text-decoration-none text-white fs-6 mb-4`} >
        <li onClick={handlerClick} data-id="inicio" className={`d-flex justify-content-between border rounded p-2 border-3 ${((activeItem === 0) ? "border-warning" : "")}`}>
          <div onClick={handlerClick} data-id="inicio">Inicio</div>
        </li>
      </Link >
      {
        categories.map(c => {
          return (
            <SideBarElement key={c.id} id={c.id} name={c.name} evento={handlerClick} activeItem={activeItem} />
          )
        })
      }
    </ul >
  )
}

export default SideBarList