/**
 * Wikipedia: https://en.wikipedia.org/wiki/Harshad_number
 * A Harshad number (or Niven number) is a positive integer that is divisible by the sum of its own digits.
 *
 * The function checks if a number is a Harshad (Niven) number.
 * @param {any} val - The number to check
 * @returns {boolean} - true if Harshad, false otherwise
 * @example isHarshad(2025) // true
 */
export const isHarshad = (val) => {
  const num = Number(val)

  if (num <= 0 || !Number.isInteger(num)) return false

  let sum = 0,
    temp = num

  while (temp > 0) {
    sum += temp % 10
    temp = Math.floor(temp / 10)
  }

  return num % sum === 0
}
