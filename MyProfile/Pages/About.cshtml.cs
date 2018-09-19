using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace MyProfile.Pages
{
    public class AboutModel : PageModel
    {
        public string Message { get; set; }

        public IActionResult OnGet()
        {
            Message = "Your application description page.";
            return LocalRedirectPermanent("~/Index");
        }
    }
}
