import { GraphQLError, GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';
import GroupType from '../types/group';
import { verifyJwt } from '../../utils/authenticate';
import { addGroup } from '../../controllers/group';
import { GroupDocument } from '../../interfaces/document';

const makeGroup = {
    type: GroupType,
    args: {
        groupName: { type: GraphQLString },
        token: { type: GraphQLString },
        participants: { type: GraphQLNonNull(new GraphQLList(GraphQLString)) }
    },
    async resolve(parent: unknown, args: { [argName: string]: any }): Promise<GroupDocument | GraphQLError> {
        const user = verifyJwt(args.token);
        if (!user)
            return new GraphQLError('User not Authenticated');

        return addGroup(args.groupName, args.participants);
    }
};
export default makeGroup;