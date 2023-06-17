"use strict";
// Typescript [Learning]
// [1] Type Declaration
// ---------Basic Types
const hello = "Finally learning typescript";
const age = 33;
let isValid = true;
console.log(hello + 3);
let isChecked = false; /* Auto type infered, no need to  specify*/
let variant; /* declaration only */
//----------- Any type
let pien = "yooo";
pien = 24; /* Won't produce errors when type changed */
// let blue: number = "wwww";                               /* Compiled Error: Cannot assign string to number type*/
// ---------- Arrays type
let arr = [30, 30, 30]; //                        /* Only 1 types array, similar to in C# */
let arr2 = ["meow", isValid]; //                     /* Normal array */
let arr3 = arr2; //                                         /* Assigning reference also changes the types */
// let arr4: [string, boolean] = [...arr2];                 /* Cannot be assigned even if it has the same value i.e destructuring doesn't work
//  [2] Tuples
//  Multiple types
let arr6 = ["meow", isValid]; //         /* It can be manually set */
//  Tuple Array
let rizzList = [
    ["Brian", false],
    ["Calvin", true],
    ["Roy", true],
    ["You", false],
];
