// Typescript [Learning]

// [1] Type Declaration
// ---------Basic Types
const hello: string = "Finally learning typescript";
const age: number = 33;
let isValid: boolean = true;

console.log(hello + 3);

let isChecked = false; /* Auto type infered, no need to  specify*/
let variant: string; /* declaration only */

//----------- Any type
let pien: any = "yooo";
pien = 24; /* Won't produce errors when type changed */

// let blue: number = "wwww";                               /* Compiled Error: Cannot assign string to number type*/

// ---------- Arrays type
let arr: number[] = [30, 30, 30]; //                        /* Only 1 types array, similar to in C# */
let arr2: any[] = ["meow", isValid]; //                     /* Normal array */
let arr3 = arr2; //                                         /* Assigning reference also changes the types */
// let arr4: [string, boolean] = [...arr2];                 /* Cannot be assigned even if it has the same value i.e destructuring doesn't work

//  [2] Tuples
//  Multiple types
let arr6: [string, boolean] = ["meow", isValid]; //         /* It can be manually set */

//  Tuple Array
let rizzList: [string, boolean][] = [
  ["Brian", false],
  ["Calvin", true],
  ["Roy", true],
  ["You", false],
];

//  Union
let union: string | boolean | [] = "true"; //                           Can be any number of types
union = false;

// Enums
enum KeyCode {
  W,
  A,
  S,
  D,
}

console.log(KeyCode.D);
