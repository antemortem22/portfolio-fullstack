using System;
using System.Collections.Generic;

namespace Portfolio.Api.Models;

public partial class Project
{
    public int Id { get; set; }

    public int PortfolioId { get; set; }

    public string Title { get; set; } = null!;

    public string? Eyebrow { get; set; }

    public string DescriptionEs { get; set; } = null!;

    public string DescriptionEn { get; set; } = null!;

    public string? GithubUrl { get; set; }

    public string? LiveUrl { get; set; }

    public string? Preview { get; set; }

    public bool ShowInPortfolio { get; set; }

    public int DisplayOrder { get; set; }

    public DateTime CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public ProjectStatus Status { get; set; }

    public virtual Portfolio Portfolio { get; set; } = null!;

    public virtual ICollection<ProjectTag> ProjectTags { get; set; } = new List<ProjectTag>();
}
