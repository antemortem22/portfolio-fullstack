using Portfolio.Api.DTOs;

namespace Portfolio.Api.Service.Interfaces;

public interface IProjectsService
{
    Task<IReadOnlyList<ProjectDto>> GetPublicProjectsAsync(CancellationToken cancellationToken = default);

    Task<ProjectDto?> GetPublicProjectByIdAsync(int id, CancellationToken cancellationToken = default);
}
