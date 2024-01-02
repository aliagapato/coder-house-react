import classes from './SideBarElement.module.css'
import { Link } from 'react-router-dom'

const SideBarElement = ({ id, name, quantity, localLink, apiLink, evento, activeItem }) => {
  const dataToPass = {
    data: {
      apiLink: apiLink,
      name: name
    }
  }
  return (
    <Link to={localLink} state={dataToPass} className={`${classes.resetLink} text-decoration-none text-white fs-5 mb-4`} >
      <li onClick={evento} data-id={id} data-link={apiLink} className={`d-flex justify-content-between border rounded mb-4 p-2 fs-5 border-3 ${((activeItem === id) ? "border-warning" : "")}`}>
        <div onClick={evento} data-id={id} data-link={apiLink}>{name}</div>
        <div onClick={evento} data-id={id} data-link={apiLink} className={`badge fs-6 border ${(activeItem === id) ? "bg-warning text-black" : "border-warning text-warning"}`}>{quantity}</div>
      </li>
    </Link >
  )

}

export default SideBarElement