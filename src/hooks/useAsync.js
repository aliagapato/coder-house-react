import { useState, useEffect } from "react"

export const useAsync = (asyncFunction, initState = null, dependencies = []) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState(initState)

  useEffect(() => {
    setError(false)
    setLoading(true)
    asyncFunction()
    .then(data => setData(data))
    .catch(error => setError(error))
    .finally(() => setLoading(false))
  }, dependencies)

  return { loading, error, data }
}
