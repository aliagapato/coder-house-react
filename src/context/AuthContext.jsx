import { onAuthStateChanged } from "firebase/auth"
import { createContext, useReducer, useEffect } from "react"
import { auth } from "../services/firebase/firebaseConfig"
import authReducer from "../Utils/authReducer"

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  })
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user})
      unsub()
    })
  }, [])

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}


