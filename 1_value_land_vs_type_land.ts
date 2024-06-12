//  primitive types -------------------

let myBooleanValue = true;
type MyBooleanValue1 = typeof myBooleanValue;

myBooleanValue = false;
type MyBooleanValue2 = typeof myBooleanValue;

const testTypeof = typeof myBooleanValue; // /!\ this is different from typeof operator in js
const testTypeofConstValue = typeof true;

let myBooleanValueManuallyTyped: boolean = true;
let myBooleanValueManuallyTyped1: MyBooleanValue1 = true;
let myBooleanValuWronglyTyped: string = true;

let myStr = "true";
myStr + 3;
myStr = 4;
myStr * 3;

let myNumber = 1;
myNumber + 3;
myNumber * 3;

//  array types -------------------

let myArray = [1, 2, 3];
myArray.push(4);
myArray.push("2");
type MyArray = typeof myArray;
type MyArrayValues = (typeof myArray)[number];

let myArrayManuallyTyped: number[] = [1, 2, 3];
let myOtherArrayManuallyTyped: Array<Number> = [1, 2, 3];

let myMixedArray = [true, true, null];
myMixedArray.push(false);
myMixedArray.push(undefined);

type MyMixedArray = typeof myMixedArray;
type MyMixedArrayValues = (typeof myMixedArray)[number];

//  object types -------------------
const object = {
  name: "Teddy Riner",
  age: 34,
  olympicMedals: ["gold", "gold", "gold", "bronze", "bronze"],
};

type TesttWithTypeof = typeof object;

type TestWithType = {
  name: string;
  age: number;
  olympicMedals: string[];
};

interface TestWithInterface {
  name: string;
  age: number;
  olympicMedals: string[];
}

type NameType = TestWithInterface["name"];
type AgeType = TestWithInterface["age"];

type OlympicMedalsType = TestWithInterface["olympicMedals"];
type OlympicMedalType = TestWithInterface["olympicMedals"][number];

// keyof

type TestKeys = keyof typeof object;
type Values = (typeof object)[TestKeys];

const objectWithSameKeysButAllStrings = {
  name: "Teddy Riner",
  age: "34",
  olympicMedals: '"gold", "gold", "gold", "bronze", "bronze"',
};
type AllStr = (typeof objectWithSameKeysButAllStrings)[TestKeys];
