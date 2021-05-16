var check = 0;
var timeDisplEl = $("#time-display");
var hourEl = $("#hour");





function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    console.log(typeof rightnow);
    timeDisplayEl.text(rightNow);
    var present = rightNow.substring(16, 18);
    var check = parseInt(present);
    console.log("This is check value ", check);

    return check;

}

function checkPresent(present) {
    console.lFog("Value of Present: " + present);

}

function save() {
    // event listener when click on text box it lets them enter their appointements
    // save-btn.on('click, write()){
    // document.textContent
}

setInterval(displayTime, 1000);
