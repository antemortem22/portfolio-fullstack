namespace Portfolio.Api.DTOs;

public sealed class ProjectDto
{
    public int Id { get; init; }

    public string Title { get; init; } = string.Empty;

    public string? Eyebrow { get; init; }

    public string DescriptionEs { get; init; } = string.Empty;

    public string DescriptionEn { get; init; } = string.Empty;

    public string? GithubUrl { get; init; }

    public string? LiveUrl { get; init; }

    public string? Preview { get; init; }

    public bool ShowInPortfolio { get; init; }

    public int DisplayOrder { get; init; }

    public string Status { get; init; } = string.Empty;

    public string StatusLabel { get; init; } = string.Empty;

    public IReadOnlyList<string> Tags { get; init; } = [];
}
