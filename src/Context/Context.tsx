'use client'

import { createContext, useContext, useState } from "react"

interface IContextValue {
    pageTwoName: string
    setPageTwoName: (pageTwoName: string) => void
}

export const Context = createContext<IContextValue>({} as IContextValue);

export const AppWrapper = ({ children, }: Readonly<{ children: React.ReactNode; }>) => {

    const [pageTwoName, setPageTwoName] = useState<string>("");

    return (
        <Context.Provider value={{ pageTwoName, setPageTwoName }}>
            {children}
        </Context.Provider>
    )
}

export const useAppContext = () => {
    return useContext(Context)
}