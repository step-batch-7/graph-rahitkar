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
    it('should validate for path Kolkata to Chennai for given densely connected pairs', () => {
      assert.strictEqual(bfs(pairs, 'Kolkata', 'Chennai'), true);
    });
    it('should invalidate for path Kolkata to pune for given densely connected pairs', () => {
      assert.strictEqual(bfs(pairs, 'Kolkata', 'pune'), false);
    });

    it('should invalidate for path Kolkata to Kolkata for given pairs where Kolkata is not connected to itself ', () => {
      assert.strictEqual(bfs([['Kolkata', 'Bangalore'], ['Bangalore', 'Chennai'], ['Chennai', 'Bangalore']], 'Kolkata', 'Kolkata'), false);
    });

    it('should validate for path Kolkata to Kolkata for given paries where Kolkata is connected to itself', () => {
      assert.strictEqual(bfs([['Kolkata', 'Bangalore'], ['Kolkata', 'Kolkata']], 'Kolkata', 'Kolkata'), true);
    });

    it('should invalidate for path Kolkata to Kolkata for given pairs where Kolkata is not connected to itself and one child has no edge', () => {
      assert.strictEqual(bfs([['Kolkata', 'Bangalore'], ['Bangalore', 'Chennai']], 'Kolkata', 'Kolkata'), false);
    });
  });
});
