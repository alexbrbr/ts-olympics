// New versions of TS are released often
// Version 5.5 was released yesterday (June 20th 2024)
// Here is an example of the improvement

const array = [1, "", false] as const;
const newArr = array.filter((v) => !!v);
// in TS <= 5.4 type of newArr is (false | "" | 1)[]
// in TS 5.5 type of newArr is 1[]
