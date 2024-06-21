// New versions of TS are released often
// Version 5.5 was released yesterday (June 20th 2024)
// Here is an example of the improvement

const array = [1, "", false] as const;
const newArr = array.filter((v) => !!v);
// in TS <= 5.4 type of newArr is (false | "" | 1)[]
// in TS 5.5 type of newArr is 1[]

// some references :

// Total Typescript by Matt Pocock, you can find lots of examples and workshop for free on GitHub or via a paid course
// https://www.totaltypescript.com/tutorials
// https://github.com/orgs/total-typescript/repositories

// TypeScript Deep dive , a presentation by Christian Woerz
// https://www.youtube.com/watch?v=4SPkpIap4Ls

// The official docs and the patch notes are really good :
// https://www.typescriptlang.org/docs/handbook/intro.html
// https://devblogs.microsoft.com/typescript/announcing-typescript-5-5-beta/
