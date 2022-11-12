/**
 * Verify if {@link n} is a `number` and an `integer`.
 *
 * @param n the number to verify
 */
export function isInteger(n: number): boolean {
  return Number(n) === n && n % 1 === 0
}

/**
 * Verify if {@link n} is a `number` and a `float`.
 *
 * @param n the number to verify
 */
export function isFloat(n: number): boolean {
  return Number(n) === n && n % 1 !== 0
}
