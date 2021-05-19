var timeDispEl = $("#time-display");
$(document).ready(function () {

})
$(".saveBtn").on("click", function () {

    // set variables for my values
    var value = $(this).siblings(".userInput").val();
    var time = $(this).parent().attr("id");


    localStorage.setItem(time, value);
})

// // Create a function to update time as applications runs
function displayTime() {
    var rightNow = moment().hour();
    console.log(rightNow);

    $('.time-block').each(function () {
        var blockHour = parseInt($(this).attr('id').split('-')[1]);

        if (blockHour < rightNow) {
            $(this).addClass('past');

        } else if (blockHour === rightNow) {
            $(this).removeClass('past');
            $(this).addClass('present');

        } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    });

}
// loop through my timeblocks and return the correct class

function currentTime() {
    var displayTime = $("#time-display");
    var timer = moment().format("h:mm:ss");
    displayTime.html(timer);

}

currentTime();
setInterval(currentTime, 1000);




// load things in from local storage. 
$("#hour-9 .userInput").val(localStorage.getItem("hour-9"));
$("#hour-10 .userInput").val(localStorage.getItem("hour-10"));
$("#hour-11 .userInput").val(localStorage.getItem("hour-11"));
$("#hour-12 .userInput").val(localStorage.getItem("hour-12"));
$("#hour-13 .userInput").val(localStorage.getItem("hour-13"));
$("#hour-14 .userInput").val(localStorage.getItem("hour-14"));
$("#hour-15 .userInput").val(localStorage.getItem("hour-15"));
$("#hour-16 .userInput").val(localStorage.getItem("hour-16"));
$("#hour-17 .userInput").val(localStorage.getItem("hour-17"));





function checkPresent(present) {
    console.log("Value of Present: " + present);

}


setInterval(displayTime, 1000);
