// generics with one type

function firstUntyped(array) {
  return array[0];
}

const olympicCountries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  // ...
];

const olympicPoleVaultRecords = [
  6.03, // 🇧🇷
  5.98, // 🇫🇷
  5.97, // 🇫🇷
];
const testCountry = firstUntyped(olympicCountries);
const testPoleVaultRecord = firstUntyped(olympicPoleVaultRecords);

function firstWithGenerics<T>(array: T[]) {
  // by convention generics often use one letter (T, U, etc.)
  return array[0];
}

const testCountryGeneric = firstWithGenerics(olympicCountries);
const testPoleVaultRecordGeneric = firstWithGenerics(olympicPoleVaultRecords);

const olympicCountriesConst = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  // ...
] as const;

const olympicPoleVaultRecordsConst = [
  6.03, // 🇧🇷
  5.98, // 🇫🇷
  5.97, // 🇫🇷
] as const;

const testCountryGenericAsConst = firstWithGenerics(olympicCountriesConst);
const testPoleVaultRecordGenericAsConst = firstWithGenerics(
  olympicPoleVaultRecordsConst
);

function firstWithGenerics2<T>(array: T[] | readonly T[]) {
  return array[0];
}

const testCountryGeneric2 = firstWithGenerics2(olympicCountriesConst);

type Countries = (typeof olympicCountriesConst)[number];
const testCountryGeneric2bis = firstWithGenerics2<Countries>(
  olympicCountriesConst
);
const testCountryGeneric2ter = firstWithGenerics2<string>(
  olympicCountriesConst
);
const testCountryGeneric2error = firstWithGenerics2<boolean>(
  olympicCountriesConst
);
const testPoleVaultRecordGeneric2 = firstWithGenerics2(
  olympicPoleVaultRecordsConst
);

// generics with 2 types depending on each other

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

const olympicMedalsByChampion = {
  "Teddy Riner": {
    gold: 3,
    bronze: 2,
  },
  "Kevin Mayer": {
    silver: 2,
  },
} as const;

const teddyBearMedals = getProperty(olympicMedalsByChampion, "Teddy Riner");
const kekeLaBraiseMedals = getProperty(olympicMedalsByChampion, "Kevin Mayer");
const zizouMedals = getProperty(olympicMedalsByChampion, "Zinedine Zidane");

const medalsByCountryIn2021 = {
  "🇺🇸": {
    gold: 39,
    silver: 41,
    bronze: 33,
    total: 113,
  },
  "🇨🇳": {
    gold: 38,
    silver: 32,
    bronze: 19,
    total: 89,
  },
  "🇫🇷": {
    gold: 10,
    silver: 12,
    bronze: 11,
    total: 33,
  },
} as const;

const chinaMedals = getProperty(medalsByCountryIn2021, "🇨🇳");
const frTotalMedals = getProperty(medalsByCountryIn2021, "🇫🇷").total;
const pirateMedals = getProperty(medalsByCountryIn2021, "🏴‍☠️");

// one classic problem that you might have encountered : how to type Array.reduce ?
// inspired by https://www.totaltypescript.com/how-to-type-array-reduce

const athleticsMedals = [
  { name: "Paavo Nurmi", country: "Finland", gold: 9, silver: 3, bronze: 0 },
  { name: "Carl Lewis", country: "USA", gold: 9, silver: 1, bronze: 0 },
  { name: "Ray Ewry", country: "USA", gold: 8, silver: 0, bronze: 0 },
  { name: "Usain Bolt", country: "Jamaica", gold: 8, silver: 0, bronze: 0 },
  { name: "Allyson Felix", country: "USA", gold: 7, silver: 3, bronze: 1 },
] as const;

// naive method works but we get "{}" as result type
const medalsTotalByCountry = athleticsMedals.reduce((acc, athlete) => {
  const athleteTotal = athlete.gold + athlete.silver + athlete.bronze;

  if (!acc[athlete.country]) {
    return { ...acc, [athlete.country]: athleteTotal };
  }
  return { ...acc, [athlete.country]: athleteTotal + acc[athlete.country] };
}, {});

type MedalRecordsByCountry = Record<
  (typeof athleticsMedals)[number]["country"],
  number
>;

// solution 1 : assert type
const medalsTotalByCountry1 = athleticsMedals.reduce((acc, athlete) => {
  const athleteTotal = athlete.gold + athlete.silver + athlete.bronze;

  if (!acc[athlete.country]) {
    return { ...acc, [athlete.country]: athleteTotal };
  }
  return { ...acc, [athlete.country]: athleteTotal + acc[athlete.country] };
}, {} as MedalRecordsByCountry);

// solution 2 : annotate parameter
const medalsTotalByCountry2 = athleticsMedals.reduce(
  (acc: Record<string, number>, athlete) => {
    const athleteTotal = athlete.gold + athlete.silver + athlete.bronze;

    if (!acc[athlete.country]) {
      return { ...acc, [athlete.country]: athleteTotal };
    }
    return {
      ...acc,
      [athlete.country]: athleteTotal + (acc[athlete.country] as number),
    };
  },
  {}
);

// solution 3 : pass a type argument
const medalsTotalByCountry3 = athleticsMedals.reduce<Record<string, number>>(
  (acc, athlete) => {
    const athleteTotal = athlete.gold + athlete.silver + athlete.bronze;

    if (!acc[athlete.country]) {
      return { ...acc, [athlete.country]: athleteTotal };
    }
    return { ...acc, [athlete.country]: athleteTotal + acc[athlete.country] };
  },
  {}
);

// solution 4 : use default with all possible values and let the type be inferred
const medalsTotalByCountry4 = athleticsMedals.reduce(
  (acc, athlete) => {
    const athleteTotal = athlete.gold + athlete.silver + athlete.bronze;

    if (!acc[athlete.country]) {
      return { ...acc, [athlete.country]: athleteTotal };
    }
    return { ...acc, [athlete.country]: athleteTotal + acc[athlete.country] };
  },
  {
    Finland: 0,
    USA: 0,
    Jamaica: 0,
  }
);
