import React, { Children } from "react";
import { useEffect, useState } from "react";

export const Context = React.createContext({
    token: ''
})

export default function TokenContext({ children } : { children: string | JSX.Element | JSX.Element[] }) {
    const [token, setToken] = useState<string>('')
    
    useEffect(() => {
        async function fetchToken() {
            await fetch(process.env.EXPO_PUBLIC_AUTH_DOMAIN as string, {
                method: 'POST',
            }).then((middle) => {
                return middle.json()
            }).then((res) => {
                setToken('Bearer ' + res.access_token)
            }).catch(err => {
                console.log(err)
            })
        }

        fetchToken()
    }, [])

    return (
        <Context.Provider value={{token}}>
            {children}
        </Context.Provider>
    )
}