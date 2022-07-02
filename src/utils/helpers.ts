export const compareObjects = (first: unknown, second: unknown): boolean =>
  JSON.stringify(first) === JSON.stringify(second)
