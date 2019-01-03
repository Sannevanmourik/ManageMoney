using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ManageMoney.Models
{
    public class BankAccount
    {
        [Key]
        public int Id { get; set; }
        public string BankAccountHolder { get; set; }
        public EBankAccountTypes BankAccountType { get; set; }
        public string BankAccountNumber { get; set; }
    }

    public enum EBankAccountTypes
    {
        SavingsAccount,
        PrivateBankAccount,
        SharedBankAccount,
        PiggyBank
    }
}
