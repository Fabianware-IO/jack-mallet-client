export interface User {
    _id?: string;
    username: string;
    password: string;
    fullName: string;
    authenticationToken?: string;
    token_age?: string;
}
