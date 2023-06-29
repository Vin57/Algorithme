"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var binary_search_1 = require("./binary_search");
var fixtures_1 = require("./fixtures");
var i = 0;
// Proceed to x search to measure performance
var position = Math.floor(Math.random() * 1000) % (fixtures_1.subject.length - 1);
var dateToFound = fixtures_1.subject[position].date;
console.log("Date to found : ".concat(dateToFound.toISOString(), " at position ").concat(position));
var result = (0, binary_search_1.search)(fixtures_1.subject, dateToFound);
if (result == -1) {
    console.log('XXXXXXXXXXXXXX Not found XXXXXXXXXXXXXXXXX');
}
else {
    console.log("Number found at position ".concat(result, " ==> ").concat(fixtures_1.subject[result].date.toISOString()));
    console.log("Assert equality: ".concat(fixtures_1.subject[result].date.getTime() == dateToFound.getTime()));
}
