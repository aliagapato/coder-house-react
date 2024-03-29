import { useEffect, useState } from "react"

import { signInWithPopup } from "firebase/auth"
import { auth } from "../services/firebase/firebaseConfig"
import { useAuthContext } from "../hooks/useAuthContext"

export const useSocialSignup = (provider) => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [isCancelled, setIsCancelled] = useState(false)

  const { dispatch } = useAuthContext()

  const signInWithSocial = async () => {
    setError(null)
    setIsPending(true)

    try {
      const res = await signInWithPopup(auth, provider)
      dispatch({ type: "LOGIN", payload: res.user })

      if (!isCancelled) {
        setIsPending(false) // Set isPending to false after the asynchronous call completes
        setError(null)
      }
    } catch (err) {
      setError(err.message)
      setIsPending(false)
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { error, isPending, signInWithSocial }
}
