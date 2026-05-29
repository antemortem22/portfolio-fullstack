using System;
using System.Collections.Generic;

namespace Portfolio.Api.Models;

public partial class Skill
{
    public int Id { get; set; }

    public int CategoryId { get; set; }

    public string Name { get; set; } = null!;

    public int Percentage { get; set; }

    public int DisplayOrder { get; set; }

    public virtual SkillCategory Category { get; set; } = null!;
}
