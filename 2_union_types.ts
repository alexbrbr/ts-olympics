// restrict to a list of values

const judoka: Judoka = {
  name: "Teddy Riner",
  age: 34,
  olympicMedals: ["gold", "gold", "gold", "bronze", "bronze", "chocolate"],
};

interface Judoka {
  name: string;
  age: number;
  // olympicMedals: string[]; // previously
  olympicMedals: ("gold" | "silver" | "bronze")[];
  // olympicMedals: Array<"gold" | "silver" | "bronze">;
  // olympicMedals: Array<OlympicMedals>;
}

type OlympicMedals = "gold" | "silver" | "bronze";

type TennisGameScore = "0" | "15" | "30" | "40";

const player_A_score: TennisGameScore = "15";
const player_B_score: TennisGameScore = "30";

const fullScore = `${player_A_score}-${player_B_score}`;

// Template Literal Types (https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)
type TennisGameFullScore =
  | `${TennisGameScore}-${TennisGameScore}`
  | `40-Advantage`
  | `Advantage-40`;

const fullGameScore: TennisGameFullScore = "0-15";

type TennisTiebreakScore = `${bigint}`;
type TennisTiebreakFullScore = `${TennisTiebreakScore}-${TennisTiebreakScore}`;

const player_A_tiebreak_score: TennisTiebreakScore = "2";
const player_B_tiebreak_score: TennisTiebreakScore = "1";
const tiebreakScore: TennisTiebreakFullScore = "0-2";
const tiebreakWrongButMatchingTypeScore: TennisTiebreakFullScore = "2-100";

// discriminated unions
type FootballGameOutcome =
  | {
      result: "win";
      points: 3;
      winner: string;
    }
  | {
      result: "draw";
      points: 1;
    }
  | {
      result: "loss";
      points: 0;
      winner: string;
    };

const getPointsFromOutcome = (outcome: FootballGameOutcome) => {
  switch (outcome.result) {
    case "win": {
      const test = outcome.points;
      const winner = outcome.winner;
      return outcome.points;
    }
    case "draw": {
      const test = outcome.points;
      const winner = outcome.winner;
      return outcome.points;
    }
    case "loss": {
      const test = outcome.points;
      const winner = outcome.winner;
      return outcome.points;
    }
  }
};
