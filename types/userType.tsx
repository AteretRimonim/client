
 export interface User {
    userName: string;
    email: string;
    password:string;
}

export interface LoginRequest {
    email: string;
    password: string;
}