//displays the current date on the header
$('#currentDay').text(moment().format('MMMM Do YYYY'));

// will use this later for saving tasks
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


// $('data-id-').click(function () {
//     inputVal.push({
//         new: 'event',
//         inputText: ''
//     })
//     localStorage.setItem("events", JSON.stringify(events))
// })
//When save button is hit, it adds it to local storage
for (let i = 0; i < saveBtns.length; ++i) {
    saveBtns[i].addEventListener('click', function(event) {
        var inputVal = saveBtns[i].previousElementSibling.value; 
        console.log('input:', inputVal)
        var newNum = i + 1;
        localStorage.setItem('data-id-' + (newNum) , inputVal)
        console.log(saveBtns)
    })
}
//pulls the localstorage and displays on the screen
grabData()

function grabData() {
    for (var i = 0; i < 10; ++i) {

       var saveItem = localStorage.getItem('data-id-'+ i);

       if (saveItem !== null) {
        document.querySelector('input[data-id-' + i + ']').value = saveItem
       }

       console.log('dataVal:', localStorage.getItem('data-id-'+ i))
    }
}