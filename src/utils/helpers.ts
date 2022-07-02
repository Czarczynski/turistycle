export const compareObjects = (first: Object, second: Object): boolean =>
  JSON.stringify(first) === JSON.stringify(second)
