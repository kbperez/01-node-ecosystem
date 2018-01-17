'use strict';

const arithmetic = module.exports = {};

arithmetic.add = function (a, b) {
  return (typeof a === 'number' && typeof b === 'number') ? (a + b): null
}

arithmetic.sub = function (c, d) {
  return (typeof c === 'number' && typeof d === 'number') ? (c - d): null
}
