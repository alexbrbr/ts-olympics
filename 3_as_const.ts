let letCity = "Paris"; // here type is string
const constCity = "Paris"; // with const type becomes "Paris"

let objectLet = {
  city: "Tokyo",
};
objectLet.city = "Paris";
objectLet = {
  city: "Paris",
};
objectLet.newProperty = "ola";

const objectConst = {
  city: "Tokyo",
};
objectConst.city = "Paris";
objectConst = {
  city: "Paris",
};
objectConst.newProperty = "ola";

interface ReadOnlyObject {
  readonly city: string;
}
const objectConstReadonly: ReadOnlyObject = {
  city: "Tokyo",
};
const readOnlyCity = objectConstReadonly.city;
objectConstReadonly.city = "Paris";

const objectAsConst = {
  city: "Tokyo",
} as const;

const objectAsConstCity = objectAsConst.city;
objectAsConst.city = "Paris";

// same football example but without declaring types manually
const olympicTournamentResults = [
  {
    result: "win",
    points: 3,
    winner: "France",
  },
  {
    result: "draw",
    points: 1,
  },
  {
    result: "loss",
    points: 0,
    winner: "Brazil",
  },
] as const; // try removing as const to see the difference

const getPointsFromOutcomeConst = (
  outcome: (typeof olympicTournamentResults)[number]
) => {
  switch (outcome.result) {
    case "win": {
      const test = outcome.points;
      console.log(test);
      console.log(outcome.winner);
      return outcome.points;
    }
    case "draw": {
      const test = outcome.points;
      console.log(test);
      console.log(outcome.winner);
      return outcome.points;
    }
    case "loss": {
      const test = outcome.points;
      console.log(outcome.winner);
      console.log(test);
      return outcome.points;
    }
  }
};

// comparing type first with derived types
type BobsleighCountries = "FR" | "DE" | "UK" | "NO" | "SE" | "JM";
const bobsleighgCountriesOptions: {
  value: number;
  label: BobsleighCountries;
}[] = [
  { value: 1, label: "FR" },
  { value: 2, label: "DE" },
  { value: 3, label: "UK" },
  { value: 4, label: "NO" },
  { value: 5, label: "SE" },
  { value: 5, label: "JM" },
];

const bobsleighgCountriesOptionsToDerive = [
  { value: 1, label: "FR" },
  { value: 2, label: "DE" },
  { value: 3, label: "UK" },
  { value: 4, label: "JM" },
  { value: 5, label: "NO" },
  { value: 6, label: "SE" },
] as const;
type BobsleighCountrieDerived =
  (typeof bobsleighgCountriesOptionsToDerive)[number]["label"];
