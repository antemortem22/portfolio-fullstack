namespace Portfolio.Api.DTOs;

public sealed class SkillCategoryDto
{
    public string Name { get; init; } = string.Empty;

    public int DisplayOrder { get; init; }

    public IReadOnlyList<SkillDto> Skills { get; init; } = [];
}
