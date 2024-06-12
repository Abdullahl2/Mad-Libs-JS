// Mad Lib with JavaScript by Mr. V

// event listener
document.getElementById("mad-lib-btn").addEventListener("click", buildMadlib);
// event function
function buildMadlib() {
  // Input
  let pluralNoun = document.getElementById("plural-noun").value;
  let adjective = document.getElementById("adjective").value;
  let verb = document.getElementById("verb").value;
  let noun = document.getElementById("noun").value;

  // Process
  let result =
    '"There are too many ' +
    pluralNoun +
    " on this " +
    adjective +
    ' airplane!", I screamed. "Somebody had to ' +
    verb +
    " on the " +
    noun +
    ' to solve this problem."';
  document.getElementById("result").innerHTML = result;

  // event listener for first mad lib button
  document.getElementById("mad-lib-btn").addEventListener("click", buildMadlib);

  // event listener for second mad lib button
  document
    .getElementById("second-mad-lib-btn")
    .addEventListener("click", buildSecondMadlib);

  // event function for first mad lib button
  function buildMadlib() {
    // Input
    let pluralNoun = document.getElementById("plural-noun").value;
    let adjective = document.getElementById("adjective").value;
    let verb = document.getElementById("verb").value;
    let noun = document.getElementById("noun").value;

    // Process
    let result =
      '"There are too many ' +
      pluralNoun +
      " on this " +
      adjective +
      ' airplane!", I screamed. "Somebody had to ' +
      verb +
      " on the " +
      noun +
      ' to solve this problem. It was a wild ride!"';
    document.getElementById("result").innerHTML = result;
    alert(result);
  }

  // event function for second mad lib button
  function buildSecondMadlib() {
    // Process
    let result =
      'The pilot announced over the intercom, "We have a situation! There are ' +
      pluralNoun +
      " in the cockpit and a " +
      adjective +
      " flight attendant is trying to " +
      verb +
      " them using a " +
      noun +
      ' as a weapon. Buckle up folks!"';
    document.getElementById("result").innerHTML = result;
    document.body.style.backgroundImage = "url('images/snakes-on-a-plane.jpg')";
    document.getElementById("result").style.fontFamily = "Arial, sans-serif";
    document.getElementById("result").style.borderColor = "red";
  }

  // undo changes made by second mad lib button
  document.getElementById("mad-lib-btn").addEventListener("click", function () {
    document.body.style.backgroundImage = "";
    document.getElementById("result").style.fontFamily = "";
    document.getElementById("result").style.borderColor = "";
  });
  alert(result);
}
