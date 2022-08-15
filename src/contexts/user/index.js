import {createContext, useEffect, useReducer} from "react"

import {
  onAuthStateChangedListener, 
  createUserDocumentFromAuth
} from "../../utils/firebase"

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
})

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER"
}

const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (state, action) => {
  const {type, payload} = action

  switch(type){
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      }
    default:
      throw new Error(`Unhandled type ${type} in userReducer`)
  }
}

export const UserProvider = ({children}) => {
  const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE)
  const value = {currentUser}

  const setCurrentUser = (user) => {
    dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user})
  }

  useEffect(() => {
    const userChange = onAuthStateChangedListener((user) => {
      if(user){
        createUserDocumentFromAuth(user)
      }
      setCurrentUser(user)
    })

    return userChange
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
