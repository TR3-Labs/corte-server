import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull, GraphQLList } from 'graphql';
import UserType from './user';
import PaymentType from './payment';

const GroupType = new GraphQLObjectType({
    name: 'Group',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLNonNull(GraphQLString) },
        participants: { type: GraphQLNonNull(new GraphQLList(UserType)) },
        payments: { type: GraphQLNonNull(new GraphQLList(PaymentType)) }
    })
});

export default GroupType;