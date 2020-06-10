const assert = require('assert');
const { bfs, getGraph } = require('../src/graph');

describe('BFS', () => {
  describe('getGraph', () => {
    it('should create a graph from given two pairs', () => {
      const actual = getGraph([
        ['Kolkata', 'Bangalore'],
        ['Mumbai', 'Chennai'],
      ]);
      const expected = { Kolkata: ['Bangalore'], Mumbai: ['Chennai'] };
      assert.deepStrictEqual(actual, expected);
    });

    it('should create a graph from given pairs', () => {
      const pairs = [
        ['Kolkata', 'Bangalore'],
        ['Kolkata', 'Mumbai'],
        ['Kolkata', 'Chennai'],
        ['Bangalore', 'Kolkata'],
        ['Bangalore', 'Chennai'],
        ['Bangalore', 'Mumbai'],
        ['Mumbai', 'Chennai'],
        ['Mumbai', 'Kolkata'],
        ['Mumbai', 'Bangalore'],
        ['Chennai', 'Bangalore'],
        ['Chennai', 'Mumbai'],
        ['Chennai', 'Kolkata']
      ];
      const actual = getGraph(pairs);
      const expected = {
        Kolkata: ['Bangalore', 'Mumbai', 'Chennai'],
        Bangalore: ['Kolkata', 'Chennai', 'Mumbai'],
        Mumbai: ['Chennai', 'Kolkata', 'Bangalore'],
        Chennai: ['Bangalore', 'Mumbai', 'Kolkata']
      };
      assert.deepStrictEqual(actual, expected);
    });
  });
});
