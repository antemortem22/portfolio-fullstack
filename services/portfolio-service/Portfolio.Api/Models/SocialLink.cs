using System;
using System.Collections.Generic;

namespace Portfolio.Api.Models;

public partial class SocialLink
{
    public int Id { get; set; }

    public int ProfileId { get; set; }

    public string Platform { get; set; } = null!;

    public string Url { get; set; } = null!;

    public string? Icon { get; set; }

    public int DisplayOrder { get; set; }

    public bool IsActive { get; set; }

    public virtual Profile Profile { get; set; } = null!;
}
