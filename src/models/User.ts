import {Schema, model} from 'mongoose';

const UserSchema = new Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    picture: {type: String, required: true }
});

export default model('User', UserSchema);