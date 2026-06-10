namespace Portfolio.Api.DTOs;

public sealed class ProfileDto
{
    public string AboutEs { get; init; } = string.Empty;

    public string AboutEn { get; init; } = string.Empty;

    public string Role { get; init; } = string.Empty;

    public string? ProfileImageUrl { get; init; }

    public IReadOnlyList<SocialLinkDto> SocialLinks { get; init; } = [];
}
