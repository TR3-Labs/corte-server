import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull, GraphQLList, GraphQLFloat } from 'graphql';
import UserType from './user';
import StrategyEnumType from './StrategyEnum';
import DistributionType from './distribution';

const PaymentType = new GraphQLObjectType({
    name: 'Payment',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLID) },
        paymentType: { type: GraphQLString },
        payee: { type: GraphQLNonNull(UserType) },
        strategy: { type: GraphQLNonNull(StrategyEnumType) },
        totalAmount: { type: GraphQLNonNull(GraphQLFloat) },
        distribution: { type: new GraphQLList(DistributionType) }
    })
});

export default PaymentType;