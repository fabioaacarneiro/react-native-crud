import React, { createContext } from 'react'
import users from '../data/users'

const UsersContext = createContext({})

export const UserProvider = (props: any) => (
  <UsersContext.Provider value={{state: users}}>
    {props.children}
  </UsersContext.Provider>
)

export default UsersContext
