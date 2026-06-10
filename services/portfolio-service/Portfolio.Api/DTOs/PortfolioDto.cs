namespace Portfolio.Api.DTOs;

public sealed class PortfolioDto
{
    public int Id { get; init; }

    public string DisplayName { get; init; } = string.Empty;

    public string? LogoUrl { get; init; }

    public string? CvUrlEs { get; init; }

    public string? CvUrlEn { get; init; }

    public HeroSectionDto? HeroSection { get; init; }

    public ProfileDto? Profile { get; init; }

    public IReadOnlyList<ProjectDto> Projects { get; init; } = [];

    public IReadOnlyList<SkillCategoryDto> SkillCategories { get; init; } = [];

    public IReadOnlyList<ToolDto> Tools { get; init; } = [];
}
