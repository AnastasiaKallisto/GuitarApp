using Contracts.Models;
using Microsoft.EntityFrameworkCore;

namespace Contracts.DbContext;

public sealed class ApplicationDbContext : Microsoft.EntityFrameworkCore.DbContext
{
    public DbSet<User> Users { get; set; }
    // public ApplicationDbContext()
    // {
    //     //Database.EnsureCreated();
    // }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=guitar_song_craft;Username=postgres;Password=postgres");
    }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>().ToTable("Users", "Auth");

        // modelBuilder.Entity<Project>()
        //     .ToTable("Projects", "GuitarProjects");

        // Дополнительная конфигурация
    }
}