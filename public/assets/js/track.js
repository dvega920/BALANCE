$(document).ready(function () {
    // Start click events for emojis - testing only 
    // Blue 

    $(".mood-button").click(function () {
        // alert("Handler for blue emoji called.");
        $.ajax({
            method: "POST",
            url: "/api/moods",
            data: {
                mood_name: $(this).data("mood-name"),
                rating: $(this).data("rating")
            }

        })
    });
    // Mouse over event blue  
    $("#blue").mouseover(function () {
        $("#blue").css("font-size", "80px");

    });

    // Mouse over event green 
    $("#green").mouseover(function () {
        $("#green").css("font-size", "80px");

    });

    // Mouse over event blueviolet 
    $("#blueviolet").mouseover(function () {
        $("#blueviolet").css("font-size", "80px");

    });

    // Mouse over event yellow 
    $("#yellow").mouseover(function () {
        $("#yellow").css("font-size", "80px");

    });

    // Mouse over event red 
    $("#red").mouseover(function () {
        $("#red").css("font-size", "80px");

    });

    $(".mood-button").mouseout(function () {
        $(".mood-button").css("font-size", "60px");

    });

    $(".mood-button").click(function () {
        window.location.href = '/activities.html';
    })



});