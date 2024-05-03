'use client'

import { createContext, useContext, useState } from "react"

interface IContextValue {
    pageTwoName: string
    setPageTwoName: (pageTwoName: string) => void
    pageTwoName2: string
    setPageTwoName2: (pageTwoName: string) => void
    pageTwoName3: string
    setPageTwoName3: (pageTwoName: string) => void
    globalUserId: number
    setGlobalUserId: (pageTwoName: number) => void
    currentProjectId: number
    setCurrentProjectId: (pageTwoName: number) => void

}

export const Context = createContext<IContextValue>({} as IContextValue);

export const AppWrapper = ({ children, }: Readonly<{ children: React.ReactNode; }>) => {

    const [pageTwoName, setPageTwoName] = useState<string>("");
    const [pageTwoName2, setPageTwoName2] = useState<string>("");
    const [pageTwoName3, setPageTwoName3] = useState<string>("");
    const [globalUserId, setGlobalUserId] = useState<number>(0);
    const [currentProjectId, setCurrentProjectId] = useState<number>(0);

    return (
        <Context.Provider value={{
            pageTwoName, setPageTwoName, setPageTwoName2, pageTwoName2, pageTwoName3, setPageTwoName3, globalUserId,
            setGlobalUserId, currentProjectId, setCurrentProjectId
        }}>
            {children}
        </Context.Provider>
    )
}

export const useAppContext = () => {
    return useContext(Context)
}