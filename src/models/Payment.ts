import { Schema, model } from 'mongoose';
import { PaymentDocument } from '../interfaces/document';

const PaymentSchema = new Schema({
    paymentType: { type: String },
    payee: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    strategy: { type: String, required: true },
    totalAmount: { type: Number, required: true },
    distribution: [{ type: Schema.Types.ObjectId, ref: 'Distribution' }]
});

export default model<PaymentDocument>('Payment', PaymentSchema);