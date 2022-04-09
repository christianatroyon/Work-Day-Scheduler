//displays the current date on the header
$('#currentDay').text(moment().format('MMMM Do YYYY'));

//var time = document.querySelector('#hour');
saveBtns = document.querySelectorAll('.saveBtn')

//renders color on text areas based on live time of day
var currentTimeColor = function () {
    var liveTime = moment().format('H');
    var timeBlocks = $(".timeBlockColor");
    console.log(liveTime);
    console.log(timeBlocks.length);
    //loop through timeColor classes
    for (var i = 0 ; i < timeBlocks.length ; i++) {
        //Get element i's ID as a string
        var elementID = timeBlocks[i].id;
        console.log(elementID);
        //get element by ID
        var dayColor = document.getElementById(timeBlocks[i].id)
        //remove old class
        $(timeBlocks[i].id).removeClass(".present .past .future");
        // apply new class if it applies based on time
        if (elementID < liveTime) {
            $(dayColor).addClass("past");
        } else if (elementID > liveTime) {
            $(dayColor).addClass("future");
        } else {
            $(dayColor).addClass("present");
        }
    }
}
// check time!
setInterval(currentTimeColor(), 60);
