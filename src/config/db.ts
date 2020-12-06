import mongoose from 'mongoose';

const dbConnection = async ():Promise<void> => {
    const uri:string = process.env.DB_URI as string;
    try {
        await mongoose.connect(uri, {
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