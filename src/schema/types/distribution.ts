import { GraphQLObjectType, GraphQLFloat } from 'graphql';
import UserType from './user';

const DistributionType = new GraphQLObjectType({
    name: 'Distribution',
    fields: () => ({
        user: { type: UserType },
        amount: { type: GraphQLFloat }
    })
});

export default DistributionType;