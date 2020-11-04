import {GraphQLString, GraphQLError} from 'graphql';
import authenticate from '../../utils/authenticate';
import UserType from '../types/user';
import {signInUser} from '../../controllers/user';

interface Args {
    token: string,
    clientId: string
}

const signUser = {
    type: UserType,
    args: {
        token: {type: GraphQLString},
        clientId: {type: GraphQLString}
    },
    async resolve(parent: unknown, args: Args): Promise<unknown> {
        // Payload contains user data. null if user is not authenticated
        const payload = await authenticate(args.token, args.clientId);
        if (!payload)
            return new GraphQLError('User Not Authenticated');
        return signInUser({email: payload.email, name: payload.name, picture: payload.picture});
    }
};

export default signUser;