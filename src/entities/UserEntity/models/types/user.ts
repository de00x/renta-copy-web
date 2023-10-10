export interface User {
    id: string;
    username: string;
    avatar?: string;
}

export interface Auth {
    id: string;
    accessToken: string;
    refreshToken?: string;
}

export interface UserSchema {
    userData: User | null;
    isAuth: Auth | null
}
