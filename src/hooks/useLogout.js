// firebase 

import { signOut } from "firebase/auth"
import { auth } from "../firebase/config"


export const useLogout = ()  => {

    const logout = () => {

        signOut(auth)
        .then(() => {
            console.log('user signed out')
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
        return {logout}

}