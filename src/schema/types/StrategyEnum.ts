import { GraphQLEnumType } from 'graphql';

const StrategyEnumType = new GraphQLEnumType({
    name: 'StrategyEnum',
    values: {
        EQUALLY: {
            value: "EQUALLY"
        },
        UNEQUALLY: {
            value: "UNEQUALLY"
        }
    }
});

export default StrategyEnumType;