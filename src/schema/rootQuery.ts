import { GraphQLObjectType, GraphQLID } from 'graphql';
import UserType from './types/user';
import GroupType from './types/group';
import { getGroup } from '../controllers/group';

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
        },
        group: {
            type: GroupType,
            args: { id: { type: GraphQLID } },
            resolve: (parent, args) => {
                return getGroup(args.id)
            }
        }
    }
});

export default RootQuery;