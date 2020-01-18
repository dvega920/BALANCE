$(document).ready(function () {


    // Start click events for emojis - testing only 
    // Blue 

    $(".activity-button").click(function () {
        // alert("Handler for biking emoji called.");
        $.ajax({
            method: "POST",
            url: "/api/activity",
            data: {
                activity_name: $(this).data("activity-name"),
                rating: $(this).data("rating")
            }

        })
    });
    // Mouse over events 
    $("#biking").mouseover(function () {
        $("#biking").css("text-shadow", "1px 1px 3px #323232");

    });

    $("#sleeping").mouseover(function () {
        $("#sleeping").css("text-shadow", "1px 1px 3px #323232");

    });

    $("#studying").mouseover(function () {
        $("#studying").css("text-shadow", "1px 1px 3px #323232");

    });

    $("#online").mouseover(function () {
        $("#online").css("text-shadow", "1px 1px 3px #323232");

    });

    $("#friends").mouseover(function () {
        $("#friends").css("text-shadow", "1px 1px 3px #323232");

    });

    $("#drinking").mouseover(function () {
        $("#drinking").css("text-shadow", "1px 1px 3px #323232");

    });

    $("#love").mouseover(function () {
        $("#love").css("text-shadow", "1px 1px 3px #323232");

    });

    $("#gaming").mouseover(function () {
        $("#gaming").css("text-shadow", "1px 1px 3px #323232");

    });

    $("#reading").mouseover(function () {
        $("#reading").css("text-shadow", "1px 1px 3px #323232");

    });

    $("#eating").mouseover(function () {
        $("#eating").css("text-shadow", "1px 1px 3px #323232");

    });

    $("#shopping").mouseover(function () {
        $("#shopping").css("text-shadow", "1px 1px 3px #323232");

    });

    $("#pets").mouseover(function () {
        $("#pets").css("text-shadow", "1px 1px 3px #323232");

    });

    $("#traveling").mouseover(function () {
        $("#traveling").css("text-shadow", "1px 1px 3px #323232");

    });

    $("#driving").mouseover(function () {
        $("#driving").css("text-shadow", "1px 1px 3px #323232");

    });

    $("#working").mouseover(function () {
        $("#working").css("text-shadow", "1px 1px 3px #323232");

    });

    $("#exercising").mouseover(function () {
        $("#exercising").css("text-shadow", "1px 1px 3px #323232");

    });

    $("#baby-sitting").mouseover(function () {
        $("#baby-sitting").css("text-shadow", "1px 1px 3px #323232");

    });

    $("#church").mouseover(function () {
        $("#church").css("text-shadow", "1px 1px 3px #323232");

    });

    // Mouse out event green 
    $(".activity-button").mouseout(function () {
        $(".activity-button").css("text-shadow", "none");

    });

    // Window redirect event 
    $(".activity-button").click(function () {
        window.location.href = '/reports.html';
    })



});

