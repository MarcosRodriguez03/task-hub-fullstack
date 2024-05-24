import { StaticImageData } from "next/image";

//get our token 
export interface IToken {
    token: string
}

//for login and create account fetch 
export interface IUserInfo {

    username: string;
    password: string;
}

// this is getting our users info id and username
export interface IUserData {
    userId: number
    publisherName: string

    id: number
    firstName: string
    lastName: string
    contact: string
    bio: string
    image: string
    username: string
    salt: string
    hash: string

}
export interface IUserProfile {
    id: number
    firstName: string
    lastName: string
    contact: string
    bio: string
    image: string
    username: string
}
export interface IUserProfileIndex {
    [index: number]: {
        id: number
        firstName: string
        lastName: string
        contact: string
        bio: string
        image: string
        username: string
    }

}


export interface IProject {
    id: number
    UserId: number
    projectName: string
    isDeleted: boolean
}

export interface ITask {
    id: number,
    projectID: number,
    taskName: string,
    taskDescription: string,
    taskDuration: string,
    userID: number,
    dueDate: string,
    priority: string,
    status: string,
    isDeleted: boolean
}
export interface ITaskArr {
    [index: number]: {
        id: number,
        projectID: number,
        taskName: string,
        taskDescription: string,
        taskDuration: string,
        userID: number,
        dueDate: string,
        priority: string,
        status: string,
        isDeleted: boolean
    }

}

export interface IProjectUserIsIn {
    id: number,
    projectID: number,
    userID: number
}

export interface IMessage {
    SenderID: number,
    Room: number,
    Message: string
}