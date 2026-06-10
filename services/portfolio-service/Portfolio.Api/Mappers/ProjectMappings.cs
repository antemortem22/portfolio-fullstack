using Portfolio.Api.DTOs;
using Portfolio.Api.Models;

namespace Portfolio.Api.Mappers;

public static class ProjectMappings
{
    public static ProjectDto ToDto(this Project project)
    {
        return new ProjectDto
        {
            Id = project.Id,
            Title = project.Title,
            Eyebrow = project.Eyebrow,
            DescriptionEs = project.DescriptionEs,
            DescriptionEn = project.DescriptionEn,
            GithubUrl = project.GithubUrl,
            LiveUrl = project.LiveUrl,
            Preview = project.Preview,
            ShowInPortfolio = project.ShowInPortfolio,
            DisplayOrder = project.DisplayOrder,
            Status = project.Status.ToString(),
            StatusLabel = project.Status.GetDisplayName(),
            Tags = project.ProjectTags
                .OrderBy(tag => tag.Name)
                .Select(tag => tag.Name)
                .ToArray()
        };
    }
}
