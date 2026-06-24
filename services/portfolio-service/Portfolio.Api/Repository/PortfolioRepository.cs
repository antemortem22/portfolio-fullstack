using Microsoft.EntityFrameworkCore;
using Portfolio.Api.Data;
using Portfolio.Api.DTOs;
using Portfolio.Api.Models;
using Portfolio.Api.Repository.Interfaces;

namespace Portfolio.Api.Repository;

public sealed class PortfolioRepository(PortfolioDbContext dbContext) : IPortfolioRepository
{
    public async Task<PortfolioDto?> GetPublicPortfolioAsync(CancellationToken cancellationToken = default)
    {
        var portfolio = await dbContext.Portfolios
            .AsNoTracking()
            .AsSplitQuery()
            .OrderBy(item => item.Id)
            .Select(item => new
            {
                item.Id,
                item.DisplayName,
                item.LogoUrl,
                CvUrlEs = item.CvurlEs,
                CvUrlEn = item.CvurlEn,
                HeroSection = item.HeroSections
                    .OrderBy(section => section.Id)
                    .Select(section => new HeroSectionDto
                    {
                        Tagline = section.Tagline,
                        DescriptionEs = section.DescriptionEs,
                        DescriptionEn = section.DescriptionEn,
                        HeroMediaUrl = section.HeroMediaUrl
                    })
                    .FirstOrDefault(),
                Profile = item.Profiles
                    .OrderBy(profile => profile.Id)
                    .Select(profile => new
                    {
                        profile.AboutEs,
                        profile.AboutEn,
                        profile.Role,
                        profile.ProfileImageUrl,
                        SocialLinks = profile.SocialLinks
                            .Where(link => link.IsActive)
                            .OrderBy(link => link.DisplayOrder)
                            .ThenBy(link => link.Id)
                            .Select(link => new SocialLinkDto
                            {
                                Platform = link.Platform,
                                Url = link.Url,
                                Icon = link.Icon
                            })
                            .ToArray()
                    })
                    .FirstOrDefault(),
                Projects = item.Projects
                    .Where(project => project.ShowInPortfolio && project.Status != ProjectStatus.Archived)
                    .OrderBy(project => project.DisplayOrder)
                    .ThenBy(project => project.Id)
                    .Select(project => new
                    {
                        project.Id,
                        project.Title,
                        project.Eyebrow,
                        project.DescriptionEs,
                        project.DescriptionEn,
                        project.GithubUrl,
                        project.LiveUrl,
                        project.Preview,
                        project.ShowInPortfolio,
                        project.DisplayOrder,
                        project.Status,
                        Tags = project.ProjectTags
                            .OrderBy(tag => tag.Name)
                            .Select(tag => tag.Name)
                            .ToArray()
                    })
                    .ToArray(),
                SkillCategories = item.SkillCategories
                    .OrderBy(category => category.DisplayOrder)
                    .ThenBy(category => category.Id)
                    .Select(category => new SkillCategoryDto
                    {
                        Name = category.Name,
                        DisplayOrder = category.DisplayOrder,
                        Skills = category.Skills
                            .OrderBy(skill => skill.DisplayOrder)
                            .ThenBy(skill => skill.Id)
                            .Select(skill => new SkillDto
                            {
                                Name = skill.Name,
                                Percentage = skill.Percentage,
                                DisplayOrder = skill.DisplayOrder
                            })
                            .ToArray()
                    })
                    .ToArray(),
                Tools = item.Tools
                    .Where(tool => tool.IsActive)
                    .OrderBy(tool => tool.DisplayOrder)
                    .ThenBy(tool => tool.Id)
                    .Select(tool => new ToolDto
                    {
                        Name = tool.Name,
                        Icon = tool.Icon,
                        DisplayOrder = tool.DisplayOrder
                    })
                    .ToArray()
            })
            .FirstOrDefaultAsync(cancellationToken);

        if (portfolio is null)
        {
            return null;
        }

        return new PortfolioDto
        {
            Id = portfolio.Id,
            DisplayName = portfolio.DisplayName,
            LogoUrl = portfolio.LogoUrl,
            CvUrlEs = portfolio.CvUrlEs,
            CvUrlEn = portfolio.CvUrlEn,
            HeroSection = portfolio.HeroSection,
            Profile = portfolio.Profile is null
                ? null
                : new ProfileDto
                {
                    AboutEs = portfolio.Profile.AboutEs,
                    AboutEn = portfolio.Profile.AboutEn,
                    Role = portfolio.Profile.Role,
                    ProfileImageUrl = portfolio.Profile.ProfileImageUrl,
                    SocialLinks = portfolio.Profile.SocialLinks
                },
            Projects = portfolio.Projects
                .Select(project => new ProjectDto
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
                    Tags = project.Tags
                })
                .ToArray(),
            SkillCategories = portfolio.SkillCategories,
            Tools = portfolio.Tools
        };
    }
}
