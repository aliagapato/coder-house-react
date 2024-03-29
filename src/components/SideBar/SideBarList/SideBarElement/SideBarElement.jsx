import { Link } from 'react-router-dom'
import classes from './SideBarElement.module.css'

const SideBarElement = ({ id, name, evento, activeItem }) => {
  
  return (
    <Link to={`/category/${id}`} className={`${classes.resetLink} text-decoration-none text-white mb-4`} >
      <li onClick={evento} data-id={id} className={`d-flex justify-content-between border rounded p-2 border-3 ${((activeItem === id) ? "border-warning" : "")}`}>
        <div onClick={evento} data-id={id}>{name}</div>
      </li>
    </Link >
  )

}

export default SideBarElement