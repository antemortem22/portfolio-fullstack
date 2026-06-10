using Microsoft.AspNetCore.Mvc;
using Portfolio.Api.DTOs;
using Portfolio.Api.Service.Interfaces;

namespace Portfolio.Api.Controllers;

[ApiController]
[Route("api/projects")]
public sealed class ProjectsController(IProjectsService projectsService) : ControllerBase
{
    [HttpGet]
    [ProducesResponseType(typeof(IReadOnlyList<ProjectDto>), StatusCodes.Status200OK)]
    public async Task<ActionResult<IReadOnlyList<ProjectDto>>> GetProjects(CancellationToken cancellationToken)
    {
        var projects = await projectsService.GetPublicProjectsAsync(cancellationToken);

        return Ok(projects);
    }

    [HttpGet("{id:int}")]
    [ProducesResponseType(typeof(ProjectDto), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<ProjectDto>> GetProjectById(int id, CancellationToken cancellationToken)
    {
        var project = await projectsService.GetPublicProjectByIdAsync(id, cancellationToken);

        if (project is null)
        {
            return NotFound();
        }

        return Ok(project);
    }
}
