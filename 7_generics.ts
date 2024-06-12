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
