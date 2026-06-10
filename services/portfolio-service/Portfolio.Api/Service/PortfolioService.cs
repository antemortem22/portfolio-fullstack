using Microsoft.EntityFrameworkCore;
using Portfolio.Api.Data;
using Portfolio.Api.DTOs;
using Portfolio.Api.Mappers;
using Portfolio.Api.Service.Interfaces;

namespace Portfolio.Api.Service;

public sealed class PortfolioService(PortfolioDbContext dbContext) : IPortfolioService
{
    public async Task<PortfolioDto?> GetPublicPortfolioAsync(CancellationToken cancellationToken = default)
    {
        var portfolio = await dbContext.Portfolios
            .AsNoTracking()
            .Include(item => item.HeroSections)
            .Include(item => item.Profiles)
                .ThenInclude(profile => profile.SocialLinks)
            .Include(item => item.Projects)
                .ThenInclude(project => project.ProjectTags)
            .Include(item => item.SkillCategories)
                .ThenInclude(category => category.Skills)
            .Include(item => item.Tools)
            .OrderBy(item => item.Id)
            .FirstOrDefaultAsync(cancellationToken);

        return portfolio?.ToDto();
    }
}
