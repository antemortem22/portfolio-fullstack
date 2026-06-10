namespace Portfolio.Api.DTOs;

public sealed class ToolDto
{
    public string Name { get; init; } = string.Empty;

    public string? Icon { get; init; }

    public int DisplayOrder { get; init; }
}
