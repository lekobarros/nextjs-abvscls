export const lerp = (a: number, b: number, n: number): number => (1 - n) * a + n * b;

export const doMath = {
  lerp
}

export default doMath;