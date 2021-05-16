var check = 0;
var timeDispEl = $("#time-display");






function displayTime() {
    var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
    console.log(typeof rightnow);
    timeDispEl.text(rightNow);
    var present = rightNow.substring(16, 18);
    var check = parseInt(present);
    console.log("This is check value ", check);

    return check;

}

function checkPresent(present) {
    console.log("Value of Present: " + present);

}


setInterval(displayTime, 1000);
