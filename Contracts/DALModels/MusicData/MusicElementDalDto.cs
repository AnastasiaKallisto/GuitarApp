using System.ComponentModel.DataAnnotations;

namespace Contracts.DALModels.MusicData;

public class MusicElementDalDto
{
    /// Тип музыкального элемента (бой, перебор)
    [Required]
    public MusicElementTypeDalDto Type { get; set; }

    /// Идентификатор элемента
    [Required]
    public Guid ElementId { get; set; }
}
