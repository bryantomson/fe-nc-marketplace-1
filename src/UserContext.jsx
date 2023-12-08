import { createContext, useState } from "react";
export const UserContext = createContext()

export const UserProvider = (props) => {
    const [user, setUser] = useState('Nobody')
    return (
        
        <UserContext.Provider value={{user, setUser}}>
            {props.children}
        </UserContext.Provider>
    )
}