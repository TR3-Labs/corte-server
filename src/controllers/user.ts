import User from '../models/User';
import { UserDocument } from '../interfaces/document';
import { UserInterface, AuthPayloadInterface } from '../interfaces/type';
import { signJwt } from '../utils/authenticate';

export const addUser = async (user: UserInterface): Promise<AuthPayloadInterface> => {
    try {
        const newUser: UserDocument = await new User(user).save();

        return signJwt(newUser);
    }
    catch (err: any) { return err; }
};

export const hasAccount = async (user: UserInterface): Promise<AuthPayloadInterface> => {
    try {
        const oldUser = await User.findOne(user);
        if (!oldUser)
            return addUser(user);
        return signJwt(oldUser);
    }
    catch (err) { return err; }
};

export const signInUser = (user: UserInterface): Promise<AuthPayloadInterface> => {
    return hasAccount(user);
};