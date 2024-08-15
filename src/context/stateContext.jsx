import { createContext, useContext, useState } from "react";

const stateContext = createContext({
    open: false,
    setOpen: () => { }
})

export const StateContextProvider = ({ children }) => {
    const [open, setOpen] = useState(false)

    return (
        <stateContext.Provider value={{ open, setOpen }}>
            {children}
        </stateContext.Provider>
    )
}

export const useStateContext = () => useContext(stateContext)