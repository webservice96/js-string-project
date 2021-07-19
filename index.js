var chai = document.querySelector("#chai");
var ratton = document.querySelector("#ratton");
var result = document.querySelector("#result");

ratton.addEventListener('keypress', function() {
    var match = chai.value.indexOf(ratton.value);
    if (match == -1) {
        result.innerHTML = `The value ${ratton.value} was not found!`;
    } else {
        result.innerHTML = `The value ${ratton.value} was found at ${match}`;
    }
});