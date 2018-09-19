using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace MyProfile.Pages
{


    public class MyResumeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }

    public class MyResumeModel : PageModel
    {
        public void OnGet()
        {
        }
    }
}