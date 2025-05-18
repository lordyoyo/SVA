//TODO
//check for valid inputs for player numbers
//comparisons need to work for the same amount of months?!
//animal crackers
//hapiness?!
//cheese aging

//tableData constructor
class tD {
    constructor(animal, profit, perday) {
        this.animal = animal;
        this.profit = profit;
        this.perday = perday;
    }
};

var mainTD = new tD();

//day and night background switch
const bgdate = new Date();
const bghour = bgdate.getHours();
if (bghour >= 6 && bghour < 18) {
    document.body.style.backgroundImage="url('img/bg_day.png')";
} else {
    document.body.style.backgroundImage="url('img/bg_night.png')";
}

function refresh() {
    // Your refresh logic here.  For demonstration, we'll just log to the console.
    console.log("Input changed!  refresh() function called.");
    //create new table data
    const aninums = getaninums();
    const seasons = getseasons();
    updateprofessions(); //updating checkboxes
    const profs = getprofs();
    const settings = {
        "smart": document.getElementById("check_smart").checked,
    }
    calculate(aninums,profs,seasons,settings);
    //create new table

}

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
    };
    updateprofessions();
};

function getaninums() {
  const elements = document.querySelectorAll('.aninum');
  const list = {}; // Or use [] for an array of objects

  elements.forEach(input => {
    list[input.id] = input.value; // For object: { id: value }
    // valuesWithIds.push({ id: input.id, value: input.value }); // For array of objects
  });

  return list; // Or return the array if you chose that structure
}

function getseasons() {
  const springCheckbox = document.getElementById('check_spring');
  const summerCheckbox = document.getElementById('check_summer');
  const fallCheckbox = document.getElementById('check_fall');
  const winterCheckbox = document.getElementById('check_winter');

  const checkedCount =
    (springCheckbox.checked ? 1 : 0) +
    (summerCheckbox.checked ? 1 : 0) +
    (fallCheckbox.checked ? 1 : 0) +
    (winterCheckbox.checked ? 1 : 0);

  const seasonData = {
    num_months: checkedCount,
    Spring: springCheckbox.checked,
    Summer: summerCheckbox.checked,
    Fall: fallCheckbox.checked,
    Winter: winterCheckbox.checked,
  };

  return seasonData;
}

function updateprofessions() {
    const numPlayers = parseInt(document.getElementById('num_players').value, 10); // Parse as integer

    const arti = document.getElementById('check_artisan');
    const ranc = document.getElementById('check_rancher');
    const coop = document.getElementById('check_coopmaster');
    const shep = document.getElementById('check_shepherd');
    const gath = document.getElementById('check_gatherer');
    const bota = document.getElementById('check_botanist');
    
    // 1. Permanent rule: Botanist depends on Gatherer
    bota.disabled = !gath.checked;

    // 2. Rancher, Coopmaster, and Shepherd dependencies
    coop.disabled = (!ranc.checked || ranc.disabled);
    shep.disabled = (!ranc.checked || ranc.disabled);

    arti.disabled = false;
    ranc.disabled = false;

    // 3. logics
    if (numPlayers === 2){
        if (arti.checked && coop.checked){
            shep.disabled = true;
            shep.checked = false;
        };
        if (arti.checked && shep.checked){
            coop.disabled = true;
        };
        if (shep.checked && coop.checked){
            arti.disabled = true;
        }
    } else if (numPlayers === 1){
        if (ranc.checked){
            arti.disabled = true;
            arti.checked = false;
            if (coop.checked){
                shep.disabled = true;
                shep.checked = false;
            }
            if (shep.checked){
                coop.disabled = true;
            }
        };
        if (arti.checked){
            ranc.disabled = true;
        }
    }
    // 4. Unchecking logic (applied at the end)
    if (arti.disabled) {
        arti.checked = false;
    }
    if (ranc.disabled) {
        ranc.checked = false;
    }
    if (coop.disabled) {
        coop.checked = false;
    }
    if (shep.disabled) {
        shep.checked = false;
    }
    if (bota.disabled) {
        bota.checked = false;
    }
}

function getprofs() {
    const profs = {
        "arti": document.getElementById('check_artisan').checked,
        "ranc" : document.getElementById('check_rancher').checked,
        "coop" : document.getElementById('check_coopmaster').checked,
        "shep" : document.getElementById('check_shepherd').checked,
        "gath" : document.getElementById('check_gatherer').checked,
        "bota" : document.getElementById('check_botanist').checked
    }
    return profs;
}

function calculate(aninums,profs,seasons,settings){
    //logic:
    //create an array of the valid animals
    const anilist = [];
    const prof =[];
    for (const [key, value] of Object.entries(aninums)) {
        if(value>0){
            const dataid = key; // e.g., 'num_cows'
            for (const animalKey in animalData) {
                if (animalData[animalKey].dataid === dataid) {
                    // Find the first produce item with a chance greater than 0
                    for (const produceKey in animalData[animalKey].produce) {
                        if (animalData[animalKey].produce[produceKey].chance > 0) {
                            const produce = animalData[animalKey].produce[produceKey];
                            // Calculate the weighted price in a generalized way
                            let weightedPrice = 0;
                            for (const qualityKey in produce) {
                                if (produce[qualityKey] && typeof produce[qualityKey].price === 'number') {
                                    weightedPrice += produce[qualityKey].price * (produce[qualityKey].chance || 0);
                                }
                            }
                            displayValue = (weightedPrice * produce.chance) / produce.days * value;
                            finalProducePrice = displayValue * 28 * seasons.num_months;
                            anilist.push([animalData[animalKey].name, Math.floor(finalProducePrice), Math.floor(displayValue)]);
                            break;
                        }
                    }
                    break; // Found a match, no need to keep searching other animals
                }
            }
        }
    }
    //add the data to the table
    const mainContent = document.getElementById("maincontent");
    mainContent.innerHTML = ''; // Clear any existing content
    for (const item of anilist) {
        const row = document.createElement("tr");
        const animalCell = document.createElement("td");
        const profitCell = document.createElement("td");
        const perDayCell = document.createElement("td");

        animalCell.textContent = item[0];     // Animal Name
        profitCell.textContent = item[1];     // Profit
        perDayCell.textContent = item[2];    // Per Day

        row.appendChild(animalCell);
        row.appendChild(profitCell);
        row.appendChild(perDayCell);
        mainContent.appendChild(row);
    }
    //console.log(anilist);
}
//console.log(Object.keys(animalData).length);
//console.log(Object.hasOwn(animalData.gold.produce.goldegg.basic,"coopchance"));