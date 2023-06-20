"use strict";
// Typescript [Learning]
// [1] Type Declaration
// ---------Basic Types
const hello = "Finally learning typescript";
const age = 33;
let isValid = true;
console.log(hello + 3);
let isChecked = false; //                                   * Auto type infered, no need to  specify*/
let variant; //                                      declaration only */
//----------- Any type
let pien = "yooo";
pien = 24; //                                                Won't produce errors when type changed */
// let blue: number = "wwww";                               /* Compiled Error: Cannot assign string to number type*/
// ---------- Arrays type
let arr = [30, 30, 30]; //                        /* Only 1 types array, similar to in C# */
let arr2 = ["meow", isValid]; //                     /* Normal array */
let arr3 = arr2; //                                         /* Assigning reference also changes the types */
let arrAsserted = [
    ...arr2,
]; /* Different types can be asserted if the format is the same */
// Different assertion
let arrAssertedDiff = [...arr2];
// Never type is no value
let empty;
const yello = () => {
    console.log(hello);
};
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
//  Union
let union = "true"; //                           Can be any number of types
union = false;
let unionValue = "red";
let buttonColor = "blue";
// [3] Enums
var KeyCode;
(function (KeyCode) {
    KeyCode[KeyCode["W"] = 0] = "W";
    KeyCode[KeyCode["A"] = 1] = "A";
    KeyCode[KeyCode["S"] = 2] = "S";
    KeyCode[KeyCode["D"] = 2] = "D";
})(KeyCode || (KeyCode = {}));
console.log(KeyCode.W);
console.log(KeyCode.A);
console.log(KeyCode.S);
console.log(KeyCode.D);
let red = KeyCode.W; //                Assignable as types
switch (red) {
}
// console.log(Object.keys(KeyCode));
// [3] Objects
let person = {
    id: 2,
    name: "Berry",
};
let mainUser = {
    id: 200,
    name: "Berrylia",
    isMarried: false,
};
// [5] Functions
// function multiply(a,b){ // Parameter has to have type declared
//     return a + b;
// }
function multiply(a, b) {
    // Return type can be auto inferred
    return a * b;
}
// multiply(3, "hello"); // Error
let multip = multiply(6, 9);
console.log(multip);
function eatBanana(target) {
    target.isDed = "ayyo?"; // It automatically shows what both of them have in common. It's permissible/won't raise an error to assign wrong type to an object so be careful when using unions
}
let connor = {
    id: 20,
    isDed: false,
};
eatBanana(connor);
console.log({ connor }); // Doesn't cause an error
let jeff = {
    id: 23043,
    name: "Jeffrey",
    introduce: () => "Hello My name is jeff",
};
let multiplier = (x, y) => x * y;
// [6] Classes      Available in normal JS
class GameEntity {
    constructor(hp, mp) {
        this.hp = hp;
        this.mp = mp;
        console.log("Original Constructor called");
    }
}
// Inheritance
class Monster extends GameEntity {
    constructor(hp, mp) {
        super(hp, mp); // Super must be included
        console.log("Derived Constructor Called");
    }
    attack(target, dmg) {
        target.hp -= dmg;
    }
}
let Slime = new Monster(200, 100);
let Player = new GameEntity(1000, 500);
console.log(Player.hp);
Slime.attack(Player, 100);
console.log(Player.hp);
// [7] Generics                 It's only there to keep the type consistence, and not interfere with the value itself, it's used to when you need to redeclare something using type
function create2DimArray(val, xDim, yDim) {
    let firstArray = new Array(xDim).fill(val);
    let secondArray = new Array(yDim).fill(firstArray);
    return secondArray;
}
let chessBoard = create2DimArray(0, 2, 10);
console.log(chessBoard);
