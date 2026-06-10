namespace Portfolio.Api.DTOs;

public sealed class HeroSectionDto
{
    public string Tagline { get; init; } = string.Empty;

    public string DescriptionEs { get; init; } = string.Empty;

    public string DescriptionEn { get; init; } = string.Empty;

    public string? HeroMediaUrl { get; init; }
}
