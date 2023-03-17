import api from "@/web/services/api"
import { createContext, useEffect, useState } from "react"
import jsonwebtoken from "jsonwebtoken"
import config from "@/web/config"

const AppContext = createContext()

export const AppContextProvider = (props) => {
  const [session, setSession] = useState(null)

  const signOut = () => {
    setSession(null)
    localStorage.removeItem(config.session.localStorageKey)
  }

  const signIn = async (email, password) => {
    try {
      const {
        data: { result: jwt },
      } = await api.post("/sign-in", { email, password })

      localStorage.setItem(config.session.localStorageKey, jwt)
      setSession(jsonwebtoken.decode(jwt).payload)

      return [null, true]
    } catch (err) {
      return [err, false]
    }
  }

  useEffect(() => {
    const jwt = localStorage.getItem(config.session.localStorageKey)
    // console.log(jwt)

    if (jwt) {
      setSession(jsonwebtoken.decode(jwt).payload)

      return
    }
  }, [])

  return (
    <AppContext.Provider
      value={{ state: session, actions: { signIn, signOut } }}
      {...props}
    />
  )
}

export default AppContext
