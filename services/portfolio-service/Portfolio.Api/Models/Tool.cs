using System;
using System.Collections.Generic;

namespace Portfolio.Api.Models;

public partial class Tool
{
    public int Id { get; set; }

    public int PortfolioId { get; set; }

    public string Name { get; set; } = null!;

    public string? Icon { get; set; }

    public int DisplayOrder { get; set; }

    public bool IsActive { get; set; }

    public virtual Portfolio Portfolio { get; set; } = null!;
}
