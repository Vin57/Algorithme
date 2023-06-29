var tableau = new Array(100).map(function (x, i) { return i + 1; });
var numberToGuess = Math.floor(Math.random() * 100);
console.log("Number to guess : ".concat(numberToGuess));
function simpleSearch(tableau, numberToGuess) {
    return 0;
}
var result = simpleSearch(tableau, numberToGuess);
console.log("Number found : ".concat(tableau[result]));
