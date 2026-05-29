using System;
using System.Collections.Generic;

namespace Portfolio.Api.Models;

public partial class Profile
{
    public int Id { get; set; }

    public int PortfolioId { get; set; }

    public string AboutEs { get; set; } = null!;

    public string AboutEn { get; set; } = null!;

    public string Role { get; set; } = null!;

    public string? ProfileImageUrl { get; set; }

    public DateTime CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public virtual PortfolioEntity Portfolio { get; set; } = null!;

    public virtual ICollection<SocialLink> SocialLinks { get; set; } = new List<SocialLink>();
}
