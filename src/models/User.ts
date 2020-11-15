import {Schema, model, Document} from 'mongoose';
import {UserDocument} from '../interfaces/document';

const UserSchema = new Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    picture: {type: String, required: true }
});

export default model<UserDocument>('User', UserSchema);