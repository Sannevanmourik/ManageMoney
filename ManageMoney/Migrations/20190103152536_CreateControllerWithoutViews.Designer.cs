﻿// <auto-generated />
using ManageMoney.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace ManageMoney.Migrations
{
    [DbContext(typeof(ManageMoneyContext))]
    [Migration("20190103152536_CreateControllerWithoutViews")]
    partial class CreateControllerWithoutViews
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.4-rtm-31024")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ManageMoney.Models.BankAccount", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("BankAccountHolder");

                    b.Property<string>("BankAccountNumber");

                    b.Property<int>("BankAccountType");

                    b.HasKey("Id");

                    b.ToTable("BankAccount");
                });
#pragma warning restore 612, 618
        }
    }
}