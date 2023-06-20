// Typescript [Learning]

// [1] Type Declaration
// ---------Basic Types
const hello: string = "Finally learning typescript";
const age: number = 33;
let isValid: boolean = true;

console.log(hello + 3);

let isChecked = false; //                                   * Auto type infered, no need to  specify*/
let variant: string; //                                      declaration only */

//----------- Any type
let pien: any = "yooo";
pien = 24; //                                                Won't produce errors when type changed */

// let blue: number = "wwww";                               /* Compiled Error: Cannot assign string to number type*/

// ---------- Arrays type
let arr: number[] = [30, 30, 30]; //                        /* Only 1 types array, similar to in C# */
let arr2: any[] = ["meow", isValid]; //                     /* Normal array */
let arr3 = arr2; //                                         /* Assigning reference also changes the types */
// let arr4: [string, boolean] = [...arr2];                 /* Cannot be assigned even if it has the same value i.e destructuring doesn't work

type sample = [string, boolean];
let arrAsserted: [string, boolean] = <sample>[
  ...arr2,
]; /* Different types can be asserted if the format is the same */

// Different assertion
let arrAssertedDiff: sample = [...arr2] as sample;

// Never type is no value
let empty: never;

const yello = () => {
  console.log(hello);
};

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
let unionValue: "blue" | "red" = "red";

type ColorVariant = "blue" | "red" | "green" | "yellow";
let buttonColor: ColorVariant = "blue";

// [3] Enums
enum KeyCode {
  W,
  A,
  S,
  D = 2, // Can be reassigned and Doesn't have to be unique
}

console.log(KeyCode.W);
console.log(KeyCode.A);
console.log(KeyCode.S);
console.log(KeyCode.D);

let red: KeyCode = KeyCode.W; //                Assignable as types

switch (red) {
}

// console.log(Object.keys(KeyCode));

// [3] Objects
let person: {
  id: number;
  name: string; // Inline type/structure declaration
} = {
  id: 2,
  name: "Berry",
};

// Above is too messy so:
type Age = number; // Type is a variable for type template, can be any kind of types unions/tuples/object etc

type Person = {
  id: number;
  name: string;
  isMarried: boolean;
};

let mainUser: Person = {
  id: 200,
  name: "Berrylia",
  isMarried: false,
};

// [5] Functions
// function multiply(a,b){ // Parameter has to have type declared
//     return a + b;
// }
function multiply(a: number, b: number): number {
  // Return type can be auto inferred
  return a * b;
}

// multiply(3, "hello"); // Error
let multip = multiply(6, 9);
console.log(multip);

type monke = {
  id: number;
  isDed: boolean;
};
type human = {
  name: string;
  social: number;
  isDed: string;
};

function eatBanana(target: human | monke): void {
  target.isDed = "ayyo?"; // It automatically shows what both of them have in common. It's permissible/won't raise an error to assign wrong type to an object so be careful when using unions
}

let connor: monke = {
  id: 20,
  isDed: false,
};

eatBanana(connor);
console.log({ connor }); // Doesn't cause an error
// connor.isDed = 'blow'; Raises an error despite value is already it

// -----------Interface            Same as type but only for objects and classes and functions
interface People {
  id: number;
  name: string;
  bankAccount?: string;
  introduce?: (note: string) => string;
}

let jeff: People = {
  id: 23043,
  name: "Jeffrey",
  introduce: () => "Hello My name is jeff",
};

interface MathFunc {
  (x: number, y: number): number; // Can only have one if it's function interface
}
let multiplier: MathFunc = (x: number, y: number): number => x * y;

// [6] Classes      Available in normal JS
class GameEntity {
  hp: number;
  mp: number;

  constructor(hp: number, mp: number) {
    this.hp = hp;
    this.mp = mp;
    console.log("Original Constructor called");
  }
}

// Inheritance
class Monster extends GameEntity {
  constructor(hp: number, mp: number) {
    super(hp, mp); // Super must be included
    console.log("Derived Constructor Called");
  }

  attack(target: GameEntity, dmg: number) {
    target.hp -= dmg;
  }
}

let Slime = new Monster(200, 100);
let Player = new GameEntity(1000, 500);

console.log(Player.hp);
Slime.attack(Player, 100);
console.log(Player.hp);

// [7] Generics                 It's only there to keep the type consistence, and not interfere with the value itself, it's used to when you need to redeclare something using type
function create2DimArray<T>(val: T, xDim: number, yDim: number): T[][] {
  let firstArray = new Array(xDim).fill(val);
  let secondArray = new Array(yDim).fill(firstArray);
  return secondArray;
}

let chessBoard = create2DimArray<number>(0, 2, 10);
console.log(chessBoard);
