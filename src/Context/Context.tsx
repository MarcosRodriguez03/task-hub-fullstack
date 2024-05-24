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

    boolUser: boolean
    setBoolUser: (pageTwoName: boolean) => void


    globalUserId: number
    setGlobalUserId: (pageTwoName: number) => void
    currentProjectId: number
    setCurrentProjectId: (pageTwoName: number) => void

    isProfileOpen: boolean
    setIsProfileOpen: (input: boolean) => void

    globalTaskName: string
    setGlobalTaskName: (input: string) => void

    globalTaskId: number
    setGlobalTaskId: (input: number) => void
    statusNum: number
    setStatusNum: (input: number) => void
    isClearDefault: boolean
    setIsClearDefault: (input: boolean) => void

    isNotif:boolean
    setIsNotif: (input:boolean) => void

}

export const Context = createContext<IContextValue>({} as IContextValue);

export const AppWrapper = ({ children, }: Readonly<{ children: React.ReactNode; }>) => {

    const [pageTwoName, setPageTwoName] = useState<string>("");
    const [pageTwoName2, setPageTwoName2] = useState<string>("");
    const [pageTwoName3, setPageTwoName3] = useState<boolean>(true);
    const [pageTwoName4, setPageTwoName4] = useState<boolean>(true);
    const [boolUser, setBoolUser] = useState<boolean>(true);
    const [globalUserId, setGlobalUserId] = useState<number>(0);
    const [currentProjectId, setCurrentProjectId] = useState<number>(0);
    const [isProfileOpen, setIsProfileOpen] = useState<boolean>(true);
    const [globalTaskName, setGlobalTaskName] = useState<string>("")
    const [globalTaskId, setGlobalTaskId] = useState<number>(0)
    const [statusNum, setStatusNum] = useState<number>(1)
    const [isClearDefault, setIsClearDefault] = useState<boolean>(true)
    const [isNotif, setIsNotif] = useState<boolean>(true);


    return (
        <Context.Provider value={{
            pageTwoName, setPageTwoName, setPageTwoName2, pageTwoName2, pageTwoName3, setPageTwoName3, pageTwoName4, setPageTwoName4, globalUserId,
            setGlobalUserId, currentProjectId, setCurrentProjectId, boolUser, setBoolUser, isProfileOpen, setIsProfileOpen, setGlobalTaskId, globalTaskId, setGlobalTaskName, globalTaskName, statusNum
            , setStatusNum, isClearDefault, setIsClearDefault, isNotif, setIsNotif
        }}>
            {children}
        </Context.Provider>
    )
}

export const useAppContext = () => {
    return useContext(Context)
}