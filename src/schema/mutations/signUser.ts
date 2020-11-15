import {GraphQLString, GraphQLError} from 'graphql';
import authenticate from '../../utils/authenticate';
import AuthPayloadType from '../types/authPayload';
import {signInUser} from '../../controllers/user';
import {AuthPayloadInterface} from '../../interfaces/type';

const signUser = {
    type: AuthPayloadType,
    args: {
        token: {type: GraphQLString},
        clientId: {type: GraphQLString}
    },
    async resolve(parent: unknown, args: {[argName: string]: string}): Promise<AuthPayloadInterface | GraphQLError> {
        // Payload contains user data. null if user is not authenticated
        const payload = await authenticate(args.token, args.clientId);
        if (!payload)
            return new GraphQLError('User Not Authenticated');
        
        return await signInUser({
            email: payload.email!, 
            name: payload.name!, 
            picture: payload.picture!
        });
    }
};
export default signUser;