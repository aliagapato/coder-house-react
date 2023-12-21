import {useState} from 'react'
import SideBarElement from "./SideBarElement/SideBarElement"
import RandomInt from '../../Utils/RandomInt'
// crear SidebarElementsList para controlar listado?

const SideBar = () => {
  const categories = ['Libros', 'E-Books', 'Peliculas', 'Hechizos']
  const [activeItem, setActiveItem] = useState(categories[RandomInt(4)])
  const handlerClick = (el) => setActiveItem(el.target.dataset.id)

  return (
    <ul className="list-group">
      {
        categories.map((category, index) => {
          return (
            <SideBarElement key={"Sidebar-"+index} evento={handlerClick} id={index} category={category} activeItem={activeItem} />
          )          
        })
      }
    </ul>

  )
}

export default SideBar