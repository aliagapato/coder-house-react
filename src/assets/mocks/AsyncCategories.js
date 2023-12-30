const categories = [
  {
    id: 1,
    name: 'Hechizos',
    quantity: 312,
    link: 'https://api.potterdb.com/v1/spells?page[number]=1'
  },
  {
    id: 2,
    name: 'Libros',
    quantity: 7,
    link: 'https://api.potterdb.com/v1/books?page[number]=1'
  },
  {
    id: 3,
    name: 'Peliculas',
    quantity: 11,
    link: 'https://api.potterdb.com/v1/movies?page[number]=1'
  },
  {
    id: 4,
    name: 'Personajes',
    quantity: 4592,
    link: 'https://api.potterdb.com/v1/characters?page[number]=1'
  },
  {
    id: 5,
    name: 'Pociones',
    quantity: 156,
    link: 'https://api.potterdb.com/v1/potions?page[number]=1'
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