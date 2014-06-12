/*------------------------------------------------------------------------------------------------------------------------
 @package: NAT (app)

 @author: Zach Schneider
 @www: http://zachschneider.com
 @github: zkm

 @twitter: zkm

 @copyright: COPYRIGHT 6-11-2014
 =============================================================================
 Filename: main.js
 =============================================================================
 This file is responsible for basic JavaScript carousel on the NAT app.
 --------------------------------------------------------------------------------------------------------------------- */

$(document).ready(function () {

    var slide = $(".carousel > li"),
        thumbnail = $(".carouselNav > li"), 
        next = $(".next"), 
        prev = $(".prev");

    slide.each(function (e) {
        if (e != 0) {
            $(this).hide();
        } else {
            $(this).show();
        }
    });

    // Thumbnail Function
    thumbnail.click(function () {
        if (slide.filter(":visible").next().length != 0) {
            slide.filter(":visible").next().show().prev().hide();
        } else {
            slide.filter(":visible").hide();
            slide.first().show();
        }
        return false;
    });

    // Next Function
    next.click(function () {
        if (slide.filter(":visible").next().length != 0) {
            slide.filter(":visible").next().show().prev().hide();
        } else {
            slide.filter(":visible").hide();
            slide.first().show();
        }
        return false;
    });

    // Previous Function
    prev.click(function () {
        if (slide.filter(":visible").prev().length != 0) {
            slide.filter(":visible").prev().show().next().hide();
        } else {
            slide.filter(":visible").hide();
            slide.last().show();
        }
        return false;
    });

});