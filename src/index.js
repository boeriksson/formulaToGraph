import graph from './graph';

function start() {
  graph.initGraph({
    left: 0,
    right: 5,
    top: 10,
    bottom: -10
  });

}

window.onload = start;