import User from '../models/User';

interface UserI {
    email: string,
    name: string,
    picture: string
}

export const addUser = async (user: UserI): Promise<unknown> => {
    try {
        return await new User(user).save();
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