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
    // Mouse over event blue  




});