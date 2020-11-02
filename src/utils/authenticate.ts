import {OAuth2Client, TokenPayload} from 'google-auth-library';

const client = new OAuth2Client(process.env.CLIENT_ID);

async function verify(token: string, clientId: string): Promise<TokenPayload> {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: clientId
    });
    const payload = ticket.getPayload();
    // const userid = payload['sub'];
    // check
    return payload;
}

export default verify;