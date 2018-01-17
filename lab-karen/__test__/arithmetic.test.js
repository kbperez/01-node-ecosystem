'use strict'

const arithmetic = require('../lib/arithmetic.js')

describe('Math Module', function() {
  describe('#Add', function() {

    it('should take two numbers and return the sum', function() {
    expect(arithmetic.add(1, 2)).toBe(3);
    expect(arithmetic.add(-1, 5)).toBe(4);
    expect(arithmetic.add(1.1, 2.5)).toBeCloseTo(3.6);
  })

    it('should validate that the input for `add` are numeric values', function() {
      expect(arithmetic.add(1, 'a')).toBe(null);
      expect(arithmetic.add('b', 6)).toBe(null);
      expect(arithmetic.add('hi', 'lo')).toBe(null);
    })
  })

  describe('#Sub', function() {

    it('should take two numbers and return the difference', function() {
      expect(arithmetic.sub(11, 2)).toBe(9);
      expect(arithmetic.sub(2, 5)).toBe(-3);
      expect(arithmetic.sub(9.9, 1.8)).toBeCloseTo(8.1);
  })

    it('should validate that the input for `sub` are numeric values', function() {
      expect(arithmetic.sub(1, 'a')).toBe(null);
      expect(arithmetic.sub('b', 6)).toBe(null);
      expect(arithmetic.sub('hi', 'lo')).toBe(null);
    })
  })
})
