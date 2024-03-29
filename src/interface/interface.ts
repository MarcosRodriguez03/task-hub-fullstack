
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
}