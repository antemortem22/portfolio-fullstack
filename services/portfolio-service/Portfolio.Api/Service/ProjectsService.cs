using Microsoft.EntityFrameworkCore;
using Portfolio.Api.Data;
using Portfolio.Api.DTOs;
using Portfolio.Api.Mappers;
using Portfolio.Api.Models;
using Portfolio.Api.Service.Interfaces;

namespace Portfolio.Api.Service;

public sealed class ProjectsService(PortfolioDbContext dbContext) : IProjectsService
{
    public async Task<IReadOnlyList<ProjectDto>> GetPublicProjectsAsync(CancellationToken cancellationToken = default)
    {
        var projects = await dbContext.Projects
            .AsNoTracking()
            .Include(project => project.ProjectTags)
            .Where(project => project.ShowInPortfolio && project.Status != ProjectStatus.Archived)
            .OrderBy(project => project.DisplayOrder)
            .ThenBy(project => project.Id)
            .ToListAsync(cancellationToken);

        return projects.Select(project => project.ToDto()).ToArray();
    }

    public async Task<ProjectDto?> GetPublicProjectByIdAsync(int id, CancellationToken cancellationToken = default)
    {
        var project = await dbContext.Projects
            .AsNoTracking()
            .Include(project => project.ProjectTags)
            .FirstOrDefaultAsync(
                project => project.Id == id && project.ShowInPortfolio && project.Status != ProjectStatus.Archived,
                cancellationToken);

        return project?.ToDto();
    }
}
