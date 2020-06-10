//Example
// Pairs => [[from,to],[to,from]]
// Source => from
// To => to
// Should return true.

const getGraph = function(pairs) {
  return pairs.reduce((graph, element) => {
    if (!graph[element[0]]) {
      graph[element[0]] = [];
    }
    graph[element[0]].push(element[1]);
    return graph;
  }, {});
};

const bfs = function(pairs, source, target) {};

module.exports = { bfs, getGraph };
