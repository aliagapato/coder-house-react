const fetchData = async STATE_API_LINK => {

  let res = await fetch(STATE_API_LINK)

  if (!res.ok) {
    throw new Error(`Ocurrio un error al cargar (${STATE_API_LINK})`)
  }

  res = await res.json()

  setTimeout(() => {
    return res.data
  }, 3000)

}

export default fetchData