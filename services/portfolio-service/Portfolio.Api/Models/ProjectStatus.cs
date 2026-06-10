using System.ComponentModel.DataAnnotations;

namespace Portfolio.Api.Models;

public enum ProjectStatus
{
    [Display(Name = "In progress")]
    InProgress = 1,

    [Display(Name = "Completed")]
    Completed = 2,

    [Display(Name = "Archived")]
    Archived = 3
}
