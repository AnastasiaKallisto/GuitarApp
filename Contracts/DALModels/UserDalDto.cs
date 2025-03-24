using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Contracts.DALModels;

public class UserDalDto
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid Id { get; set; }

    [Required]
    [StringLength(100, MinimumLength = 1)]
    public string Username { get; set; }

    [Required]
    public string Email { get; set; }

    [Required]
    [StringLength(100, MinimumLength = 1)]
    public string PasswordHash { get; set; }

    [Required]
    [StringLength(20, MinimumLength = 1)]
    public string Status { get; set; }

    [Required]
    public DateTime CreatedAt { get; set; }

    [Required]
    public DateTime UpdatedAt { get; set; }
}