using Contracts.Models;
using GuitarDbContext.DbContext;

namespace GuitarDbDataFiller;

public static class Program
{
    public static void Main(string[] args)
    {
        // Создаем тестового пользователя
        var testUser = new User
        {
            Id = Guid.NewGuid(),
            Username = "testuser",
            Email = "testuser@example.com",
            PasswordHash = "hashedpassword123",
            Status = "active",
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow
        };

        // Добавляем пользователя в базу данных
        using (var context = new ApplicationDbContext())
        {
            context.Users.Add(testUser);
            context.SaveChanges();
        }

        Console.WriteLine("Тестовый пользователь успешно добавлен в базу данных!");
    }
}