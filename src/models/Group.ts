import { Schema, model } from 'mongoose';
import { GroupDocument } from '../interfaces/document';

const GroupSchema = new Schema({
    name: { type: String, required: true },
    participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    payments: [{ type: Schema.Types.ObjectId, ref: 'Payment' }]
});

export default model<GroupDocument>('Group', GroupSchema);