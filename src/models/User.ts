import {Schema, model} from 'mongoose';
import {UserDocument} from '../interfaces/document';

const UserSchema = new Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    picture: {type: String, required: true },
    joinedGroups: [{type: Schema.Types.ObjectId, ref: 'Group'}]
});

export default model<UserDocument>('User', UserSchema);