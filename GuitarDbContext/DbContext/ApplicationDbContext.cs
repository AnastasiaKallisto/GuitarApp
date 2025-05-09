using Contracts.DALModels;
using Microsoft.EntityFrameworkCore;

namespace GuitarDbContext.DbContext;

public sealed class ApplicationDbContext : Microsoft.EntityFrameworkCore.DbContext
{
    public DbSet<UserDalDto> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=guitar_song_craft;Username=postgres;Password=postgres");
    }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<UserDalDto>().ToTable("Users", "Auth");
    }
}