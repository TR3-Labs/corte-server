import { UserDocument } from './document';

export interface UserInterface {
    id: string,
    email: string,
    name: string,
    picture: string,
    joinedGroups?: [string]
}

export interface AuthPayloadInterface {
    token: string,
    user: UserDocument
}

export interface DistributionType {
    user: UserInterface,
    amount: number
}

export interface PaymentInterface {
    id: string,
    paymentType: string,
    payee: string,
    strategy: string,
    totalAmount: number,
    distribution: Array<DistributionType>
}

export interface GroupInterface {
    id: string,
    name: string,
    participants: Array<UserInterface>
    payments: Array<PaymentInterface>
}