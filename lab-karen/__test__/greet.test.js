'use strict';

const greet = require('../lib/greet.js');

describe('Greeting Module', function() {

  it('should return null for a non-string input', function() {

    expect(greet(1)).toBe(null);
    expect(greet(true)).toBe(null);
    expect(greet(undefined)).toBe(null);
  })

  it('should return "Hello " and the input string for a string input', function() {

    expect(greet('Karen')).toBe('Hello Karen');
    expect(greet('world')).toBe('Hello world');
    expect(greet('THREE')).toBe('Hello THREE');
  })

})
