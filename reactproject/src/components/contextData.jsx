import { createContext, useContext, useState } from "react";


let AuthUser = createContext()

export let AuthProvider = ({ children }) => {

    let [data, setData] = useState({
        userData: null,
        isLoggedIn: false
    })

    let [contactData, setContactData] = useState([]);

    // console.log(data);

    let logOut = () => {
        setData({ isLoggedIn: false, userData: null })
    }
    return <AuthUser.Provider value={{data, setData , logOut, contactData, setContactData}}>
        {children}
    </AuthUser.Provider>
}

//use Context

export let useAuth = () => useContext(AuthUser) 