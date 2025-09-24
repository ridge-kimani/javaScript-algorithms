import { isHarshad } from '../isHarshad.js'

describe('Harshad number tests', () => {
  test('Basic Harshad numbers', () => {
    expect(isHarshad(18)).toBe(true)
    expect(isHarshad(21)).toBe(true)
    expect(isHarshad(12)).toBe(true)
    expect(isHarshad(6804)).toBe(true)
    expect(isHarshad('18')).toBe(true)
    expect(isHarshad(2025)).toBe(true)
  })

  test('Non-Harshad numbers', () => {
    expect(isHarshad(19)).toBe(false)
    expect(isHarshad(25)).toBe(false)
    expect(isHarshad(97)).toBe(false)
  })

  test('Edge cases', () => {
    expect(isHarshad(0)).toBe(false)
    expect(isHarshad(-18)).toBe(false)
    expect(isHarshad(1)).toBe(true)
    expect(isHarshad(10)).toBe(true)
  })

  test('Input validation', () => {
    expect(isHarshad(18.5)).toBe(false)
    expect(isHarshad(null)).toBe(false)
    expect(isHarshad(undefined)).toBe(false)
  })
})
