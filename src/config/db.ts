import mongoose from 'mongoose';

const dbConnection = async ():Promise<void> => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to database');
    }
    catch (err) {
        console.log(err);
    }
};

export default dbConnection;