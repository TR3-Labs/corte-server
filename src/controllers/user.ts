import User from '../models/User';
import { UserDocument } from '../interfaces/document';
import { AuthPayloadInterface } from '../interfaces/type';
import { signJwt } from '../utils/authenticate';

interface SignUserInterface {
    email: string,
    name: string,
    picture: string
}

export const addUser = async (user: SignUserInterface): Promise<AuthPayloadInterface> => {
    try {
        const newUser: UserDocument = await new User(user).save();

        return signJwt(newUser);
    }
    catch (err) { return err; }
};

export const hasAccount = async (user: SignUserInterface): Promise<AuthPayloadInterface> => {
    try {
        const oldUser = await User.findOne(user);
        if (!oldUser)
            return addUser(user);
        return signJwt(oldUser);
    }
    catch (err) { return err; }
};

export const signInUser = (user: SignUserInterface): Promise<AuthPayloadInterface> => {
    return hasAccount(user);
};