// Handles logical representation of graph
import canvas from './canvas';

function initGraph(range) {
  const graphRange = range || {
    right : 10,
    left : -10,
    top : 10,
    bottom : -10
  };

  canvas.initCanvas(graphRange);
}

export default {
  initGraph
}