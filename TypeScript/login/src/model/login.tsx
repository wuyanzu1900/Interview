export interface LoginEntity{
    // entity
    login:string;
    password:string;
}

export const createEmptyLogin = () :LoginEntity =>({
    login:"",
    password:""
})