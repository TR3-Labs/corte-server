import {GraphQLObjectType, GraphQLID} from 'graphql';
import UserType from './types/user';
import GroupType from './types/group';

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve: (parent, args) => {
                // get data from db/other source
                console.log(args.id);
                return parent;
            }
        }
    }
});

export default RootQuery;