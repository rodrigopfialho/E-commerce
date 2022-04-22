import {createContext, useContext, useState } from "react";

 const CountContext = createContext()

export default function CountProvider({children}) {
     //quantidade de items adicionado no cart
     const [addCarteValue, setAddCartValue] = useState(1)

     

    return (
        <CountContext.Provider 
        value={{
            addCarteValue, 
            setAddCartValue
            }}
            >
                {children}
        </CountContext.Provider>
    )
}

export function useCount() {
    const context = useContext(CountContext)
    const { addCarteValue, setAddCartValue} = context
    return {addCarteValue, setAddCartValue}
}