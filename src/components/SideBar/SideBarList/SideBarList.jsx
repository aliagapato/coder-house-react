import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import classes from './SideBarElement/SideBarElement.module.css'
import SideBarElement from "./SideBarElement/SideBarElement"
import { useAuthContext } from "../../../hooks/useAuthContext"

const SideBarList = ({ categories }) => {
  const { user } = useAuthContext()
  const [activeItem, setActiveItem] = useState('inicio')

  const getActiveItemOnRefresh = () => {
    let pathname = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]
    if (pathname === '') return 'inicio'
    return pathname
  }

  const handlerClick = (el) => setActiveItem(el.target.dataset.id)

  useEffect(() => {
    setActiveItem(getActiveItemOnRefresh())
  }, [])


  return (
    <ul className="w-100 list-group">
      <Link to={'/'} className={`${classes.resetLink} text-decoration-none text-white mb-4`} >
        <li onClick={handlerClick} data-id={'inicio'} className={`d-flex justify-content-between border rounded p-2 border-3 ${((activeItem === 'inicio') ? "border-warning" : "")}`}>
          <div onClick={handlerClick} data-id={'inicio'}>Inicio</div>
        </li>
      </Link >
      {categories && categories.map(c => <SideBarElement key={c.id} id={c.id} name={c.name} evento={handlerClick} activeItem={activeItem} />)}
      {(user)
        ? (
            <Link to={`/purchases/${user.email}`} className={`${classes.resetLink} text-decoration-none text-white mb-4`} >
              <li onClick={handlerClick} data-id={'compras'} className={`d-flex justify-content-between border rounded p-2 border-3 ${((activeItem === 'compras') ? "border-warning" : "")}`}>
                <div onClick={handlerClick} data-id={'compras'}>Mis compras</div>
              </li>
            </Link >
        ) : ('')

      }
    </ul>
  )
}

export default SideBarList