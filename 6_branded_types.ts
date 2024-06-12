function findByRank(results: BobsleighResults, searchedRank: Rank) {
  return results.find((r) => r.rank === searchedRank);
}

// type CountryID = number;
// type Rank = number;

// type BobsleighResults = {
//   value: CountryID;
//   label: string;
//   rank: Rank;
// }[];

// const bobsleighgCountriesResult: BobsleighResults = [
//   { value: 1, label: "FR", rank: 1 },
//   { value: 2, label: "DE", rank: 4 },
//   { value: 3, label: "UK", rank: 6 },
//   { value: 4, label: "NO", rank: 3 },
//   { value: 5, label: "SE", rank: 5 },
//   { value: 6, label: "JM", rank: 2 },
// ];

// const test = findByRank(bobsleighgCountriesResult, 1);

// test;

// findByRank(bobsleighgCountriesResult, bobsleighgCountriesResult[1].value); // oops

declare const __brand: unique symbol;
type Brand<B> = { [__brand]: B };
export type Branded<T, B> = T & Brand<B>;

type CountryID = Branded<number, "CountryId">;
type Rank = Branded<number, "Rank">;

type BobsleighResults = {
  value: CountryID;
  label: string;
  rank: Rank;
}[];

const bobsleighgCountriesResult: BobsleighResults = [
  { value: 1 as CountryID, label: "FR", rank: 1 as Rank },
  { value: 2 as CountryID, label: "DE", rank: 4 as Rank },
  { value: 3 as CountryID, label: "UK", rank: 6 as Rank },
  { value: 4 as CountryID, label: "NO", rank: 3 as Rank },
  { value: 5 as CountryID, label: "SE", rank: 5 as Rank },
  { value: 6 as CountryID, label: "JM", rank: 2 as Rank },
];

// or better
// const rawResultsExample = [
//   { value: 1, label: "FR", rank: 1 },
//   { value: 2, label: "DE", rank: 4 },
//   { value: 3, label: "UK", rank: 6 },
//   { value: 4, label: "NO", rank: 3 },
//   { value: 5, label: "SE", rank: 5 },
//   { value: 6, label: "JM", rank: 2 },
// ];

// function typeRawResult(rawResults: typeof rawResultsExample): BobsleighResults {
//   return rawResults as BobsleighResults;
// }
// const bobsleighgCountriesResult = typeRawResult(rawResultsExample);

function typeRank(numberRank): Rank {
  return numberRank as Rank;
}

findByRank(bobsleighgCountriesResult, 1); // number instead of rank -> Error
findByRank(bobsleighgCountriesResult, typeRank(1));
findByRank(bobsleighgCountriesResult, bobsleighgCountriesResult[0].value); // error was caught

findByRank(
  bobsleighgCountriesResult,
  bobsleighgCountriesResult[0].value as Rank
); // trying to lie to TS fails at first
findByRank(
  bobsleighgCountriesResult,
  bobsleighgCountriesResult[0].value as unknown as Rank
); // but you can always force your way through
