//TODO
//cheese aging???

//day and night background switch
const bgdate = new Date();
const bghour = bgdate.getHours();
if (bghour >= 6 && bghour < 18) {
    document.body.style.backgroundImage = "url('img/bg_day.png')";
} else {
    document.body.style.backgroundImage = "url('img/bg_night.png')";
}

function refresh() {
    // Your refresh logic here.  For demonstration, we'll just log to the console.
    console.log("Input changed!  refresh() function called.");
    //create new table data
    anifix();
    const aninums = getaninums();
    const seasons = getseasons();
    updateprofessions(); //updating checkboxes
    const profs = getprofs();
    const settings = {
        "smart": document.getElementById("check_smart").checked,
    }
    calculate(aninums, profs, seasons, settings);
    //create new table

}

window.onload = function () {
    anifix();
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
    const list = {};

    elements.forEach(input => {
        const animalName = input.id.replace('num_', ''); // Get animal name from id
        const numValue = parseInt(input.value, 10) || 0; // Ensure it's a number

        // Find the parent row
        const parentRow = input.closest('tr');

        // Find the cracker input in the same row
        const crackerInput = parentRow ? parentRow.querySelector('.cracker') : null;
        const crackerValue = crackerInput ? parseInt(crackerInput.value, 10) || 0 : 0;

        // Find the craft checkbox in the same row
        const craftCheckbox = parentRow ? parentRow.querySelector('.craft') : null;
        const craftChecked = craftCheckbox ? craftCheckbox.checked : false; // Get checkbox state

        list[input.id] = numValue + crackerValue; // Sum the two values
        list[`craft_${animalName}`] = craftChecked; // Store the checkbox state
    });

    return list;
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
    if (numPlayers === 2) {
        if (arti.checked && coop.checked) {
            shep.disabled = true;
            shep.checked = false;
        };
        if (arti.checked && shep.checked) {
            coop.disabled = true;
        };
        if (shep.checked && coop.checked) {
            arti.disabled = true;
        }
    } else if (numPlayers === 1) {
        if (ranc.checked) {
            arti.disabled = true;
            arti.checked = false;
            if (coop.checked) {
                shep.disabled = true;
                shep.checked = false;
            }
            if (shep.checked) {
                coop.disabled = true;
            }
        };
        if (arti.checked) {
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
        "ranc": document.getElementById('check_rancher').checked,
        "coop": document.getElementById('check_coopmaster').checked,
        "shep": document.getElementById('check_shepherd').checked,
        "gath": document.getElementById('check_gatherer').checked,
        "bota": document.getElementById('check_botanist').checked
    }
    return profs;
}

function calculate(aninums, profs, seasons, settings) {
    //logic:
    //create an array of the valid animals
    const anilist = [];
    let grandTotal = 0;
    for (const key in aninums) {
        if (key.startsWith('num_') && aninums[key] > 0) {
            const animalName = key.replace('num_', '');
            for (const produceKey in animalData[animalName].produce) {
                const produce = animalData[animalName].produce[produceKey]
                if (produce.chance > 0) {
                    let seas = seasons.num_months; //needs to be fiddled with for pigs
                    let days = 28; //needs to be fiddled with for pigs
                    //produce.days sheeps tho;
                    //produce.chance;
                    //aninums[key] pigs tho gath
                    let baseMulti = seas * days * produce.chance / produce.days * aninums[key];
                    let craftKey = `craft_${animalName}`;
                    var subtotal = 0;
                    var tableProduct = produce.name;
                    for (const qK in produce.quality) {
                        const thisQ = produce.quality[qK];
                        let qualchance = thisQ.chance;
                        switch (animalName) {
                            case "chicken": {
                                if (profs.coop && "coopchance" in thisQ) {
                                    qualchance = thisQ.coopchance;
                                } else qualchance = thisQ.chance;
                                break;
                            };
                            case "duck": {
                                if (profs.coop && "coopchance" in thisQ) {
                                    qualchance = thisQ.coopchance;
                                } else qualchance = thisQ.chance;
                                break;
                            };
                            case "rabbit": {
                                if (profs.coop && "coopchance" in thisQ) {
                                    qualchance = thisQ.coopchance;
                                } else qualchance = thisQ.chance;
                                break;
                            };
                            case "void": {
                                if (profs.coop && "coopchance" in thisQ) {
                                    qualchance = thisQ.coopchance;
                                } else qualchance = thisQ.chance;
                                break;
                            };
                            case "dino": {
                                if (profs.coop && "coopchance" in thisQ) {
                                    qualchance = thisQ.coopchance;
                                } else qualchance = thisQ.chance;
                                break;
                            };
                            case "gold": {
                                if (profs.coop && "coopchance" in thisQ) {
                                    qualchance = thisQ.coopchance;
                                } else qualchance = thisQ.chance;
                                break;
                            };
                            case "sheep": {
                                if (profs.shep && "shepchance" in thisQ) {
                                    qualchance = thisQ.shepchance;
                                } else qualchance = thisQ.chance;
                                break;
                            };
                            case "pig": {
                                if (profs.bota && "botchance" in thisQ) {
                                    qualchance = thisQ.botchance;
                                } else qualchance = thisQ.chance;
                                break;
                            };
                            default: qualchance = thisQ.chance;
                        }
                        let subprice = 0;
                        if (aninums[craftKey] && "processed" in thisQ) {
                            let procI = thisQ.processed.result.split(".");
                            let processedItem = produceData[procI[0]].quality[procI[1]];
                            let pValue = processedItem.price;
                            console.log("pValue: ",pValue);
                            if (profs.arti) {
                                pValue = Math.floor(pValue * 1.4);
                            } else if (profs.ranc && procI[0] != "truffleoil") {
                                pValue = Math.floor(pValue * 1.2);
                            }
                            subprice = pValue * thisQ.processed.quantity;
                            tableProduct = produceData[procI[0]].name;
                        } else {
                            if (profs.ranc && produce.name != "Truffle") {
                                subprice = Math.floor(1.2 * thisQ.price);
                            } else subprice = thisQ.price;
                        }
                        subtotal = subtotal + subprice * qualchance * baseMulti;
                        console.log("subtotal: ", subtotal/112);
                    }
                    let subtotPD = subtotal / seas / days;
                    anilist.push([animalData[animalName].name, tableProduct, Math.floor(subtotal), Math.floor(subtotPD)]);
                    /*                            const displayValue = (weightedPrice * produceChance) / produceDays * aninums[key];
                                                const finalProducePrice = displayValue * 28 * seasons.num_months;
                                                anilist.push([produce.name, Math.floor(finalProducePrice), Math.floor(displayValue)]);
                                                break;*/
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
        const productCell = document.createElement("td");
        const profitCell = document.createElement("td");
        const perDayCell = document.createElement("td");

        animalCell.textContent = item[0];     // Animal Name
        productCell.textContent = item[1];    // Product Name
        profitCell.textContent = item[2];     // Profit
        perDayCell.textContent = item[3];    // Per Day

        row.appendChild(animalCell);
        row.appendChild(productCell);
        row.appendChild(profitCell);
        row.appendChild(perDayCell);
        mainContent.appendChild(row);

        grandTotal = grandTotal + item[2];
    }
    document.getElementById("mainProfits").innerHTML = grandTotal;
    document.getElementById("mainPerDay").innerHTML = Math.floor(grandTotal/28/seasons.num_months);
}

function anifix() {
    const crackerInputs = document.querySelectorAll('.cracker');
    crackerInputs.forEach(crackerInput => {
        const parentRow = crackerInput.closest('tr');
        if (parentRow) {
            const aninumInput = parentRow.querySelector('.aninum');
            if (aninumInput) {
                parentRow.querySelector('.craft').disabled = false;
                crackerInput.disabled = false;
                const aninumValue = parseInt(aninumInput.value, 10) || 0;
                crackerInput.max = aninumValue;
                if (aninumInput.id === "num_pig") {
                    crackerInput.max = 0;
                }
                if (crackerInput.value > crackerInput.max) {
                    crackerInput.value = crackerInput.max;
                }
                if (aninumInput.value == 0) {
                    parentRow.querySelector('.craft').disabled = true;
                    crackerInput.disabled = true;
                    parentRow.querySelector('.craft').checked = false;
                }
            }
        }
    });
}

//console.log(Object.keys(animalData).length);
//console.log(Object.hasOwn(animalData.gold.produce.goldegg.basic,"coopchance"));