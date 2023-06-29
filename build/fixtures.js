"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.number_of_items = exports.subject = void 0;
var number_of_items = 100;
exports.number_of_items = number_of_items;
var subject = Array.from({ length: number_of_items }, function () {
    return { date: new Date(Math.floor(Date.now() - (Math.random() * 10000000000))) };
});
exports.subject = subject;
subject.sort(function (a, b) { return a.date.getTime() - b.date.getTime(); });
