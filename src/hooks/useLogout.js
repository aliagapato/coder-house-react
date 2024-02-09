import { useEffect, useState } from "react"
import { auth } from "../services/firebase/firebaseConfig"
import { signOut } from "firebase/auth"
import { useAuthContext } from "../hooks/useAuthContext"
import { useNavigate } from "react-router-dom"

export const useLogout = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [isCancelled, setIsCancelled] = useState(false)
  const { dispatch } = useAuthContext()
  const navigate = useNavigate()
  
  const logout = async () => {
    setError(null)
    setIsPending(true)
    try {
      await signOut(auth)
      dispatch({ type: "LOGOUT" })

      if (!isCancelled) {
        setIsPending(false)
        setError(null)
      }

      navigate('/')
    } catch (err) {
      if (!isCancelled) {
        setError(err.message)
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { logout, error, isPending }
}
