using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Contracts.DALModels;

/// Кастомный аккорд от пользователя
public class ChordPatternDalDto
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid Id { get; set; }

    [Required]
    [StringLength(10, MinimumLength = 1)]
    public string Note { get; set; }

    [Required]
    [StringLength(20, MinimumLength = 1)]
    public string Type { get; set; }

    [Required]
    public int Num { get; set; }

    [Required]
    [StringLength(6, MinimumLength = 6)]
    public string Fingering { get; set; }
}