using Portfolio.Api.DTOs;
using Portfolio.Api.Models;
using PortfolioModel = Portfolio.Api.Models.Portfolio;

namespace Portfolio.Api.Mappers;

public static class PortfolioMappings
{
    public static PortfolioDto ToDto(this PortfolioModel portfolio)
    {
        return new PortfolioDto
        {
            Id = portfolio.Id,
            DisplayName = portfolio.DisplayName,
            LogoUrl = portfolio.LogoUrl,
            CvUrlEs = portfolio.CvurlEs,
            CvUrlEn = portfolio.CvurlEn,
            HeroSection = portfolio.HeroSections
                .OrderBy(section => section.Id)
                .Select(section => section.ToDto())
                .FirstOrDefault(),
            Profile = portfolio.Profiles
                .OrderBy(profile => profile.Id)
                .Select(profile => profile.ToDto())
                .FirstOrDefault(),
            Projects = portfolio.Projects
                .Where(project => project.ShowInPortfolio && project.Status != ProjectStatus.Archived)
                .OrderBy(project => project.DisplayOrder)
                .ThenBy(project => project.Id)
                .Select(project => project.ToDto())
                .ToArray(),
            SkillCategories = portfolio.SkillCategories
                .OrderBy(category => category.DisplayOrder)
                .ThenBy(category => category.Id)
                .Select(category => category.ToDto())
                .ToArray(),
            Tools = portfolio.Tools
                .Where(tool => tool.IsActive)
                .OrderBy(tool => tool.DisplayOrder)
                .ThenBy(tool => tool.Id)
                .Select(tool => tool.ToDto())
                .ToArray()
        };
    }

    public static HeroSectionDto ToDto(this HeroSection heroSection)
    {
        return new HeroSectionDto
        {
            Tagline = heroSection.Tagline,
            DescriptionEs = heroSection.DescriptionEs,
            DescriptionEn = heroSection.DescriptionEn,
            HeroMediaUrl = heroSection.HeroMediaUrl
        };
    }

    public static ProfileDto ToDto(this Profile profile)
    {
        return new ProfileDto
        {
            AboutEs = profile.AboutEs,
            AboutEn = profile.AboutEn,
            Role = profile.Role,
            ProfileImageUrl = profile.ProfileImageUrl,
            SocialLinks = profile.SocialLinks
                .Where(link => link.IsActive)
                .OrderBy(link => link.DisplayOrder)
                .ThenBy(link => link.Id)
                .Select(link => link.ToDto())
                .ToArray()
        };
    }

    public static SocialLinkDto ToDto(this SocialLink socialLink)
    {
        return new SocialLinkDto
        {
            Platform = socialLink.Platform,
            Url = socialLink.Url,
            Icon = socialLink.Icon
        };
    }

    public static SkillCategoryDto ToDto(this SkillCategory skillCategory)
    {
        return new SkillCategoryDto
        {
            Name = skillCategory.Name,
            DisplayOrder = skillCategory.DisplayOrder,
            Skills = skillCategory.Skills
                .OrderBy(skill => skill.DisplayOrder)
                .ThenBy(skill => skill.Id)
                .Select(skill => skill.ToDto())
                .ToArray()
        };
    }

    public static SkillDto ToDto(this Skill skill)
    {
        return new SkillDto
        {
            Name = skill.Name,
            Percentage = skill.Percentage,
            DisplayOrder = skill.DisplayOrder
        };
    }

    public static ToolDto ToDto(this Tool tool)
    {
        return new ToolDto
        {
            Name = tool.Name,
            Icon = tool.Icon,
            DisplayOrder = tool.DisplayOrder
        };
    }
}
