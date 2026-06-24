using Portfolio.Api.DTOs;

namespace Portfolio.Api.Repository.Interfaces;

public interface IProjectsRepository
{
    Task<IReadOnlyList<ProjectDto>> GetPublicProjectsAsync(CancellationToken cancellationToken = default);

    Task<ProjectDto?> GetPublicProjectByIdAsync(int id, CancellationToken cancellationToken = default);
}
