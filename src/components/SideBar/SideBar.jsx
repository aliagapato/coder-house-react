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


  return (
    <ul className="list-group">
      {
        categories.map((category, index) => {
          return (
            <SideBarElement key={"Sidebar-"+index} name={category.name} id={category.id} />
          )          
        })
      }
    </ul>

  )
}

export default SideBar