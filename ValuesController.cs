using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using OpenWeather.Noaa;



// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WeatherOrNot
{
  [Route("api/[controller]")]
  public class ValuesController : Controller
  {
    private IMemoryCache _cache;

    public ValuesController(IMemoryCache memoryCache)
    {
      
      _cache = memoryCache;
    }
    /// <summary>
    /// Some summary.
    /// </summary>
    /// <returns>The ting you wanted!</returns>
    [HttpGet]
    public async Task<IEnumerable<string>> Get()
    {
      var api = new Api();
      var stations = await api.GetStationsAsync();
      var station = stations.FirstOrDefault(s => s.IATA.Equals("pdx", StringComparison.CurrentCultureIgnoreCase));
      var pdxStations = stations.Where(s => s.IATA.Equals("pdx", StringComparison.CurrentCultureIgnoreCase));

      //var scary = await api.GetWeatherAlertByZipCodeAsync("97209");
      var conditions = await _cache.GetOrCreateAsync(new { loc = "pdx", date = DateTime.Today }, async (cache) =>
      {
        cache.SetAbsoluteExpiration(DateTime.Now.AddHours(1));
         return await api.GetCurrentObservationsByStationAsync(station);
       });
      //
      var reqparameters = new OpenWeather.Noaa.Models.WeatherParameters();
      reqparameters.SelectAll();
     //var forecast = await api.GetForecastByStationAsync(station,
     //  DateTime.Now,
     //  DateTime.Now.AddDays(3),
     //  OpenWeather.Noaa.Base.RequestType.Glance,
     //  OpenWeather.Noaa.Base.Units.Imperial,
     //  reqparameters
     //  );
     
      return new[] { conditions.Temperature_F.Value.ToString(),
       // forecast?.Timelines?.FirstOrDefault()?.PrecipitationLiquid?.ToString()
      };
      /// return new string[] { "goodbye", "world" };
    }

  }
}
