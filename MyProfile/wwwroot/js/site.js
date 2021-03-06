﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
$("#profile_navbar").css({ display: "none" });
var intro_section = $("#intro_section").offset().top;
var project_section = $('#project_section').offset().top;
var about_section = $("#about_section").offset().top;
var experience_section = $("#experience_section").offset().top;
var education_section = $("#education_section").offset().top;
var certification_section = $("#certification_section").offset().top;
var award_section = $("#award_section").offset().top;
var currentsection = null;
var barShowing = false;

$(window).on('scroll', function () {
    var y_scroll_pos = window.pageYOffset;
    var y_scroll_pos_offset = y_scroll_pos + 200;
    try {

        if (y_scroll_pos < project_section -50) {
            // Hide nav Bar
            $("#profile_navbar").fadeOut();
            barShowing = false;
        }
        else if (y_scroll_pos < project_section + 10 ){
            if (!barShowing) {
                $("#profile_navbar").fadeIn();
                barShowing = true;
            }
        }
    } catch (e) {
        this.console.log(e);
    }


    try {

        if (y_scroll_pos > intro_section && y_scroll_pos_offset < about_section) {
            // Project Section
            if (currentsection === "project") return;
            currentsection = "project";
            $(".runner").removeClass("activate").hide();
            $("#project").show().addClass("activate");
            $("#about").show();

        } else if (y_scroll_pos > project_section && y_scroll_pos_offset < experience_section) {
            //About Section
            if (currentsection === "about") return;
            currentsection = "about";
            $(".runner").removeClass("activate").hide();
            $("#project").show();
            $("#about").show().addClass("activate");
            $("#experience").show();
        } else if (y_scroll_pos > about_section && y_scroll_pos_offset < education_section) {
            //Experience Section
            if (currentsection === "experience") return;
            currentsection = "experience";
            $(".runner").removeClass("activate").hide();
            $("#about").show();
            $("#experience").show().addClass("activate");
            $("#education").show();
        } else if (y_scroll_pos > experience_section && y_scroll_pos_offset < certification_section) {
            //Education Section
            if (currentsection === "education") return;
            currentsection = "education";
            $(".runner").removeClass("activate").hide();
            $("#experience").show();
            $("#education").show().addClass("activate");
            $("#certification").show();
        } else if (y_scroll_pos > education_section && y_scroll_pos_offset < award_section) {
            //Certification Section
            if (currentsection === "certification") return;
            currentsection = "certification";
            $(".runner").removeClass("activate").hide();
            $("#education").show();
            $("#certification").show().addClass("activate");
            $("#award").show();
        } else if (y_scroll_pos > certification_section) {
            //Certification Section
            if (currentsection === "award") return;
            currentsection = "award";
            $(".runner").removeClass("activate").hide();
            $("#certification").show();
            $("#award").show().addClass("activate");
        }


    } catch (e) {
        Console.log(e);
    }

});