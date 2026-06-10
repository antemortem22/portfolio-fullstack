namespace Portfolio.Api.DTOs;

public sealed class SocialLinkDto
{
    public string Platform { get; init; } = string.Empty;

    public string Url { get; init; } = string.Empty;

    public string? Icon { get; init; }
}
