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

const bfs = function(pairs, source, target) {
  const graph = getGraph(pairs);
  
  toBeVisited = [source];
  visited = [];
  let currentElement;
  while (toBeVisited.length > 0) {
    currentElement = toBeVisited.shift();
    visited.push(currentElement);
    
    if (graph[currentElement] && graph[currentElement].includes(target)) {
      return true;
    }

    graph[currentElement] && graph[currentElement].forEach((element) => {
      if (!toBeVisited.includes(element) && !visited.includes(element)) {
        toBeVisited.push(element);
      }
    });
  }
  return false;
};

module.exports = { bfs, getGraph };
