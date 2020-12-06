import { GraphQLObjectType } from 'graphql';
import signUser from './mutations/signUser';
import makeGroup from './mutations/makeGroup';

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        signUser,
        makeGroup
    }
});

export default Mutation;