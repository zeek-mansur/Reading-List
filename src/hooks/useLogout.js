
import {useAuthContext} from '../hooks/useAuthContext'

// firebase 

import { signOut } from "firebase/auth"
import { auth } from "../firebase/config"


export const useLogout = ()  => {
    const { dispatch } = useAuthContext()
    const logout = () => {

        signOut(auth)
        .then(() => {
            dispatch({type: 'LOGOUT'})
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
        return {logout}

}