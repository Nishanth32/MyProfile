﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace MyProfile.Pages
{
    public class IndexModel : PageModel
    {
        public IActionResult OnGet()
        {
            var trytoRedirect = "~/MyResume";            return RedirectPermanent(trytoRedirect);
        }
    }
}
