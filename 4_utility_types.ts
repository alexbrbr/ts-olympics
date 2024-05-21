// https://www.typescriptlang.org/docs/handbook/utility-types.html

// Intrinsic String Manipulation Types

type UppercaseSimpleStringExample = Uppercase<"Ola">;

type UnionStringExample = "Hello" | "world";

type UppercaseUnionStringExample = Uppercase<UnionStringExample>;
type LowercaseUnionStringExample = Lowercase<UnionStringExample>;
type CapitalizeUnionStringExample = Capitalize<UnionStringExample>;
type UncapitalizeUnionStringExample = Uncapitalize<UnionStringExample>;

// Function utility type

function isEven(myNumber: number, justForLog: string) {
  console.log(justForLog);
  return myNumber % 2 == 0;
}

type IsEvenParams = Parameters<typeof isEven>;
type IsEvenReturn = ReturnType<typeof isEven>;

const myNewNumber: IsEvenParams = [5, ""];

// Record<Keys, Type>

type NewSportsPerYear = {
  //   [year: number]: string[];
  [year in 2024 | 2020]: string[];
};

const newSportsByYear: NewSportsPerYear = {
  2024: ["Breakdance"],
  2020: [
    "3x3 basketball",
    "Sport climbing",
    "Karate",
    "Skateboard",
    "Surf",
    "freestyle BMX",
  ],
};

type NewSportsPerYearRecord = Record<2024 | 2020, string[]>;
