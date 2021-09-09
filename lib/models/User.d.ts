import { BankAccount } from "./BankAccount";
export interface User {
    id: string;
    created_at?: string;
    email: string;
    allow_mail_notifications?: boolean;
    gender?: string;
    first_name?: string;
    last_name?: string;
    maiden_name?: string;
    avatar_url?: string;
    birthday?: string;
    birth_place?: string;
    birth_country?: string;
    birth_department?: string;
    phone?: string;
    nationality?: string;
    bio?: string;
    sector?: string;
    investor_type?: string;
    linkedin_url?: string;
    does_pay_taxes?: boolean;
    has_been_claimed?: boolean;
    city?: string;
    wallet_id?: string;
    wallet_updated_at?: string;
    wallet_type?: string;
    status?: string;
    roles?: string;
    targeting_roles?: string;
    partner_manager_id?: string;
    investor_score?: number;
    tag?: string;
    is_pro?: boolean;
    account_validation_status?: string;
    lang?: string;
    relatives?: Array<Relative>;
    bankaccounts?: Array<BankAccount>;
    nb_enterprises?: number;
    custom?: any;
}
export interface Relative {
    id: string;
    created_at?: string;
    created_by?: string;
    deleted_at?: string;
    user_id: string;
    email?: string;
    first_name?: string;
    last_name?: string;
    maiden_name?: string;
    gender?: Gender;
    birthday?: string;
    birth_place?: string;
    birth_country?: string;
    birth_department?: string;
    legal_type?: RelativeType;
    nationality?: string;
    tag?: string;
    custom?: any;
}
export declare enum Gender {
    MAN = "MAN",
    WOMAN = "WOMAN"
}
export declare enum RelativeType {
    CONJOINT = "CONJOINT",
    USUFRUCTUARY = "USUFRUCTUARY"
}
export interface Address {
    number: string;
    street: string;
    zip: string;
    city: string;
    country: string;
    tag: string;
}
