using System.ComponentModel.DataAnnotations;
using System.Reflection;

namespace Portfolio.Api.Models;

public static class ProjectStatusExtensions
{
    public static string GetDisplayName(this ProjectStatus status)
    {
        var member = typeof(ProjectStatus).GetMember(status.ToString()).FirstOrDefault();
        var attribute = member?.GetCustomAttribute<DisplayAttribute>();

        return attribute?.Name ?? status.ToString();
    }
}
