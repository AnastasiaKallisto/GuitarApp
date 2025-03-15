using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Contracts.DALModels;

/// Кастомный перебор от пользователя
public class PickingPatternDalDto
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid Id { get; set; }

    [Required]
    [StringLength(200, MinimumLength = 1)]
    public string Name { get; set; }

    [Required]
    [StringLength(100, MinimumLength = 1)]
    public string Strings { get; set; }

    [Required]
    [StringLength(100, MinimumLength = 1)]
    public string Loudness { get; set; }
    
    [StringLength(500, MinimumLength = 1)]
    public string? Duration { get; set; }

    [Required]
    [StringLength(50, MinimumLength = 1)]
    public string Category { get; set; }
}
