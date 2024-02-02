type THelper<T, U> = T extends string
  ? { [P in T]: P extends U ? P : never }[T] extends { [P in T]: unknown }
    ? U
    : never
  : U;

export function includes<
  T,
  U extends THelper<T, U> extends never ? unknown : never
>(arr: readonly T[], searchElement: U, fromIndex?: number): boolean {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (arr as any).includes(searchElement, fromIndex);
}

// other solution : https://stackoverflow.com/questions/72069367/array-of-union-type-errors-using-includes

const basicTypes = ["creditNote", "quotation", "invoicing"] as const;

var test = "";

const r1 = basicTypes.includes(test);
const r2 = includes(basicTypes, test);

const obj: Record<(typeof basicTypes)[number], number> = {
  creditNote: 1,
  quotation: 2,
  invoicing: 0,
} as const;
const test2 = Object.keys(obj);

// https://stackoverflow.com/questions/52856496/typescript-object-keys-return-string
