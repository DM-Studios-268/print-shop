import { useState, createContext } from "react"

const UserContext = createContext()
export default UserContext

const ContextState = () => {
  return {
  }
}

const UserContextProvider = (props) => {
  const state = ContextState()

  return (
    <UserContext.Provider value={state}>
      {props.children}
    </UserContext.Provider>
  ) 
}

export { UserContext, UserContextProvider }
