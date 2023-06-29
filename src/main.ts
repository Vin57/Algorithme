import { search as binary_search } from "./binary_search";
import { subject } from "./fixtures";

var i = 0;  

const position = Math.floor(Math.random() * 1000) % (subject.length - 1);
const dateToFound = subject[position].date;

console.log(`Date to found : ${dateToFound.toISOString()} at position ${position}`);
const result = binary_search(subject, dateToFound);
if (result == -1) {
    console.log('XXXXXXXXXXXXXX Not found XXXXXXXXXXXXXXXXX');
} else {
    console.log(`Number found at position ${result} ==> ${subject[result].date.toISOString()}`);
    console.log(`Assert equality: ${subject[result].date.getTime() == dateToFound.getTime()}`);
}