export const checkSameElementExistence = (a: number[], b: number[]): boolean => {
  let res = false;
  a.forEach(n => { if (b.includes(n)) res = true; });

  return res;
}