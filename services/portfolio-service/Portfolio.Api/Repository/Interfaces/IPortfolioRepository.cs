using Portfolio.Api.DTOs;

namespace Portfolio.Api.Repository.Interfaces;

public interface IPortfolioRepository
{
    Task<PortfolioDto?> GetPublicPortfolioAsync(CancellationToken cancellationToken = default);
}
