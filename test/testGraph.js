const assert = require('assert');
const { bfs, getGraph } = require('../src/graph');

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
  ['Chennai', 'Kolkata'],
];

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
      const actual = getGraph(pairs);
      const expected = {
        Kolkata: ['Bangalore', 'Mumbai', 'Chennai'],
        Bangalore: ['Kolkata', 'Chennai', 'Mumbai'],
        Mumbai: ['Chennai', 'Kolkata', 'Bangalore'],
        Chennai: ['Bangalore', 'Mumbai', 'Kolkata'],
      };
      assert.deepStrictEqual(actual, expected);
    });
  });

  describe('bfs', () => {
    it('should return true for path Kolkata to Chennai', () => {
      assert.strictEqual(bfs(pairs, 'Kolkata', 'Chennai'), true);
    });
    it('should return true for path Kolkata to pune', () => {
      assert.strictEqual(bfs(pairs, 'Kolkata', 'pune'), false);
    });

    it('should return false for path Kolkata to Kolkata', () => {
      assert.strictEqual(bfs([['Kolkata', 'Bangalore'], ['Bangalore', 'Chennai'], ['Chennai', 'Bangalore']], 'Kolkata', 'Kolkata'), false);
    });

    it('should return false for path Kolkata to Kolkata', () => {
      assert.strictEqual(bfs([['Kolkata', 'Bangalore'], ['Bangalore', 'Chennai'], ['Chennai', 'Bangalore']], 'Kolkata', 'Kolkata'), false);
    });

    it('should return true for path Kolkata to Kolkata for given paries', () => {
      assert.strictEqual(bfs([['Kolkata', 'Bangalore'], ['Kolkata', 'Kolkata']], 'Kolkata', 'Kolkata'), true);
    });
  });
});
