using System;
using System.Collections.Generic;

namespace Portfolio.Api.Models;

public partial class HeroSection
{
    public int Id { get; set; }

    public int PortfolioId { get; set; }

    public string Tagline { get; set; } = null!;

    public string DescriptionEs { get; set; } = null!;

    public string DescriptionEn { get; set; } = null!;

    public string? HeroMediaUrl { get; set; }

    public DateTime CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public virtual PortfolioEntity Portfolio { get; set; } = null!;
}
