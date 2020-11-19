import { GraphQLError, GraphQLString } from 'graphql';
import GroupType from '../types/group';
import { verifyJwt } from '../../utils/authenticate';
import { addGroup } from '../../controllers/group';
import { GroupDocument } from '../../interfaces/document';

const makeGroup = {
    type: GroupType,
    args: {
        groupName: { type: GraphQLString },
        token: { type: GraphQLString }
    },
    async resolve(parent: unknown, args: { [argName: string]: string }): Promise<GroupDocument | GraphQLError> {
        const user = verifyJwt(args.token);
        if (!user)
            return new GraphQLError('User not Authenticated');

        return addGroup(args.groupName, user.id);
    }
};
export default makeGroup;