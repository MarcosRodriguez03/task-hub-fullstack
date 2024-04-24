import { IToken, IUserData, IUserInfo, } from "@/interface/interface";


const url = "https://taskhubbackenddb.azurewebsites.net";
let userData: IUserData

export const createAccount = async (createdUser: IUserInfo) => {
    //were using this feth to make a post request
    // we have to set the method to POST
    // we set the content type to application / json to specifiy our json data format 

    const res = await fetch(url + `/User/AddUser`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(createdUser)
    })
    //we need to check if post was succeesful
    if (!res.ok) {
        const message = "an error has occured " + res.status;
        throw new Error(message);
    }

    const data = await res.json();
    console.log(data);
    return data

}

export const login = async (loignUser: IUserInfo) => {
    const res = await fetch(url + `/User/Login`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(loignUser)
    })
    if (!res.ok) {
        const message = "an error has occured " + res.status;
        // throw new Error(message);
    }
    const data: IToken = await res.json();
    return data;
}

export const getLoggedInUserData = async (username: string) => {
    const res = await fetch(url + "/User/GetUserByUsername/" + username);
    const data = await res.json();
    userData = data;
    return userData;
}

export const loggedInData = () => {
    return userData;
}

//this function helps to see if our user is logged in 
export const checkToken = () => {
    let result = false;

    let lsData = localStorage.getItem("Token");
    if (lsData != null) {
        result = true
    }
    return result
}

//dashboard fetches
export const getBlogItemsByUserId = async (userId: number) => {
    const res = await fetch(url + '/Blog/GetItemsByUserId/' + userId)
    let data = await res.json();
    return data;
}


export const publishEditUserInfo = async (id: number, firstName: string, lastName: string, contact: string, bio: string, image: string) => {
    const res = await fetch(url + `/User/UpdateUserInfo/${id}/${firstName}/${lastName}/${contact}/${bio}/${image}`, {
        method: "PUT",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            id: id,
            firstName: firstName,
            lastName: lastName,
            contact: contact,
            bio: bio,
            image: image
        })
    })
    if (!res.ok) {
        const message = "An Error has occured" + res.status;
        throw new Error(message);
    }
    const data = await res.json();
    return data;

}

