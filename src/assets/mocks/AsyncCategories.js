const categories = [
  {
    "id": "MLC1743",
    "name": "Autos, Motos y Otros"
  },
  {
    "id": "MLC1144",
    "name": "Consolas y Videojuegos"
  },
  {
    "id": "MLC1182",
    "name": "Instrumentos Musicales"
  },
  {
    "id": "MLC3025",
    "name": "Libros, Revistas y Comics"
  },
  {
    "id": "MLC1168",
    "name": "Música y Películas"
  }
]

const getCategories = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categories)
    }, 250)
  })
}

export { getCategories }