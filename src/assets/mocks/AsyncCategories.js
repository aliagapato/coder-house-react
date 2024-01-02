const categories = [
  {
    id: 2,
    name: 'Libros',
    quantity: 7,
    localLink: '/coder-house-react/Libros',
    apiLink: 'https://api.potterdb.com/v1/books?page[number]=0'
  },
  {
    id: 3,
    name: 'Peliculas',
    quantity: 11,
    localLink: '/coder-house-react/Peliculas',
    apiLink: 'https://api.potterdb.com/v1/movies?page[number]=0'
  },
  {
    id: 1,
    name: 'Hechizos',
    quantity: 312,
    localLink: '/coder-house-react/Hechizos',
    apiLink: 'https://api.potterdb.com/v1/spells?page[number]=0'
  },
  {
    id: 4,
    name: 'Personajes',
    quantity: 4592,
    localLink: '/coder-house-react/Personajes',
    apiLink: 'https://api.potterdb.com/v1/characters?page[number]=0'
  },
  {
    id: 5,
    name: 'Pociones',
    quantity: 156,
    localLink: '/coder-house-react/Pociones',
    apiLink: 'https://api.potterdb.com/v1/potions?page[number]=0'
  }
]

const getCategories = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categories)
    }, 2500)
  })
}

export default getCategories