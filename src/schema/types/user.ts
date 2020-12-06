import {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull} from 'graphql';

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLID) },
        email: { type: GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLNonNull(GraphQLString) },
        picture: {type: GraphQLNonNull(GraphQLString)}
    })
});

export default UserType;