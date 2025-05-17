//day and night background switch, no night bg yet
const bgdate = new Date();
const bghour = bgdate.getHours();
if (bghour >= 6 && bghour < 18) {
    document.body.style.backgroundImage="url('img/bg_day.png')";
} else {
    document.body.style.backgroundImage="url('img/bg_day.png')"; //temporarily the same
}

function refresh() {
    // Your refresh logic here.  For demonstration, we'll just log to the console.
    console.log("Input changed!  refresh() function called.");
    //delete existing table
    document.getElementById("mainContent").innerHTML = "";
    //create new table data
    
    //create new table

}

//tableData constructor
class tD {
    constructor(animal, profit, perday) {
        this.animal = animal;
        this.profit = profit;
        this.perday = perday;
    }
};
var mainTD = new tD();

//this should fill up the tableData
function recalculate() {
};

window.onload = function() {
    // 1. Get all input elements in the document.
    var inputs = document.getElementsByTagName("input");

    // 2. Iterate through each input element.
    for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i];
        // 3. Add the onchange event handler.
        input.onchange = refresh;
    }
};

//check for valid inputs for player numbers
//comparisons need to work for the same amount of months