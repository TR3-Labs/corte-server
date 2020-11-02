import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import {graphqlHTTP} from 'express-graphql';
import schema from './schema/schema';

const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));