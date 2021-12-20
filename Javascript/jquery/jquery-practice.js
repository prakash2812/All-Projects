
$(document).ready(function () {
    $('button').click(function () {
        // ------ attribute method to pass in to tags
        // $('img').attr("src",'cloud.png');
        // $('img').removeAttr("src", 'cloud.png');
    })
})

$(document).ready(function(){
    $('button').click(function(){
        //--slideup and slidedown and slidetoggle
        // $('#right').slideToggle();
    })
})

$(document).ready(function(){
    $('button1').click(function(){
        //---each method
        $('li').each(function(){
            $(this).html('<li>all list items</li>');
        })
    })
})

$(document).ready(function () {
    $('button1').mouseover(function () {
        $('#center').css("color", "red");
    })

    $('#right1').hover(function () {
        $('div').css('background-color', 'yellow');
    }, function () {
        $('div').css('background-color', 'grey');
    })
})

$(window).load(function () {
    // alert("page loaded");
})

$(document).ready(function () {
    $('#right').hover(function () {
        //      --show method
        // $('img').show();
    }, function () {
        //    --- hide method
        // $('img').hide();
    })
})


$(document).ready(function () {
    $("button1").click(function () {
        // ---------addclass and remove class
        //  $("p:last").addClass("para")
        // $("p:first").removeClass("para");

        // ----- combine of addcalss and removeclass is called toggleclass
        // $("p:first").toggleClass("para");

        // ------FADEIN, FADEOUT, FADETO-opacity
        // $('#center').fadeTo(2500,0.3);
        // $("#left").fadeIn(25000);
        // $('#right').fadeIn(2500).fadeOut(2500);
        //  $('#right').fadeToggle(2500)

        // --------append/prepend before/after
        // $('#right').append("<h2>header 2</h2>")
        //  $('#right').prepend("<h2>header 2</h2>")
        // $('#left').after("<h2>header 2</h2>");
        // $('#rigt').after('<h2>header 2</h2>');

        // remove/removeAll and replace with
        // $('#center').remove()
        // $('#left p').replaceWith('<p>new para replaced</p>');


    })
})



$(document).ready(function () {
    $("button1").click(function () {
        // ---------------- jquery selectors
        // $("div:not(#test,#left)").hide();
        // $("div:first").hide();
        // $("body #left p:first").hide();
        // $("div:odd").hide();
        // $("h2:contains('content')").hide();
        // $("p:has(b)").hide();
        // $("ul li:nth-child(2)").hide(); 
        //  $("body div:nth-child(2)").hide();
        // $("li:empty").hide();

        //--------------Css method
        // $("selector").css("property","value")
        // $("#left").css("border","solid 2px blue")
        // $("#right").css({"color":"red","margin":"2px"})

        // -----html and text method
        // $("p").html("<p>All paragraphs</p>")
        //  $("h3").html("<h3>All paragraph replaced or new text with header 2</h3>")
        //  $("p").html("<h2>All paragraph replaced or new text with header 2</h2>")
        //  $("p").text("Paragraph text added or replaced")

        // ------------chaining method

        // $("#left").css("color","red").css("border","solid 2px blue").fadeOut('20000');
        /*  $("#left").css("color","red");
        $("#left").css("border","solid 2px blue");
        $("#left").fadeOut("20000");  */

    })

})

