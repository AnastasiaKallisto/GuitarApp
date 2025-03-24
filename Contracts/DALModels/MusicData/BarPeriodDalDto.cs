using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Contracts.DALModels.MusicData;

/// Описание музыкального такта
public class BarPeriodDalDto
{
    /// Числитель размера (например, 3 в 3/4)
    [Required]
    [Range(1, int.MaxValue)]
    public int Numerator { get; set; }

    /// Знаменатель размера (например, 4 в 3/4)
    [Required]
    [Range(1, int.MaxValue)]
    public int Denominator { get; set; }
}