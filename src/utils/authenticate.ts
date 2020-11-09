import {OAuth2Client, TokenPayload} from 'google-auth-library';
const client = new OAuth2Client(process.env.CLIENT_ID);

const authenticate = async (token: string, clientId: string):Promise<TokenPayload> | null => {
    try {
        return await verify(token, clientId);
    }
    catch (error) {
        return null;
    }
};

async function verify(token: string, clientId: string): Promise<TokenPayload> {
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

export default authenticate;