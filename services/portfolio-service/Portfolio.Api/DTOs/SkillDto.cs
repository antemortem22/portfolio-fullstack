namespace Portfolio.Api.DTOs;

public sealed class SkillDto
{
    public string Name { get; init; } = string.Empty;

    public int Percentage { get; init; }

    public int DisplayOrder { get; init; }
}
