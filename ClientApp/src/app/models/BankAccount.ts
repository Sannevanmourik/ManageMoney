import { EBankAccountTypes } from './../enums/EBankAccountTypes';

export class BankAccount {
    
    id: number;
    bankAccountHolder: string;
    bankAccountType: EBankAccountTypes;
    bankAccountNumber: string;
}
