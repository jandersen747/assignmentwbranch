// JavaScript Document
'use strict'

const isPrime = function (arg) {
    for (var i = 3; i < arg; i += 2) {
        if (arg % i === 0) {
            return false;
        }
    }
    return true;
}
