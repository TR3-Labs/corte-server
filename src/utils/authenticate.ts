import { OAuth2Client, TokenPayload } from 'google-auth-library';
import jwt from 'jsonwebtoken';
import { UserDocument } from '../interfaces/document';
import { UserInterface } from '../interfaces/type';

const client = new OAuth2Client(process.env.CLIENT_ID);

const authenticate = async (token: string, clientId: string): Promise<TokenPayload | void> => {
    try {
        return await verify(token, clientId);
    }
    catch (error) {
        return new Promise((resolve) => resolve());
    }
};

async function verify(token: string, clientId: string): Promise<TokenPayload | undefined> {
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: clientId
        });
        const payload = ticket.getPayload();
        console.log(payload);
        return payload;
    }
    catch (err) {
        throw new Error(err);
    }
}

export function signJwt(user: UserDocument) {
    const secret: string = process.env.JWT_SECRET_KEY!;
    const token = jwt.sign({
        id: user._id,
        name: user.name,
        email: user.email,
        picture: user.picture
    }, secret);
    return {
        token,
        user
    }
}

export function verifyJwt(token: string): UserInterface | null {
    try {
        const secret: string = process.env.JWT_SECRET_KEY!;
        const user = <UserInterface>jwt.verify(token, secret);
        return user;
    }
    catch (error) {
        return null;
    }
}

export default authenticate;