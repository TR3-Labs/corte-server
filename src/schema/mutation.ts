import {GraphQLObjectType} from 'graphql';
import signUser from './mutations/signUser';

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        signUser
    }
});

export default Mutation;