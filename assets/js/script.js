var timeDispEl = $("#time-display");
$(document).ready(function () {

})
$(".saveBtn").in("click", function () {

    // set variables for my values
    var value = $(this).siblings(".userInput").val();
    var time = $(this).parent().attr("id");


    localStorage.setItem(time, value);
})

// Create a function to update time as applications runs
function displayTime() {
    var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
    console.log(typeof rightnow);
}
// loop through my timeblocks and return the correct class

$('.time-block').each(funciton() {
    var blockHour = parseInt($(this).attr('id').split('-')[1]);

    if(blockHour <displayTime) {
        $(this).addClass('past');

    } else if(blockHour === displayHour){
    $(this).removeClass('past');
    $(this).addClass('present');

} else {
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).addClass('future');
}
});


timeUpdater();

// load things in from local storage. 
$("#hour-9 .userInput").val(localStorage.getItem("hour-9"));
$("#hour-10 .userInput").val(localStorage.getItem("hour-10"));





function checkPresent(present) {
    console.log("Value of Present: " + present);

}


setInterval(displayTime, 1000);
