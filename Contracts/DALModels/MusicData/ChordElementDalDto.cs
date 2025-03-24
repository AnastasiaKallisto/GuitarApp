using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Contracts.DALModels.MusicData;

public class ChordElementDalDto
{
    /// Время начала аккорда (в долях)
    [Required]
    [Range(0, double.MaxValue)]
    public decimal StartTime { get; set; }

    /// Время окончания аккорда (в долях)
    [Required]
    [Range(0, double.MaxValue)]
    public decimal EndTime { get; set; }

    /// Идентификатор аккорда
    [Required]
    [ForeignKey("Chord")]
    public Guid ChordId { get; set; }
}
