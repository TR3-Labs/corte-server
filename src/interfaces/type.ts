import {UserDocument} from './document';

export interface UserInterface {
    email: string,
    name: string,
    picture: string
}

export interface AuthPayloadInterface {
    token: string,
    user: UserDocument
}