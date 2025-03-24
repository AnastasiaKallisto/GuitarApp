using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Contracts.DALModels.MusicData;

/// Настройки воспроизведения музыкального произведения
public class PlaybackSettingsDalDto
{
    /// Id самого музыкального произведения
    [Key]
    [ForeignKey("MusicData")] // TODO уточнить как это пишется
    public Guid MusicDataId { get; set; }

    /// Темп композиции
    [Required]
    [Range(30, 300)]
    public int BPM { get; set; }

    /// Количество тактов в линии
    [Required]
    [Range(1, 4)]
    public int BarsPerLine { get; set; }
    
    // Размер такта по умолчанию (числитель)
    [Required]
    [Range(1, 16)]
    public int BarNumerator { get; set; }
    
    // Размер такта по умолчанию (знаменатель)
    [Required]
    [Range(1, 16)]
    public int BarDenominator { get; set; }
}
