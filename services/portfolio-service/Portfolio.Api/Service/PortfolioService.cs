using Portfolio.Api.DTOs;
using Portfolio.Api.Repository.Interfaces;
using Portfolio.Api.Service.Interfaces;

namespace Portfolio.Api.Service;

public sealed class PortfolioService(IPortfolioRepository portfolioRepository) : IPortfolioService
{
    public Task<PortfolioDto?> GetPublicPortfolioAsync(CancellationToken cancellationToken = default) =>
        portfolioRepository.GetPublicPortfolioAsync(cancellationToken);
}
