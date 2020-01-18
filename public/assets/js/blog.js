$(document).ready(function () {
    // blogContainer holds all of our posts



    $("#entry").click(function () {
        // alert("Handler for biking emoji called.");
        $.ajax({
            method: "POST",
            url: "/api/activity",
            data: {
                activity_name: $(this).data("body"),
                createdAt: $(this).data("createdAt")
            }

        })
    });

















});
