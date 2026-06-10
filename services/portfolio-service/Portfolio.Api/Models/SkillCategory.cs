using System;
using System.Collections.Generic;

namespace Portfolio.Api.Models;

public partial class SkillCategory
{
    public int Id { get; set; }

    public int PortfolioId { get; set; }

    public string Name { get; set; } = null!;

    public int DisplayOrder { get; set; }

    public virtual Portfolio Portfolio { get; set; } = null!;

    public virtual ICollection<Skill> Skills { get; set; } = new List<Skill>();
}
