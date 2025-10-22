using Microsoft.AspNetCore.Mvc;

namespace WebSite.Controllers
{
    public class StaticPagesController : Controller
    {
        [Route("privacy")]
        public IActionResult Privacy()
        {
            return View();
        }
        [Route("contact")]
        public IActionResult Contact()
        {
            return View();
        }
   
    }
}