import {GraphQLObjectType, GraphQLString} from 'graphql';
import UserType from './user';

const AuthPayloadType = new GraphQLObjectType({
    name: 'AuthPayload',
    fields: () => ({
        token: {type: GraphQLString},
        user: {type: UserType}
    })
});

export default AuthPayloadType;