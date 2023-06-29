"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
function search(array, subjectToFound) {
    console.log(subjectToFound.toISOString());
    var timeToSearch = subjectToFound.getTime();
    var max = array.length - 1;
    var mid = Math.floor(max / 2);
    var min = 0;
    var nbTries = 0;
    while (min < max) {
        nbTries++; // Track the number of tries to found the subject in array
        mid = Math.floor((max + min) / 2);
        var currentLoopTime = array[mid].date.getTime();
        if (currentLoopTime == timeToSearch) {
            console.log("Founded ! With ".concat(nbTries, " tries"));
            return mid;
        }
        if (currentLoopTime > timeToSearch) {
            max = mid;
        }
        if (currentLoopTime < timeToSearch) {
            min = mid;
        }
        // debug : console.log(timeToSearch, currentLoopTime, mid, max, min);
    }
    return -1;
}
exports.search = search;
