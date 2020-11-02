import {GraphQLObjectType, GraphQLID, GraphQLString} from 'graphql';

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        email: { type: GraphQLString },
        name: { type: GraphQLString },
        picture: {type: GraphQLString}
    })
});

export default UserType;