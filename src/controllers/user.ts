import User from '../models/User';
import jwt from 'jsonwebtoken';

interface UserI {
    email: string,
    name: string,
    picture: string
}

export const addUser = async (user: UserI): Promise<unknown> => {
    try {
        const retUser = await new User(user).save();
        return jwt.sign(retUser, process.env.JWT_SECRET_KEY);
    }
    catch (err) { return err;}
};

export const hasAccount = async (user: UserI): Promise<unknown> => {
    try {
        const retUser = await User.findOne(user);
        if (!retUser)
            return addUser(user);
        return retUser;
    }
    catch (err) { return err;}
};

export const signInUser = (user: UserI): Promise<unknown> => {
    return hasAccount(user);
};