import { useContext, createContext, useEffect, useState } from "react"
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged } from "firebase/auth"
import { auth } from "../../firebase"

const GoogleAuthContext = createContext({ googleSignIn: () => {}, logOut: () => {}, user: {} })

/* eslint-disable */
export const GoogleAuthContextProvider = ({ children }: any) => {
  const [user, setUser] = useState({})
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
  }

  const logOut = () => {
    signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser || {})
    })
    return () => {
      unsubscribe()
    }
  }, [])

  return <GoogleAuthContext.Provider value={{ googleSignIn, logOut, user }}>{children}</GoogleAuthContext.Provider>
}

export const GoogleAuth = () => {
  return useContext(GoogleAuthContext)
}
