'use client'

import { createContext, useContext, useState } from "react"

interface IContextValue {
    pageTwoName: string
    setPageTwoName: (pageTwoName: string) => void
    pageTwoName2: string
    setPageTwoName2: (pageTwoName: string) => void
    pageTwoName3: boolean
    setPageTwoName3: (pageTwoName: boolean) => void
    pageTwoName4: boolean
    setPageTwoName4: (pageTwoName: boolean) => void

    boolUser: string
    setBoolUser: (pageTwoName: string) => void


    globalUserId: number
    setGlobalUserId: (pageTwoName: number) => void
    currentProjectId: number
    setCurrentProjectId: (pageTwoName: number) => void

}

export const Context = createContext<IContextValue>({} as IContextValue);

export const AppWrapper = ({ children, }: Readonly<{ children: React.ReactNode; }>) => {

    const [pageTwoName, setPageTwoName] = useState<string>("");
    const [pageTwoName2, setPageTwoName2] = useState<string>("");
    const [pageTwoName3, setPageTwoName3] = useState<boolean>(true);
    const [pageTwoName4, setPageTwoName4] = useState<boolean>(true);
    const [boolUser, setBoolUser] = useState<string>("");
    const [globalUserId, setGlobalUserId] = useState<number>(0);
    const [currentProjectId, setCurrentProjectId] = useState<number>(0);

    return (
        <Context.Provider value={{
            pageTwoName, setPageTwoName, setPageTwoName2, pageTwoName2, pageTwoName3, setPageTwoName3, pageTwoName4, setPageTwoName4, globalUserId,
            setGlobalUserId, currentProjectId, setCurrentProjectId, boolUser, setBoolUser
        }}>
            {children}
        </Context.Provider>
    )
}

export const useAppContext = () => {
    return useContext(Context)
}