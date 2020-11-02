import {GraphQLString} from 'graphql';
import UserType from '../types/user';

interface Args {
    token: {type: typeof GraphQLString},
    clientId: {type: typeof GraphQLString}
}
const signUser = {
    type: UserType,
    args: {
        token: {type: GraphQLString},
        clientId: {type: GraphQLString}
    },
    resolve(parent:typeof UserType, args: Args): void {
        // check here, authenticate also and add to db if not signed up
        console.log(parent);
        console.log(args);
    }
};

export default signUser;