import { Schema, model } from 'mongoose';
import { DistributionDocument } from '../interfaces/document';

const DistributionSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true }
});

export default model<DistributionDocument>('Distribution', DistributionSchema);