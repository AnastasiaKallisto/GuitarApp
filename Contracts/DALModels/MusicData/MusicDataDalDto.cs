using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Contracts.DALModels.MusicData;

/// Информация о музыкальной композиции
public class MusicDataDalDto
{
    /// Идентификатор музыкальной композиции
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid Id { get; set; }

    /// Список музыкальных элементов (бой, перебор)
    public List<MusicElementDalDto> Elements { get; set; }

    /// Список строк с текстом
    public List<string> Words { get; set; }

    /// Список элементов с аккордами
    public List<ChordElementDalDto> Chords { get; set; }

    /// Общее количество тактов
    [Required]
    public int TotalBeats { get; set; }
}
