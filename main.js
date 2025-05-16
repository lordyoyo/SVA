function refresh() {
  // Your refresh logic here.  For demonstration, we'll just log to the console.
  console.log("Input changed!  refresh() function called.");
}

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
//check for right input values
//check for valid inputs for player numbers