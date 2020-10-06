import {useState, useEffect} from 'react'
import {GetCurrentUser} from "./GetCurrentUser";
import {AddAuthListener} from "./AddAuthListener";

export const useAuth = () => {
    const [authInfo, setAuthInfo] = useState(() => {
        const user = GetCurrentUser()
        const isLoading = !user

        return {isLoading, user}
    })
    useEffect(() => {
      const unsubscribe = AddAuthListener(user => {
            setAuthInfo({isLoading: false, user})
        })
        return unsubscribe
    },[])
    return authInfo
}
