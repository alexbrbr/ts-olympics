const olympicGames = {
  Tokyo2020: {
    city: "Tokyo",
    country: "Japan",
    year: 2020,
    flameCarrier: "Naomi Osaka",
    season: "summer",
    garbageProp: null,
  },
  Beijing2022: {
    city: "Beijing",
    country: "China",
    year: 2022,
    season: "winter",
    unusedValue: "oops",
  },
  Paris2024: {
    city: "Paris",
    country: "France",
    year: 2024,
    season: "summer",
    onlyForTestEnvironment: true,
  },
};

const testOptionalProperty = olympicGames.Tokyo2020.flameCarrier;
const testOptionalButMissingProperty = olympicGames.Paris2024.flameCarrier;
const testUnionProperty = olympicGames.Beijing2022.season;

interface OlympicGames {
  country: string;
  city: string;
  year: number;
  flameCarrier?: string;
  season: "winter" | "summer";
}

const olympicGames2: { [country: string]: OlympicGames } = {
  Tokyo2020: {
    city: "Tokyo",
    country: "Japan",
    year: 2020,
    flameCarrier: "Naomi Osaka",
    season: "summer",
    garbageProp: null,
  },
  Beijing2022: {
    city: "Beijing",
    country: "China",
    year: 2022,
    season: "winter",
    unusedValue: "oops",
  },
  Paris2024: {
    city: "Paris",
    country: "France",
    year: 2024,
    season: "summer",
    onlyForTestEnvironment: true,
  },
};

const testOptionalProperty2 = olympicGames2.Tokyo2020.flameCarrier;
const testOptionalButMissingProperty2 = olympicGames2.Paris2024.flameCarrier;
const testUnionProperty2 = olympicGames2.Beijing2022.season;

const olympicGames3 = {
  Tokyo2020: {
    city: "Tokyo",
    country: "Japan",
    year: 2020,
    flameCarrier: "Naomi Osaka",
    season: "summer",
  },
  Beijing2022: {
    city: "Beijing",
    country: "China",
    year: 2022,
    season: "winter",
  },
  Paris2024: {
    city: "Paris",
    country: "France",
    year: 2024,
    season: "summer",
  },
} satisfies { [country: string]: OlympicGames };

const testOptionalButMissingProperty3 = olympicGames3.Paris2024.flameCarrier;
const testOptionalProperty3 = olympicGames3.Tokyo2020.flameCarrier;
const testUnionProperty3 = olympicGames3.Beijing2022.season;
