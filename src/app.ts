import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import fs from 'fs';
import { graphqlHTTP } from 'express-graphql';

import dbConnection from './config/db';
import schema from './schema/schema';

const app = express();
app.use(cors());
app.use(bodyParser.json());
dbConnection();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.get('/', (req, res) => {
    res.send('home page');
});

app.get('/graphql-schema', (req, res) => {
    fs.readFile(path.join(__dirname, '../public/schema.graphql'), (err, data) => {
        if(err) throw err;
        res.send(data)
    });
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));