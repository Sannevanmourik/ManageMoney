using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ManageMoney.Models
{
    public class ManageMoneyContext : DbContext
    {
        public ManageMoneyContext (DbContextOptions<ManageMoneyContext> options)
            : base(options)
        {
        }

        public DbSet<ManageMoney.Models.BankAccount> BankAccount { get; set; }
    }
}
