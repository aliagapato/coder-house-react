
const API = {
  ML: {
    URL: {
      BASE: 'https://api.mercadolibre.com/sites/MLA/',
      CATEGORIES: 'https://api.mercadolibre.com/sites/MLA/categories',
      CATEGORY_DETAIL: 'https://api.mercadolibre.com/sites/MLA/search?category=ID_CATEGORY',
      CATEGORY_SEARCH: 'https://api.mercadolibre.com/sites/MLA/search?category=ID_CATEGORY&q=KEYWORD',
      SEARCH: 'https://api.mercadolibre.com/sites/MLA/search?q=KEYWORD'
    }
  },
  HP: {
    BASE_URL: 'https://api.potterdb.com/v1/books?page[number]=0'
  }
}

export default API