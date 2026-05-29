using System;
using System.Collections.Generic;

namespace Portfolio.Api.Models;

public partial class ProjectTag
{
    public int Id { get; set; }

    public int ProjectId { get; set; }

    public string Name { get; set; } = null!;

    public virtual Project Project { get; set; } = null!;
}
