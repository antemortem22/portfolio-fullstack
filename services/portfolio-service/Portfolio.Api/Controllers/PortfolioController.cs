using Microsoft.AspNetCore.Mvc;
using Portfolio.Api.DTOs;
using Portfolio.Api.Service.Interfaces;

namespace Portfolio.Api.Controllers;

[ApiController]
[Route("api/portfolio")]
public sealed class PortfolioController(IPortfolioService portfolioService) : ControllerBase
{
    [HttpGet]
    [ProducesResponseType(typeof(PortfolioDto), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<PortfolioDto>> GetPortfolio(CancellationToken cancellationToken)
    {
        var portfolio = await portfolioService.GetPublicPortfolioAsync(cancellationToken);

        if (portfolio is null)
        {
            return NotFound();
        }

        return Ok(portfolio);
    }
}
