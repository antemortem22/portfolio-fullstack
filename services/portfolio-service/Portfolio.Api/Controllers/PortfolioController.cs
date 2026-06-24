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
    [ProducesResponseType(StatusCodes.Status499ClientClosedRequest)]
    public async Task<ActionResult<PortfolioDto>> GetPortfolio(CancellationToken cancellationToken)
    {
        try
        {
            var portfolio = await portfolioService.GetPublicPortfolioAsync(cancellationToken);

            if (portfolio is null)
            {
                return NotFound();
            }

            return Ok(portfolio);
        }
        catch (OperationCanceledException) when (HttpContext.RequestAborted.IsCancellationRequested)
        {
            return StatusCode(StatusCodes.Status499ClientClosedRequest);
        }
    }
}
