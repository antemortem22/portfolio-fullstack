using Portfolio.Api.DTOs;
using Portfolio.Api.Repository.Interfaces;
using Portfolio.Api.Service.Interfaces;

namespace Portfolio.Api.Service;

public sealed class ProjectsService(IProjectsRepository projectsRepository) : IProjectsService
{
    public Task<IReadOnlyList<ProjectDto>> GetPublicProjectsAsync(CancellationToken cancellationToken = default) =>
        projectsRepository.GetPublicProjectsAsync(cancellationToken);

    public Task<ProjectDto?> GetPublicProjectByIdAsync(int id, CancellationToken cancellationToken = default) =>
        projectsRepository.GetPublicProjectByIdAsync(id, cancellationToken);
}
