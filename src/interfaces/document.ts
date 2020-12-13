import { Document } from 'mongoose';

export interface UserDocument extends Document {
    id: string,
    email: string,
    name: string
    picture: string
};

export interface GroupDocument extends Document {
    id: string,
    name: string,
    participants?: Array<UserDocument>,
    payments?: Array<string>
}

export interface PaymentDocument extends Document {
    id: string,
    paymentType?: string,
    payee: string,
    strategy: string,
    totalAmount: number,
    distribution: Array<string>
}

export interface DistributionDocument extends Document {
    id: string,
    user: string,
    amount: number
}