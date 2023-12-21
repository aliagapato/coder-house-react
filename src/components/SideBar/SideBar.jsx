import {useState} from 'react'
import SideBarElement from "./SideBarElement/SideBarElement"

// crear SidebarElementsList para controlar listado?

const SideBar = () => {
  const categories = [
    {
      'name': 'Libros',
      id: 0
    },
    {
      'name': 'E-Books',
      id: 1
    },
    {
      'name': 'Peliculas',
      id: 2
    },
    {
      'name': 'Hechizos',
      id: 3
    }
  ]

  const [activeCategory, setActiveCategory] = useState('border border-warning')
  const [activeBadge, setActiveBadge] = useState('bg-warning')
  // border border-warning text-warning
  
  return (
    <ul className="list-group">
      {
        categories.map((category, index) => {
          return (
            <SideBarElement key={"Sidebar-"+index} id={index} name={category.name} evento={() => console.log(category.name)} activeCategory={activeCategory} activeBadge={activeBadge}/>
          )          
        })
      }
    </ul>

  )
}

export default SideBar