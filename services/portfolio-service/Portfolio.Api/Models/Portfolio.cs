using System;
using System.Collections.Generic;

namespace Portfolio.Api.Models;

public partial class Portfolio
{
    public int Id { get; set; }

    public Guid? OwnerUserId { get; set; }

    public string? LogoUrl { get; set; }

    public string DisplayName { get; set; } = null!;

    public string? CvurlEs { get; set; }

    public string? CvurlEn { get; set; }

    public DateTime CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public virtual ICollection<HeroSection> HeroSections { get; set; } = new List<HeroSection>();

    public virtual ICollection<Profile> Profiles { get; set; } = new List<Profile>();

    public virtual ICollection<Project> Projects { get; set; } = new List<Project>();

    public virtual ICollection<SkillCategory> SkillCategories { get; set; } = new List<SkillCategory>();

    public virtual ICollection<Tool> Tools { get; set; } = new List<Tool>();
}
