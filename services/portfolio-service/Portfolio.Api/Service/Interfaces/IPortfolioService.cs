using Portfolio.Api.DTOs;

namespace Portfolio.Api.Service.Interfaces;

public interface IPortfolioService
{
    Task<PortfolioDto?> GetPublicPortfolioAsync(CancellationToken cancellationToken = default);
}
